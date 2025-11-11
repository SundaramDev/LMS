import dotenv from "dotenv";
dotenv.config();

import { Webhook } from "svix";
import Stripe from "stripe";
import User from "../models/User.js";
import { Purchase } from "../models/Purchase.js";
import Course from "../models/Course.js";

// ============================================================
// ✅ CLERK WEBHOOK HANDLER
// ============================================================
export const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // Verify Clerk signature
    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses?.[0]?.email_address || "",
          name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          imageUrl: data.image_url || "",
        };
        await User.create(userData);
        console.log(`✅ Clerk User Created: ${userData.email}`);
        break;
      }

      case "user.updated": {
        await User.findByIdAndUpdate(data.id, {
          email: data.email_addresses?.[0]?.email_address || "",
          name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          imageUrl: data.image_url || "",
        });
        console.log(`🔄 Clerk User Updated: ${data.id}`);
        break;
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        console.log(`🗑️ Clerk User Deleted: ${data.id}`);
        break;
      }

      default:
        console.log(`⚠️ Unhandled Clerk event type: ${type}`);
    }

    res.status(200).json({ received: true });
  } catch (error) {
    console.error("❌ Clerk Webhook Error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

// ============================================================
// ✅ STRIPE WEBHOOK HANDLER
// ============================================================

// ✅ Initialize Stripe with secret key
const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

export const stripeWebhooks = async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    // Verify Stripe signature
    event = stripeInstance.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
    console.log("✅ Stripe Event Received:", event.type);
  } catch (err) {
    console.error("❌ Stripe Webhook Signature Error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      // ============================================================
      // ✅ PAYMENT SUCCESSFUL
      // ============================================================
      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object;
        const paymentIntentId = paymentIntent.id;

        // Get session linked to payment intent
        const sessions = await stripeInstance.checkout.sessions.list({
          payment_intent: paymentIntentId,
          limit: 1,
        });

        if (sessions.data.length === 0) {
          console.log("⚠️ No checkout session found for payment intent:", paymentIntentId);
          break;
        }

        const session = sessions.data[0];
        const { purchaseId, userId, courseId } = session.metadata || {};

        console.log("🎯 Successful Payment Metadata:", session.metadata);

        const purchase = await Purchase.findById(purchaseId);
        if (!purchase) {
          console.log("❌ Purchase not found for ID:", purchaseId);
          break;
        }

        // ✅ Mark purchase as completed
        purchase.status = "completed";
        await purchase.save();

        // ✅ Update user & course enrollment
        await Promise.all([
          User.findByIdAndUpdate(userId, { $addToSet: { enrolledCourses: courseId } }),
          Course.findByIdAndUpdate(courseId, { $addToSet: { enrolledStudents: userId } }),
        ]);

        console.log(`✅ Purchase ${purchaseId} marked as completed`);
        break;
      }

      // ============================================================
      // ❌ PAYMENT FAILED
      // ============================================================
      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object;
        const paymentIntentId = paymentIntent.id;

        const sessions = await stripeInstance.checkout.sessions.list({
          payment_intent: paymentIntentId,
          limit: 1,
        });

        if (sessions.data.length === 0) {
          console.log("⚠️ No session found for failed payment intent:", paymentIntentId);
          break;
        }

        const session = sessions.data[0];
        const { purchaseId } = session.metadata || {};

        await Purchase.findByIdAndUpdate(purchaseId, { status: "failed" });
        console.log(`❌ Payment failed for purchase ${purchaseId}`);
        break;
      }

      // ============================================================
      // OTHER EVENTS
      // ============================================================
      default:
        console.log(`⚠️ Unhandled Stripe event type: ${event.type}`);
    }

    res.json({ received: true });
  } catch (error) {
    console.error("❌ Stripe Webhook Processing Error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};
