import React from 'react';
import coverPlaceholder from '../images/no-book-cover-available.jpg';

const Book = ({ book }) => {
	const { title, author_name, cover_i = [], key } = book;
	let cover_image;

	if (cover_i.length == null && cover_i !== -1) {
		cover_image = <img src={`https://covers.openlibrary.org/b/id/${cover_i}.jpg`} alt="cover" />;
	}

	return (
		<div className="book">
			<p className="book-cover">
				{cover_image ? cover_image : <img src={coverPlaceholder} alt="no cover" />}
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
