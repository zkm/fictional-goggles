import React from 'react';

const Book = ({ book }) => {
	const { title, author_name = [], key } = book;

	return (
		<div className="book">
			<p className="book-cover">
				<img src="https://placekitten.com/g/465/475" alt="cover" />
			</p>
			<div className="book-content">
				<p className="book-title">
					{title}
				</p>
				{author_name &&
					<p className="book-author">
						by {author_name.join(', ')}
					</p>}
			</div>
			<footer className="book-footer">
				<a href={`https://openlibrary.org${key}`}>Add Book</a>
				<a href={`https://openlibrary.org${key}`}>Remove Book</a>
			</footer>
		</div>
	);
};

export default Book;
