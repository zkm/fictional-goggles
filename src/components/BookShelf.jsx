import React, { Component } from "react";
import Book from "./Book.jsx";

class BookShelf extends Component {
  render() {
    return (
      <section aria-labelledby="shelf-heading" className="space-y-3">
        <h2 id="shelf-heading" className="text-xl font-medium">Bookshelf</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {this.props.bookShelfBooks.map((book) => (
            <Book book={book} key={book.key} />
          ))}
        </div>
      </section>
    );
  }
}

export default BookShelf;
