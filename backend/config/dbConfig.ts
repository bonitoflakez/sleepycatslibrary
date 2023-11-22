import mongoose, { ConnectOptions } from 'mongoose';

const uri = `mongodb+srv://${Bun.env.DBUSER}:${Bun.env.DBPASS}@${Bun.env.DBURI}/?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(uri);
    console.log(`Connected to MongoDB: ${connection.connection.host}`);
  } catch (error: any) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export { connectDB }
