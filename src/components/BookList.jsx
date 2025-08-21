import React from "react";
import Book from "./Book.jsx";

const BookList = ({
  addToBookShelf,
  loading = false,
  books = [],
  count = 0,
}) => {
  return (
    <section aria-labelledby="results-heading" className="space-y-4">
      <h2 id="results-heading" className="text-xl font-medium">Results</h2>
      {loading && (
        <div role="status" aria-live="polite" className="text-sm text-gray-600 dark:text-gray-300">
          Loading…
        </div>
      )}
      {books.length > 0 && (
        <div className="text-sm text-gray-700 dark:text-gray-300">
          Showing <strong>{books.length}</strong> of <strong>{count}</strong> results.
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {books.map((book) => (
          <Book book={book} addToBookShelf={addToBookShelf} key={book.key} />
        ))}
      </div>
    </section>
  );
};

export default BookList;
