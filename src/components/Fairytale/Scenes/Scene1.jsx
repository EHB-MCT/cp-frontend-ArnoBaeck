import { motion, useScroll } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import bg from "../../../assets/scene1_background.svg";
import Bush from "../Bush.jsx";
import Stars from "../Stars.jsx";
import Cover from "../Cover.jsx";
import Mountains from "../Mountains.jsx";
import Moon from "../Moon.jsx";
import Bread from "../Bread.jsx";
import House from "../House.jsx";
import HanselAndGretel from "../HanselAndGretel.jsx";

import TextOverlay from "../TextOverlay.jsx";

function Scene1({ scrollRef, onTransitionEnd }) {
	const [showOverlay, setShowOverlay] = useState(false);
	const [overlayText, setOverlayText] = useState("");
	const shownOverlays = useRef(new Set());

	const { scrollY } = useScroll({ target: scrollRef, layoutEffect: false });

	const [showFlash, setShowFlash] = useState(false);
	const [hideScene1, setHideScene1] = useState(false);

	const handleTransition = () => {
		setShowFlash(true);

		setTimeout(() => {
			setHideScene1(true);
			onTransitionEnd();
		}, 500);

		setTimeout(() => {
			setShowFlash(false);
		}, 1000);
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
			if (scrollY >= 100 && !shownOverlays.current.has("lost_in_forest")) {
				shownOverlays.current.add("lost_in_forest");
				setOverlayText("Hansel and Gretel are left alone in the forest by their parents…");
				setShowOverlay(true);
			}

			if (scrollY >= 600 && !shownOverlays.current.has("left_breadcrumbs")) {
				shownOverlays.current.add("left_breadcrumbs");
				setOverlayText("They leave a trail of breadcrumbs to find their way back home...");
				setShowOverlay(true);
			}

			if (scrollY >= 2300 && !shownOverlays.current.has("bredcrumbs_eaten")) {
				shownOverlays.current.add("bredcrumbs_eaten");
				setOverlayText("But the breadcrumbs are eaten by birds!");
				setShowOverlay(true);
			}

			if (scrollY >= 3400 && !shownOverlays.current.has("house_spotted")) {
				shownOverlays.current.add("house_spotted");
				setOverlayText("They seem to see a house in the distance... Move the bushes to find it!");
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
		<>
			{!hideScene1 && (
				<div className="scene">
					<img src={bg} alt="background" className="layer" />
					<Stars />
					<Mountains scrollY={scrollY} />
					<Moon scrollY={scrollY} />
					<Bread scrollY={scrollY} />
					<HanselAndGretel scrollY={scrollY} />
					<House scrollY={scrollY} />
					<Cover />
					<Bush scrollY={scrollY} onTriggerTransition={handleTransition} />

					{showOverlay && <TextOverlay text={overlayText} onDismiss={() => setShowOverlay(false)} />}
				</div>
			)}
			{showFlash && <div className="flash-effect" />}
		</>
	);
}

export default Scene1;
