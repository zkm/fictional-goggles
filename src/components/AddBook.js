import React from 'react';
const BASE_DOMAIN = 'https://openlibrary.org';

class AddBook extends React.Component {
	render() {
		return (
			<div>
				<a href={`https://${BASE_DOMAIN}${this.props.bookKey}`}>Add Book</a>
			</div>
		);
	}
}

export default AddBook;
