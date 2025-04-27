import { useNavigate } from "react-router-dom";

function SearchBar({ searchTerm, setSearchTerm }) {
	const navigate = useNavigate();

	// This function handles the change event of the search input field. When the users types in the search bar, they will be reditected to the projects page.
	const handleChange = (event) => {
		const value = event.target.value;
		setSearchTerm(value);

		if (location.pathname !== "/projects") {
			navigate("/projects");
		}
	};

	return <input type="text" placeholder="Search for a Fairytale" value={searchTerm} onChange={handleChange} />;
}

export default SearchBar;