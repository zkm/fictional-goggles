import React from 'react';

class Search extends React.Component {
	render({ query, onQueryChange, onSearch }) {
		return (
			<section>
				<div className="container">
					<form onSubmit={onSearch}>
						<div className="field">
							<div className="control">
								<input
									type="text"
									placeholder="Book Title"
									defaultValue={query}
									onChange={onQueryChange}
								/>
							</div>
							<div className="control">
								<button type="submit">Search</button>
							</div>
						</div>
					</form>
				</div>
			</section>
		);
	}
}
export default Search;
