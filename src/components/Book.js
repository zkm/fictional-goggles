import React from 'react';
import coverPlaceholder from '../images/no-book-cover-available.jpg';
const DOMAIN = 'openlibrary.org';

class Book extends React.Component {
	render({ book }) {
		const { title, author_name, cover_i = [], key } = book;
		let coverImage;

		if (cover_i.length == null && cover_i !== -1) {
			coverImage = <img src={`https://covers.${DOMAIN}/b/id/${cover_i}.jpg`} alt="cover" />;
		}

		return (
			<div className="book">
				<p className="book-cover">
					{coverImage || <img src={coverPlaceholder} alt="no cover" />}
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
					<a href={`https://${DOMAIN}${key}`}>Add/Remove Book</a>
				</footer>
			</div>
		);
	}
}

export default Book;
