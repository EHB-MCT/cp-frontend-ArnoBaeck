function SearchFilter({ onSearch }) {
	return <input type="text" placeholder="Search for a fairy tale" onChange={(event) => onSearch(event.target.value)} />;
}

export default SearchFilter;