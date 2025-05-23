import { useState } from "react";

import envoirement from "../../../assets/scene3_envoirement.svg";
import gretel from "../../../assets/scene3_gretel.svg";
import Witch from "../Scene3_Witch";
import Hansel from "../Scene3_Hansel";
import GoldCoins from "../Scene3_GoldCoins";

function Scene3({ onTransitionEnd }) {
	const [hideScene3, setHideScene3] = useState(false);

	const handleEnd = () => {
		setHideScene3(true);
		onTransitionEnd();
	};

	return (
		<div className="scene scene3" style={{ display: hideScene3 ? "none" : "block" }}>
			<img src={envoirement} alt="envoirement" className="envoirement_scene3" />
			<img src={gretel} alt="gretel" className="gretel_scene3" />
			<Witch />
			<Hansel />
			<GoldCoins />
			<GoldCoins onTransitionEnd={handleEnd} />
		</div>
	);
}

export default Scene3;
