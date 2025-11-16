import Stripe from "stripe";
import { Purchase } from "../models/Purchase.js";
import Course from "../models/Course.js";
import User from "../models/User.js";
import { CourseProgress } from "../models/courseProgress.js";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Get User Data
export const getUserData = async (req, res) => {
  try {
    const { userId } = req.auth;
    const user = await User.findById(userId);
    if (!user) return res.json({ success: false, message: "User not found" });
    res.json({ success: true, user });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get User Enrolled Courses
export const userEnrolledCourses = async (req, res) => {
  try {
    const { userId } = req.auth;
    const userData = await User.findById(userId).populate("enrolledCourses");
    if (!userData)
      return res.json({ success: false, message: "User not found" });
    res.json({ success: true, enrolledCourses: userData.enrolledCourses });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Purchase Course
export const purchaseCourse = async (req, res) => {
  try {
    const { courseId } = req.body;
    const { origin } = req.headers;
    const { userId } = req.auth;

    const userData = await User.findById(userId);
    const courseData = await Course.findById(courseId);

    if (!userData || !courseData) {
      return res.json({ success: false, message: "User or course not found" });
    }

    const amount = parseFloat(
      (
        courseData.coursePrice -
        (courseData.discount * courseData.coursePrice) / 100
      ).toFixed(2)
    );

    const newPurchase = await Purchase.create({
      courseId: courseData._id,
      userId,
      amount,
      status: "pending",
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: courseData.courseTitle },
            unit_amount: Math.floor(amount * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/loading/my-enrollments`,
      cancel_url: `${origin}/`,
      metadata: {
        purchaseId: newPurchase._id.toString(),
        courseId: courseData._id.toString(),
        userId: userId.toString(),
      },
    });

    res.json({ success: true, id: session.id, url: session.url });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Stripe Webhook
export const stripeWebhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Stripe Webhook verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const { purchaseId, courseId, userId } = session.metadata;

      await Purchase.findByIdAndUpdate(purchaseId, { status: "completed" });

      await Promise.all([
        User.findByIdAndUpdate(userId, { $addToSet: { enrolledCourses: courseId } }),
        Course.findByIdAndUpdate(courseId, { $addToSet: { enrolledStudents: userId } }),
      ]);

      console.log(`Purchase ${purchaseId} marked as completed`);
    } else {
      console.log(`Unhandled Stripe event type: ${event.type}`);
    }

    res.json({ received: true });
  } catch (error) {
    console.error("Stripe Webhook Error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Course Progress
export const updateCourseProgress = async (req, res) => {
  try {
    const { userId } = req.auth;
    const { courseId, lectureId } = req.body;
    const progressData = await CourseProgress.findOne({ userId, courseId });

    if (progressData) {
      if (progressData.lectureCompleted.includes(lectureId)) {
        return res.json({ success: true, message: "Lecture Already Completed" });
      }

      progressData.lectureCompleted.push(lectureId);
      await progressData.save();
    } else {
      await CourseProgress.create({
        userId,
        courseId,
        lectureCompleted: [lectureId],
      });
    }

    res.json({ success: true, message: "Progress Updated" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get User Course Progress
export const getUserCourseProgress = async (req, res) => {
  try {
    const { userId } = req.auth;
    const { courseId } = req.body;
    const progressData = await CourseProgress.findOne({ userId, courseId });
    res.json({ success: true, progressData });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
// Add User Ratings to Course
export const addUserRating = async (req, res) => {
  const { userId } = req.auth;
  const { courseId, rating } = req.body;

  if (!courseId || !userId || !rating || rating < 1 || rating > 5) {
    return res.json({ success: false, message: "Invalid Details" });
  }

  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.json({ success: false, message: "Course not found." });
    }

    const user = await User.findById(userId);
    if (!user || !user.enrolledCourses.includes(courseId)) {
      return res.json({ success: false, message: "User has not purchased this course." });
    }

    const existingRatingIndex = course.courseRatings.findIndex(
      (r) => r.userId.toString() === userId.toString()
    );

    if (existingRatingIndex > -1) {
      course.courseRatings[existingRatingIndex].rating = rating;
    } else {
      course.courseRatings.push({ userId, rating });
    }

    await course.save();

    return res.json({ success: true, message: "Rating added" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
