
import React, { Component, Fragment } from "react";
import * as client from "./api/OpenLibraryClient";
import BookList from "./components/BookList.jsx";
import BookShelf from "./components/BookShelf.jsx";
import Search from "./components/Search.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";

class App extends Component {
  state = {
    books: [],
    isFetching: false,
    query: "",
    numFound: 0,
    bookShelfBooks: [],
    alert: null, // { type: 'error' | 'success', message: string }
  };

  _alertTimer = null;

  showAlert = (message, type = 'error', ms = 3000) => {
    if (this._alertTimer) clearTimeout(this._alertTimer);
    this.setState({ alert: { type, message } });
    this._alertTimer = setTimeout(() => this.setState({ alert: null }), ms);
  };

  componentWillUnmount() {
    if (this._alertTimer) clearTimeout(this._alertTimer);
  }

  addToBookShelf = (book) => {
    const key = book?.key;
    const alreadyAdded = this.state.bookShelfBooks.some((b) => (b?.key) === key);
    if (alreadyAdded) {
      this.showAlert('This book is already on your bookshelf.', 'error');
      return;
    }
    this.setState({
      bookShelfBooks: [...this.state.bookShelfBooks, book],
    });
  };

  removeFromBookShelf = (book) => {
    const key = book?.key;
    this.setState((prev) => ({
      bookShelfBooks: prev.bookShelfBooks.filter((b) => b?.key !== key),
    }), () => {
      this.showAlert('Removed from bookshelf.', 'success');
    });
  };

  onSearch = async (e) => {
    e.preventDefault();
    const q = (this.state.query || '').trim();
    if (!q) {
      this.showAlert('Please enter a book title to search.', 'error');
      return;
    }
    this.setState({ isFetching: true, books: [] });
    const result = await client.findBooks(q);
    const { docs = [], numFound = 0 } = result;
    this.setState({ books: docs, isFetching: false, numFound });
  };

  onQueryChange = ({ target: { value } }) => {
    this.setState({ query: value });
  };

  render() {
    return (
      <Fragment>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-indigo-600 text-white px-3 py-2 rounded">
          Skip to content
        </a>
        <header className="border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-5xl mx-auto px-4 py-6 flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">Fictional Goggles</h1>
              <p className="text-gray-700 dark:text-gray-300 mt-1">Open Library book search</p>
            </div>
            <ThemeToggle />
          </div>
        </header>
        <main id="main" className="max-w-5xl mx-auto px-4 py-6 space-y-4 md:space-y-0 md:grid md:grid-cols-12 md:gap-8">
          {this.state.alert && (
            <div role="status" aria-live="polite" className={`md:col-span-12 border rounded-md px-4 py-2 text-sm ${
              this.state.alert.type === 'error'
                ? 'bg-red-50 text-red-800 border-red-200 dark:bg-red-950/40 dark:text-red-200 dark:border-red-900'
                : 'bg-green-50 text-green-800 border-green-200 dark:bg-green-950/40 dark:text-green-200 dark:border-green-900'
            }`}>
              {this.state.alert.message}
            </div>
          )}
          <aside className="md:col-span-4 md:sticky md:top-4 md:self-start md:max-h-[calc(100vh-6rem)] md:overflow-auto">
            <BookShelf
              bookShelfBooks={this.state.bookShelfBooks}
              removeFromBookShelf={this.removeFromBookShelf}
            />
          </aside>
          <section className="md:col-span-8 space-y-8">
            <Search
              onQueryChange={this.onQueryChange}
              onSearch={this.onSearch}
              query={this.state.query}
            />
            <BookList
              addToBookShelf={this.addToBookShelf}
              bookShelfBooks={this.state.bookShelfBooks}
              loading={this.state.isFetching}
              books={this.state.books}
              count={this.state.numFound}
            />
          </section>
        </main>
      </Fragment>
    );
  }
}

export default App;
