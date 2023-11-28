import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  bookId: {
    type: String,
    required: true
  },
  bookName: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
  purchaseLink: {
    type: String,
    required: true
  },
});

const Book = mongoose.model('Book', bookSchema);

export { Book };
