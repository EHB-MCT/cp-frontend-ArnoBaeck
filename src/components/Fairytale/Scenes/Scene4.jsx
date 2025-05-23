import bg from "../../../assets/scene1_background.svg";
import Stars from "../Stars.jsx";
import Mountain from "../../../assets/scene1_mountain2.svg";
import MountainFront from "../../../assets/scene1_mountain1.svg";
import HanselAndGretel from "../../../assets/scene4_hanselAndGretel.svg";

import TextOverlay from "../TextOverlay.jsx";

function Scene4() {
	return (
		<div className="scene scene4">
			<img src={bg} alt="background" className="layer" />
			<Stars />
            <img src={Mountain} alt="mountain back" className="mountain_back" />
            <img src={MountainFront} alt="mountain front" className="mountain_front" />
            <img src={HanselAndGretel} alt="Hansel and Gretel" className="hansel_and_gretel" />

			<TextOverlay text="The end… Hansel and Gretel found their way out. Since that day, they lived a long and happy life." onDismiss={() => window.location.reload()}/>
		</div>
	);
}

export default Scene4;
