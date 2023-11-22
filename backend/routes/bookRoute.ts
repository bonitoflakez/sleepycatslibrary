// routes/bookRoutes.ts
import express, { Request, Response } from 'express';
import { Book } from '../models/Book';

const router = express.Router();

// Add a book
router.post('/addBook', async (req: Request, res: Response) => {
  try {
    const { bookId, bookName, author, publisher, purchaseLink } = req.body;

    // input validation
    if (!bookId || !bookName || !author || !publisher || !purchaseLink) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // create a new book instance
    const newBook = new Book({ bookId, bookName, author, publisher, purchaseLink });

    // save the book to the database
    await newBook.save();

    return res.status(201).json(newBook);
  } catch (error) {
    console.error('Error adding a book:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Read all books
router.get('/getAllBooks', async (req: Request, res: Response) => {
  try {
    // fetch all books from database
    const allBooks = await Book.find();
    return res.status(200).json(allBooks);
  } catch (error) {
    console.error('Error getting all books:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a book
router.delete('/deleteBook/:id', async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;

    // find and delete the book by ID
    const deletedBook = await Book.findByIdAndDelete(bookId);

    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }

    return res.status(200).json(deletedBook);
  } catch (error) {
    console.error('Error deleting a book:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a book
router.put('/updateBook/:id', async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const { bookName, author, publisher, purchaseLink } = req.body;

    // input validation
    if (!bookName || !author || !publisher || !purchaseLink) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Find the book by ID and update its fields
    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      { bookName, author, publisher, purchaseLink },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }

    return res.status(200).json(updatedBook);
  } catch (error) {
    console.error('Error updating a book:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

export { router as bookRoutes };
