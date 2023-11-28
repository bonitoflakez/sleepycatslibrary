import express from 'express';
import { addBook, deleteBook, getAllBooks, updateBook } from '../controllers/book.controller.js';

const router = express.Router();

router.post('/addBook', addBook);
router.get('/getAllBooks', getAllBooks);
router.delete('/deleteBook/:id', deleteBook);
router.put('/updateBook/:id', updateBook);

export { router as bookRoutes };
