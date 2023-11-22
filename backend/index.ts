import express from "express";
import cors from "cors";
import { bookRoutes } from './routes/bookRoute';
import { connectDB } from "./config/dbConfig";

const app = express();
const port = 3001;

// middleware
app.use(cors());
app.use(express.json());

// mongoDB connection
connectDB();

// book routes
app.use('/books', bookRoutes);

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
