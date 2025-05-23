import { useNavigate } from "react-router-dom";
import placeholderImage from "../assets/placeholder_image_portalpage.png";

// I could also use props, but destructuring is more readable and cleaner in my opinion.
function FairyTaleTile({ id, name, author, image }) {
	const navigate = useNavigate();
	const img = image === "" ? placeholderImage : image;

	return (
		<div className="FairyTale">
			<div className="FairyTalePreview">
				<img src={img} alt={`Preview ${name}`} />
				<div className="InfoContainer">
					<div className="FairyTaleTitle">
						<h2>{name.toUpperCase()}</h2>
						<p>{author}</p>
					</div>
					<div className="FairyTaleDetailButton">
						<button onClick={() => navigate(`/making-of/${id}`)} className="infoBtn">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="none">
								<g clipPath="url(#clip0_62_103)">
									<path
										d="M8.00001 10.6666V7.99992M8.00001 5.33325H8.00668M14.6667 7.99992C14.6667 11.6818 11.6819 14.6666 8.00001 14.6666C4.31811 14.6666 1.33334 11.6818 1.33334 7.99992C1.33334 4.31802 4.31811 1.33325 8.00001 1.33325C11.6819 1.33325 14.6667 4.31802 14.6667 7.99992Z"
										stroke="white"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</g>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FairyTaleTile;