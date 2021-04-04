import React, { useState } from 'react';

const AddBook = () => {
	const [removeBook, addBook] = useState(false);
	return (
		<div>
			<button onClick={() => addBook(true)}>
				{removeBook ? 'Remove' : 'Add'} Book
			</button>
		</div>
	);
};

export default AddBook;
