import React from "react";
import Book from "./Book";

const BookList = ({
  addToBookShelf,
  loading = false,
  books = [],
  count = 0,
}) => {
  return (
    <section>
      {loading && <div>Loading...</div>}
      {books.length > 0 && (
        <div className="container">
          <p>
            Showing <strong>{books.length}</strong> of <strong>{count}</strong>{" "}
            results.
          </p>
        </div>
      )}
      <div className="grid-container">
        {books.map((book) => (
          <Book book={book} addToBookShelf={addToBookShelf} key={book.key} />
        ))}
      </div>
    </section>
  );
};

export default BookList;
