import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './configs/mongodb.js';
import { clerkWebhooks } from './controllers/webhooks.js';
import { stripeWebhook } from './controllers/userController.js';
import educatorRouter from './routes/educatorRoutes.js';
import { clerkMiddleware } from '@clerk/express';
import connectCloudinary from './configs/cloudinary.js';
import courseRouter from './routes/courseRoute.js';
import userRouter from './routes/userRoutes.js';

dotenv.config();
const app = express();

// Enable CORS
app.use(cors());

// Webhook routes (raw body)
app.post('/clerk', express.raw({ type: 'application/json' }), clerkWebhooks);
app.post('/stripe', express.raw({ type: 'application/json' }), stripeWebhook);

// Parse JSON body (after webhooks)
app.use(express.json());
app.use(bodyParser.json());

// Clerk middleware
app.use(clerkMiddleware());

// Database connection
connectDB()
  .then(() => console.log('✅ Database Connected Successfully'))
  .catch((err) => console.error('❌ Database Connection Failed:', err));

// Cloudinary connection
(async () => {
  try {
    await connectCloudinary();
    console.log('✅ Cloudinary Connected');
  } catch (error) {
    console.error('❌ Cloudinary Connection Failed:', error);
  }
})();

// Test route
app.get('/', (req, res) => {
  res.send('🚀 API Working Successfully');
});

// Application routes
app.use('/api/educator', educatorRouter);
app.use('/api/course', courseRouter);
app.use('/api/user', userRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
