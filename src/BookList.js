import React from 'react';
import Book from './Book';

const BookList = ({ loading = false, books = [], count = 0 }) => {
	return (
		<section>
			<div className="container">
				{loading}
				{books.length > 0 &&
					<p>
						Showing <strong>{books.length}</strong> of <strong>{count}</strong> results.
					</p>}
				{books.map(book => <Book book={book} key={book.key} />)}
			</div>
		</section>
	);
};

export default BookList;
