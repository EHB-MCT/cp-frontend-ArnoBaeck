import envoirement from "../../../assets/scene3_envoirement.svg";
import gretel from "../../../assets/scene3_gretel.svg";
import Witch from "../Scene3_Witch";
import Hansel from "../Scene3_Hansel";
import GoldCoins from "../Scene3_GoldCoins";

function Scene3() {
	return (
		<div className="scene scene3">
			<img src={envoirement} alt="envoirement" className="envoirement_scene3" />
			<img src={gretel} alt="gretel" className="gretel_scene3" />
			<Witch />
            <Hansel />
            <GoldCoins />
		</div>
	);
}

export default Scene3;
