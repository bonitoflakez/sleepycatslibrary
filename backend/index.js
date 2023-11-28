import express from "express";
import cors from "cors";
import { bookRoutes } from './routes/bookRoute.js';
import { connectDB } from "./config/dbConfig.js";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/books', bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
