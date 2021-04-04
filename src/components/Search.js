import React from 'react';
class Search extends React.Component {
	render() {
		return (
			<section>
				<div className="container">
					<form onSubmit={this.props.onSearch}>
						<div className="field">
							<div className="control">
								<input
									type="text"
									placeholder="Book Title"
									defaultValue={this.props.query}
									onChange={this.props.onQueryChange}
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
