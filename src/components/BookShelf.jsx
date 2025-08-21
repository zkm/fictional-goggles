import React, { Component } from "react";
import Book from "./Book.jsx";

class BookShelf extends Component {
  render() {
    const { bookShelfBooks = [], removeFromBookShelf } = this.props;
    return (
      <section aria-labelledby="shelf-heading" className="space-y-3">
        <h2 id="shelf-heading" className="text-xl font-medium text-gray-900 dark:text-gray-100">Bookshelf <span className="text-sm text-gray-700 dark:text-gray-400">({bookShelfBooks.length})</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
          {bookShelfBooks.length === 0 && (
            <p className="text-sm text-gray-700 dark:text-gray-400">No books yet. Add some from the results.</p>
          )}
          {bookShelfBooks.map((book) => (
            <div className="relative" key={book.key}>
              <Book book={book} showAdd={false} />
              {removeFromBookShelf && (
                <button
                  type="button"
                  className="absolute top-2 right-2 rounded-md bg-gray-900/70 text-white text-xs px-2 py-1 hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                  onClick={() => removeFromBookShelf(book)}
                  aria-label={`Remove ${book.title} from bookshelf`}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default BookShelf;
