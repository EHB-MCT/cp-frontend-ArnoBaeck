import { useState } from "react";

import bg from "../../../assets/scene1_background.svg";
import house from "../../../assets/scene2_house.svg";
import mountain from "../../../assets/scene2_mountain.svg";
import candy from "../../../assets/scene2_candy.svg";
import hanselAndGretel from "../../../assets/scene2_handAndGretel.svg";
import tree1 from "../../../assets/scene2_tree1.svg";
import tree2 from "../../../assets/scene2_tree2.svg";
import tree3 from "../../../assets/scene2_tree3.svg";
import Stars from "../Stars.jsx";
import Scene2_Smoke from "../Scene2_Smoke.jsx";
import Scene2_Door from "../Scene2_Door.jsx";

function Scene2({ onTransitionEnd }) {
	const [hideScene2, setHideScene2] = useState(false);

	return (
		<div className="scene scene2" style={{ display: hideScene2 ? "none" : "block" }}>
			<img src={bg} alt="background" className="layer" />
			<img src={house} alt="house" className="house_scene2" />
			<img src={mountain} alt="mountain" className="mountain_scene2" />
			<img src={candy} alt="candy" className="candy_scene2" />
			<img src={hanselAndGretel} alt="Hansel and Gretel" className="hansel_gretel hansel_gretel_scene2" />
			<Scene2_Smoke />
			<img src={tree1} alt="tree1" className="tree_scene2 tree1_scene2" />
			<img src={tree2} alt="tree2" className="tree_scene2 tree2_scene2" />
			<img src={tree3} alt="tree3" className="tree_scene2 tree3_scene2" />
			<Scene2_Door onTransitionEnd={onTransitionEnd} onHide={() => setHideScene2(true)} />
			<Stars />
		</div>
	);
}

export default Scene2;
