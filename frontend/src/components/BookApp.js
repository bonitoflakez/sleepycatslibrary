import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookForm from './BookForm';
import BookList from './BookList';
import Modal from 'react-modal';

const BookApp = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/books/getAllBooks');
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // fetch all books from backend
    fetchBooks();
  }, []);

  const handleFormSubmit = (formData) => {
    if (selectedBook) {
      // update existing book
      axios.put(`http://localhost:3001/books/updateBook/${selectedBook._id}`, formData)
        .then(response => console.log(response.data))
        .catch(error => console.error(error));
    } else {
      // add a new book
      axios.post('http://localhost:3001/books/addBook', formData)
        .then(response => console.log(response.data))
        .catch(error => console.error(error));
    }

    setSelectedBook(null);
    setModalOpen(false);

    // re-fetch data after adding or updating a book
    fetchBooks();
  };

  const handleEditClick = (book) => {
    setSelectedBook(book);
    setModalOpen(true);
  };

  const handleDeleteClick = (id) => {
    // delete book
    axios.delete(`http://localhost:3001/books/deleteBook/${id}`)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));

    // re-fetch data after deleting a book
    fetchBooks();
  };

  const handleModalClose = () => {
    setSelectedBook(null);
    setModalOpen(false);
  };

  return (
    <div>
      <div className='text-center'>
        <h1 className='font-bold text-2xl'>Sleepy Cats Library</h1>
        <button onClick={() => setModalOpen(true)} className="bg-green-500 text-white py-2 px-4 rounded-md mt-4">
          Add Book
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Book Form Modal"
      >
        <BookForm onSubmit={handleFormSubmit} initialData={selectedBook} />
        <button onClick={handleModalClose} className="close-button absolute top-4 right-4 text-3xl cursor-pointer">&times;</button>
        {/* <button onClick={handleModalClose} className="bg-red-500 text-white py-2 px-4 rounded-md mt-4">
          Close
        </button> */}
      </Modal>
      <BookList onEditClick={handleEditClick} onDeleteClick={handleDeleteClick} books={books} />
    </div>
  );
};

export default BookApp;
