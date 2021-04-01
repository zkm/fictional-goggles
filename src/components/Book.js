import React from 'react';

const Book = ({ book }) => {
	const { title, author_name, cover_i = [], key } = book;
	return (
		<div className="book">
			<p className="book-cover">
				{cover_i
					? <img src={`http://covers.openlibrary.org/b/id/${cover_i}.jpg`} alt="cover" />
					: <img src="/public/no-book-cover-available.jpg" alt="cover" />}
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
				<a href={`https://openlibrary.org${key}`}>Add/Remove Book</a>
			</footer>
		</div>
	);
};

export default Book;
