import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function SearchBar({ setSearchTerm }) {
	const navigate = useNavigate();

	// State to hold the value of the search input
	const [typedValue, setTypedValue] = useState("");
	const timerRef = useRef(null);

	// Effect to set a timeout for the search term update, but only if the input value changes
	// This prevents the search term from being updated immediately, allowing for a delay
	useEffect(() => {
		clearTimeout(timerRef.current);

		timerRef.current = setTimeout(() => {
			setSearchTerm(typedValue);
		}, 500);

		// Cleanup function to clear the timeout if the typedValue changes again before the timeout completes
		return () => clearTimeout(timerRef.current);
	}, [typedValue]);

	const handleChange = (event) => {
		const value = event.target.value;
		setTypedValue(value);

		// if the location is not already on the projects page, navigate to it
		if (location.pathname !== "/projects") {
			navigate("/projects");
		}
	};

	return (
		<input
			className="searchBar"
			type="text"
			placeholder="Search for a Fairytale"
			value={typedValue}
			onChange={handleChange}
		/>
	);
}

export default SearchBar;