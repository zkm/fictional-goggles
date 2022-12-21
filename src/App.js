import React, { Component, Fragment } from "react";
import * as client from "./api/OpenLibraryClient";
import BookList from "./components/BookList";
import BookShelf from "./components/BookShelf";
import Search from "./components/Search";

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
        <section>
          <div className="container">
            <h1>Fictional Goggles</h1>
            <h2>Open Library book search</h2>
          </div>
        </section>
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
      </Fragment>
    );
  }
}

export default App;
