import { useParams } from "react-router-dom";
import useFetchFairytales from "../hooks/useFetchFairyTales";
import Button from "../components/Button";
import ExplainerVideo from "../components/ExplainerVideo";
import placeholderBanner from "../assets/placeholder_banner_portalpage.png";

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

	const bannerImg = fairyTale.imgBanner === "" ? placeholderBanner : fairyTale.imgBanner;

	return (
		<div className="wrapper">
			<div className="MakingOf">
				<ExplainerVideo name={fairyTale.fairytale} author={fairyTale.nameStudent} />

				<img src={bannerImg} alt={`${fairyTale.fairytale} banner`} />

				<div className="DescriptionDetails">
					{/* Only render the whole container if there is a video */}
					{fairyTale.videoExplainer && (
						<div className="DetailContainer1">
							<h2>Explainer video</h2>
							<iframe
								width="100%"
								height="315"
								src={`https://www.youtube.com/embed/${fairyTale.videoExplainer}`}
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>
					)}

					<div className="DetailContainer2">
						<h2>Description</h2>
						<p>{fairyTale.description}</p>

						<div className="visitWebsiteButton">
							{/* Button to visit the fairytale site */}
							{fairyTale.fairytaleLink ? (
								<Button label="Visit website" onClick={() => window.open(fairyTale.fairytaleLink, "_blank")} />
							) : (
								<p>
									This student has <strong>not</strong> submitted a link to his/her fairy tale
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MakingOf;
