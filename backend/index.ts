// index.js or app.js
import express from "express";
import cors from "cors";
import { bookRoutes } from './routes/bookRoute';
import { connectDB } from "./config/dbConfig";

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// mongoDB connection
connectDB();

// Use book routes
app.use('/books', bookRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
