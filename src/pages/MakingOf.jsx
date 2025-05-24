import { useParams } from "react-router-dom";
import useFetchFairytales from "../hooks/useFetchFairyTales";
import Button from "../components/Button";
import ExplainerVideo from "../components/ExplainerVideo";

function MakingOf() {
	// Retrieves the 'id' parameter from the URL using the useParams hook.
	const { id } = useParams();

	const { fairytales, loading, error } = useFetchFairytales();

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error loading data: {error}</p>;
	}

	// Finds the fairytale in the list based on the ID from the URL.
	const fairyTale = fairytales.find((item) => item.id === id);

	if (!fairyTale) {
		return <p>Fairytale not found!</p>;
	}

	return (
		<div className="wrapper">
			<div className="MakingOf">
				{/* Renders the heading with student name and fairytale */}
				<ExplainerVideo name={fairyTale.fairytale} author={fairyTale.nameStudent} />

				{/* Renders the banner image of the fairytale */}
				<img src={fairyTale.imgBanner} alt={`${fairyTale.fairytale} banner`} />

				<div className="DescriptionDetails">
					<div className="DetailContainer1">
						<h2>Explainer video</h2>

						{/* If videoExplainer is a YouTube ID, embed the video */}
						{fairyTale.videoExplainer ? (
							<iframe
								width="100%"
								height="315"
								src={`https://www.youtube.com/embed/${fairyTale.videoExplainer}`}
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						) : (
							<p>No video available</p>
						)}
					</div>

					<div className="DetailContainer2">
						<h2>Description</h2>
						<p>{fairyTale.description}</p>

						<div className="visitWebsiteButton">
							{/* Button to visit the fairytale site */}
							<Button
								label="Visit website"
								onClick={() => {
									if (fairyTale.fairytaleLink) {
										window.open(fairyTale.fairytaleLink, "_blank");
									} else {
										console.log("No fairytale link available");
									}
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MakingOf;
