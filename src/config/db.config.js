import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

export default connectDB;
