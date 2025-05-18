import { useParams } from "react-router-dom";
import DATA from "../api/dummyData.json";
import Button from "../components/Button";
import ExplainerVideo from "../components/ExplainerVideo";

function DetailPage() {
	// Retrieves the 'id' parameter from the URL using the useParams hook.
	const { id } = useParams();
	const fairyTale = DATA.find((item) => item.id === parseInt(id));

	if (!fairyTale) {
		return <p>Fairytale not found!</p>;
	}

	return (
		<div className="wrapper">
			<div className="MakingOf">
				<ExplainerVideo name={fairyTale.name} author={fairyTale.author} />
				<img src={fairyTale.banner} alt={`${fairyTale.name} banner`} />
				<div className="DescriptionDetails">
					<div className="DetailContainer1">
						<h2>Explainer video</h2>
						<img src={fairyTale.video} alt={`${fairyTale.name} explainer video`} />
					</div>
					<div className="DetailContainer2">
						<h2>Description</h2>
						<p>{fairyTale.description}</p>
						<div className="visitWebsiteButton">
							<Button label="Visit website" onClick={() => console.log("Goto fairytale")} />
						</div>
						{/* How will i redirect to the fairytale page? What is the most efficient way to do this? */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default DetailPage;
