import React from "react";
import Book from "./Book.jsx";

const BookList = ({
  addToBookShelf,
  bookShelfBooks = [],
  loading = false,
  books = [],
  count = 0,
}) => {
  return (
    <section aria-labelledby="results-heading" className="space-y-4">
      <h2 id="results-heading" className="text-xl font-medium text-gray-900 dark:text-gray-100">Results</h2>
      {loading && (
        <div role="status" aria-live="polite" className="flex items-center gap-2 text-sm text-hex-gray-900 dark:text-gray-300">
          <svg className="animate-spin h-4 w-4 text-indigo-600" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
          Searching Open Library…
        </div>
      )}
      {books.length > 0 && (
        <div className="text-sm text-hex-gray-900 dark:text-gray-300">
          Showing <strong className="font-semibold">{books.length}</strong> of <strong className="font-semibold">{count}</strong> results
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {books.map((book, idx) => {
          const unique = (book.edition_key && book.edition_key[0]) || book.cover_i || (book.isbn && book.isbn[0]) || idx
          const k = `${book.key || 'work'}::${unique}`
          const isAdded = bookShelfBooks.some((b) => b?.key === book?.key)
          return (
            <Book
              book={book}
              addToBookShelf={addToBookShelf}
              key={k}
              isAdded={isAdded}
            />
          )
        })}
      </div>
    </section>
  );
};

export default BookList;
