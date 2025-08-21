
import React, { Component, Fragment } from "react";
import * as client from "./api/OpenLibraryClient";
import BookList from "./components/BookList.jsx";
import BookShelf from "./components/BookShelf.jsx";
import Search from "./components/Search.jsx";

class App extends Component {
  state = {
    books: [],
    isFetching: false,
    query: "",
    numFound: 0,
    bookShelfBooks: [],
  };

  addToBookShelf = (book) => {
    this.setState({
      bookShelfBooks: [...this.state.bookShelfBooks, book],
    });
  };

  onSearch = async (e) => {
    e.preventDefault();
    this.setState({ isFetching: true, books: [] });
    const result = await client.findBooks(this.state.query);
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
          <div className="max-w-5xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-semibold tracking-tight">Fictional Goggles</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">Open Library book search</p>
          </div>
        </header>
        <main id="main" className="max-w-5xl mx-auto px-4 py-6 space-y-8">
          <BookShelf bookShelfBooks={this.state.bookShelfBooks} />
          <Search
            onQueryChange={this.onQueryChange}
            onSearch={this.onSearch}
            query={this.state.query}
          />
          <BookList
            addToBookShelf={this.addToBookShelf}
            loading={this.state.isFetching}
            books={this.state.books}
            count={this.state.numFound}
          />
        </main>
      </Fragment>
    );
  }
}

export default App;
