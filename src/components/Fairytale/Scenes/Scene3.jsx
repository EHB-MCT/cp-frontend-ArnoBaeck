import envoirement from "../../../assets/scene3_envoirement.svg";
import hansel from "../../../assets/scene3_hansel.svg";
import gretel from "../../../assets/scene3_gretel.svg";
import cellDoor from "../../../assets/scene3_cell_door.svg";
import Witch from "../Scene3_Witch";

function Scene3() {
	return (
		<div className="scene scene3">
			<img src={envoirement} alt="envoirement" className="envoirement_scene3" />
			<img src={hansel} alt="hansel" className="hansel_scene3" />
			<img src={gretel} alt="gretel" className="gretel_scene3" />
			<Witch />
			<img src={cellDoor} alt="cellDoor" className="cell_door_scene3" />
		</div>
	);
}

export default Scene3;
