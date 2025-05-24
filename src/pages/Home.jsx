import useFetchFairytales from "../hooks/useFetchFairyTales";
import FairyTaleTile from "../components/FairyTaleTile";
import { useOutletContext, useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Home() {
	// The useOutletContext hook is used to access the context data passed from the parent route (Layout) to the child route (Home).
	const { searchTerm } = useOutletContext();
	const { fairytales, loading, error } = useFetchFairytales();
	const navigate = useNavigate();

	if (loading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>Error: {error}</div>;
	}

	const filteredFairytales = fairytales.filter((filteredFairytale) =>
		filteredFairytale.fairytale.toLowerCase().includes(searchTerm.toLowerCase())
	);

	// The spread operator (...) is used to create a copy of the filteredFairytales array.
	const randomSelection = [...filteredFairytales];
	const randomElements = [];
	const numberOfItems = 4;

	for (let i = 0; i < numberOfItems && randomSelection.length > 0; i++) {
		const randomIndex = Math.floor(Math.random() * randomSelection.length);
		randomElements.push(randomSelection[randomIndex]);
		randomSelection.splice(randomIndex, 1);
	}

	return (
		<div className="wrapper">
			<h1>In the spotlight</h1>
			<div className="FairyTales">
				{randomElements.map((FairyTale) => (
					<FairyTaleTile
						key={FairyTale.id}
						id={FairyTale.id}
						name={FairyTale.fairytale}
						author={FairyTale.nameStudent}
						image={FairyTale.imgThumbnail}
					/>
				))}
			</div>
			<div className="allProjectsBtn">
				<Button label="All projects" onClick={() => navigate("/projects")} />
			</div>
		</div>
	);
}

export default Home;
