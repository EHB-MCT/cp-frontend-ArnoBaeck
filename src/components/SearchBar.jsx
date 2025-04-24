function SearchBar({ searchTerm, setSearchTerm }) {
	return (
		<input
			type="text"
			placeholder="Search for a Fairytale"
			value={searchTerm}
			onChange={(event) => setSearchTerm(event.target.value)}
		/>
	);
}

export default SearchBar;