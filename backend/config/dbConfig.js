import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.DBURI}/?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(uri);
    console.log(`Connected to MongoDB: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export { connectDB }
