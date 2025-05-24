import { useOutletContext } from "react-router-dom";
import useFetchFairytales from "../hooks/useFetchFairyTales";
import FairyTaleTile from "../components/FairyTaleTile";

function Projects() {
	const { searchTerm } = useOutletContext();

	const { fairytales, loading, error } = useFetchFairytales();

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error}</p>;
	}

	const filteredFairytales = fairytales.filter((fairyTale) =>
		fairyTale.fairytale.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="wrapper">
			<h1>All projects</h1>
			<div className="FairyTales">
				{filteredFairytales.map((fairyTale) => (
					<FairyTaleTile
						key={fairyTale.id}
						id={fairyTale.id}
						name={fairyTale.fairytale}
						author={fairyTale.nameStudent}
						image={fairyTale.imgThumbnail}
					/>
				))}
			</div>
		</div>
	);
}

export default Projects;
