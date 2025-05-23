import { useState, useEffect, useRef } from "react";

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

import TextOverlay from "../TextOverlay.jsx";

function Scene2({ onTransitionEnd }) {
	const [hideScene2, setHideScene2] = useState(false);

	const [showOverlay, setShowOverlay] = useState(false);
	const [overlayText, setOverlayText] = useState("");
	const shownOverlays = useRef(new Set());

	useEffect(() => {
		if ("scrollRestoration" in window.history) {
			window.history.scrollRestoration = "manual";
		}
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			if (scrollY >= 0 && !shownOverlays.current.has("whats_next")) {
				shownOverlays.current.add("whats_next");
				setOverlayText("Hansel and Gretel have found a house made out of candy... But they do not know whats comming next... (click to remove the smoke.)");
				setShowOverlay(true);
			}

			if (scrollY >= 600 && !shownOverlays.current.has("door_open")) {
				shownOverlays.current.add("door_open");
				setOverlayText("They are about to go to the house... But before they do that, the door swings open!");
				setShowOverlay(true);
			}

			if (scrollY >= 1000 && !shownOverlays.current.has("witch_appears")) {
				shownOverlays.current.add("witch_appears");
				setOverlayText("A witch appears and invites them in... She seems friendly at first sight. But then...");
				setShowOverlay(true);
			}
		};

		if (showOverlay) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [showOverlay]);

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

			{showOverlay && <TextOverlay text={overlayText} onDismiss={() => setShowOverlay(false)} />}
		</div>
	);
}

export default Scene2;
