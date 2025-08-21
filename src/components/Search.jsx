import React from "react";
class Search extends React.Component {
  render() {
    return (
      <section aria-labelledby="search-heading" className="space-y-3">
        <h2 id="search-heading" className="text-xl font-medium">Search</h2>
        <form onSubmit={this.props.onSearch} className="flex flex-col sm:flex-row gap-3 items-start sm:items-end">
          <div className="w-full sm:w-auto">
            <label htmlFor="q" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Book title</label>
            <input
              id="q"
              name="q"
              type="text"
              placeholder="e.g. Dune"
              defaultValue={this.props.query}
              onChange={this.props.onQueryChange}
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              aria-describedby="search-help"
            />
            <p id="search-help" className="sr-only">Enter a book title and press Search.</p>
          </div>
          <div>
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500">
              Search
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default Search;
