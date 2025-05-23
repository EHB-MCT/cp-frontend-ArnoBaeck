import { useState, useRef, useEffect } from "react";

import envoirement from "../../../assets/scene3_envoirement.svg";
import gretel from "../../../assets/scene3_gretel.svg";
import Witch from "../Scene3_Witch";
import Hansel from "../Scene3_Hansel";
import GoldCoins from "../Scene3_GoldCoins";

import TextOverlay from "../TextOverlay.jsx";

function Scene3({ onTransitionEnd }) {
	const [hideScene3, setHideScene3] = useState(false);

	const [showOverlay, setShowOverlay] = useState(false);
	const [overlayText, setOverlayText] = useState("");
	const shownOverlays = useRef(new Set());

	const handleEnd = () => {
		setHideScene3(true);
		onTransitionEnd();
	};

	useEffect(() => {
		if ("scrollRestoration" in window.history) {
			window.history.scrollRestoration = "manual";
		}
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			if (scrollY >= 0 && !shownOverlays.current.has("now_what")) {
				shownOverlays.current.add("now_what");
				setOverlayText("Hansel is kept in a cage and Gretel is trying to save him... But she does not know how to do it.");
				setShowOverlay(true);
			}

			if (scrollY >= 100 && !shownOverlays.current.has("helping_hand")) {
				shownOverlays.current.add("helping_hand");
				setOverlayText("Maybe she can use the helping hand to save him? (try pulling on the cane to see what happens)");
				setShowOverlay(true);
			}

			if (scrollY >= 200 && !shownOverlays.current.has("key_found")) {
				shownOverlays.current.add("key_found");
				setOverlayText("Gertel finds a key on the floor... Maybe it can be used to open the cage? (try clicking on the key to see what happens)");
				setShowOverlay(true);
			}

			if (scrollY >= 600 && !shownOverlays.current.has("free_hansel")) {
				shownOverlays.current.add("free_hansel");
				setOverlayText("Great! You freed Hansel! Find a way out of the house now.");
				setShowOverlay(true);
			}

			if (scrollY >= 1700 && !shownOverlays.current.has("get_out")) {
				shownOverlays.current.add("get_out");
				setOverlayText("Quick! Get out of the house before the witch catches you again!");
				setShowOverlay(true);
			}

			if (scrollY >= 1800 && !shownOverlays.current.has("gold_coins")) {
				shownOverlays.current.add("gold_coins");
				setOverlayText("Hansel and Gretel find a lot of gold coins in the house... They are rich now! (click to gather the coins)");
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
		<div className="scene scene3" style={{ display: hideScene3 ? "none" : "block" }}>
			<img src={envoirement} alt="envoirement" className="envoirement_scene3" />
			<img src={gretel} alt="gretel" className="gretel_scene3" />
			<Witch />
			<Hansel />
			<GoldCoins onTransitionEnd={handleEnd} />

			{showOverlay && <TextOverlay text={overlayText} onDismiss={() => setShowOverlay(false)} />}
		</div>
	);
}

export default Scene3;
