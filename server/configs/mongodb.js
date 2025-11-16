import mongoose from "mongoose";

// Function to connect to MongoDB database
const connectDB = async () => {
  try {
    // Attempt to establish a connection using the URI from environment variables
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "GyanPath",  // Specify the database name
    });

    // If successful, log a confirmation message
    console.log("✅ Database Connected Successfully");
    
  } catch (error) {
    // Log the error message if the connection fails
    console.error("❌ MongoDB Connection Failed:", error.message);

    // Exit the application with failure code
    process.exit(1);
  }
};

export default connectDB;
