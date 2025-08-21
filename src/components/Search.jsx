import React from "react";
class Search extends React.Component {
  render() {
    const isEmpty = !this.props.query || this.props.query.trim().length === 0;
    return (
  <section aria-labelledby="search-heading" className="space-y-3">
  <h2 id="search-heading" className="text-xl font-medium text-gray-900 dark:text-gray-100">Search</h2>
  <div className="card rounded-lg border border-gray-200 dark:border-gray-800 p-4 shadow-sm">
  <form onSubmit={this.props.onSearch} className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <div className="w-full sm:w-auto">
            <label htmlFor="q" className="block text-sm font-medium text-gray-800 dark:text-gray-300">Book title</label>
            <input
              id="q"
              name="q"
              type="text"
              placeholder="e.g. Dune"
              defaultValue={this.props.query}
              onChange={this.props.onQueryChange}
              required
              minLength={1}
              aria-invalid={isEmpty}
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 placeholder:text-gray-400 dark:placeholder:text-gray-500 text-gray-900 dark:text-gray-100 px-3 py-2 shadow-sm hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-950 transition-colors"
              aria-describedby="search-help"
            />
            <p id="search-help" className={`mt-1 text-xs ${isEmpty ? 'text-red-600 dark:text-red-400' : 'sr-only'}`}>Please enter a book title.</p>
          </div>
          <div>
    <button type="submit" disabled={isEmpty} className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950 transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              Search
            </button>
          </div>
        </form>
    </div>
      </section>
    );
  }
}

export default Search;
