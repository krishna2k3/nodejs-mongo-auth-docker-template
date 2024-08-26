import { getMongoURIConnectionString } from "@/utils/utils";
import mongoose, { MongooseError } from "mongoose";

const connectDB = async () => {
  try {
    console.log("Trying to connect");
    const conn = await mongoose.connect(getMongoURIConnectionString());
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    if (error instanceof MongooseError) {
      console.log(`Error: ${error.message}`);
      process.exit(1);
    } else {
      console.log(`Error: ${error}`);
    }
  }
};

export default connectDB;
