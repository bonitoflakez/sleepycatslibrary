import React from 'react';

const BookList = ({ onEditClick, onDeleteClick, books }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 ml-2 mr-2">
      {books.map(book => (
        <div key={book._id} className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">{book.bookName} - {book.bookId}</h3>
          <p className="text-gray-700 mb-2">Author: {book.author}</p>
          <p className="text-gray-700 mb-4">Publisher: {book.publisher}</p>
          <div className="flex space-x-2">
            <button
              onClick={() => onEditClick(book)}
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Edit
            </button>
            <button
              onClick={() => onDeleteClick(book._id)}
              className="bg-red-500 text-white py-2 px-4 rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
