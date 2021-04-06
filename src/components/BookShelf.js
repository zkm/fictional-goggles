import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {
	render() {
		return (
			<section>
				<div className="flex-container book-added">
					{this.props.bookShelfBooks.map(book => <Book book={book} key={book.key} />)}
				</div>
			</section>
		);
	}
}

export default BookShelf;
