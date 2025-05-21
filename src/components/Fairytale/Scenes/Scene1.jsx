import { motion, useScroll } from "framer-motion";
import { useState } from "react";

import bg from "../../../assets/scene1_background.svg";
import Bush from "../Bush.jsx";
import Stars from "../Stars.jsx";
import Cover from "../Cover.jsx";
import Mountains from "../Mountains.jsx";
import Moon from "../Moon.jsx";
import Bread from "../Bread.jsx";
import House from "../House.jsx";
import HanselAndGretel from "../HanselAndGretel.jsx";

function Scene1({ scrollRef }) {
	const { scrollY } = useScroll({ target: scrollRef, layoutEffect: false });

	const [showFlash, setShowFlash] = useState(false);
	const [hideScene1, setHideScene1] = useState(false);

	const handleTransition = () => {
	setShowFlash(true);

	setTimeout(() => {
		setHideScene1(true);
	}, 500);

	setTimeout(() => {
		setShowFlash(false);
	}, 1000);
};

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
				</div>
			)}
			{showFlash && <div className="flash-effect" />}
		</>
	);
}

export default Scene1;
