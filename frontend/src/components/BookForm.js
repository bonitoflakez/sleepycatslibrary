import React, { useState } from 'react';

const BookForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || {});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-4 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">{initialData ? 'Edit Book' : 'Add New Book'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Book ID:</label>
          <input
            type="text"
            name="bookId"
            value={formData.bookId || ''}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Book Name:</label>
          <input
            type="text"
            name="bookName"
            value={formData.bookName || ''}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author || ''}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Publisher:</label>
          <input
            type="text"
            name="publisher"
            value={formData.publisher || ''}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Purchase Link:</label>
          <input
            type="text"
            name="purchaseLink"
            value={formData.purchaseLink || ''}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookForm;
