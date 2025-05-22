import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import door from "../../assets/scene2_door_house.svg";
import witch from "../../assets/scene2_witch.svg";
import doorOpeningSound from "../../assets/scene2_door.mp3";

function Scene2_Door() {
	const [doorOpen, setDoorOpen] = useState(false);
	const [showWitch, setShowWitch] = useState(false);
	const [hasEntered, setHasEntered] = useState(false);

	const sound = new Audio(doorOpeningSound);

	// Using delay because door animation starts when the user enters the page
	useEffect(() => {
		const delay = setTimeout(() => {
			setHasEntered(true);
		}, 300);

		return () => clearTimeout(delay);
	}, []);

	useEffect(() => {
		if (!hasEntered) return;

		const handleScroll = () => {
			const scrollY = window.scrollY;

			if (scrollY >= 800 && !doorOpen) {
				setDoorOpen(true);
				sound.play();
			}

			if (scrollY >= 1000 && !showWitch) {
				setShowWitch(true);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [hasEntered, doorOpen, showWitch]);

	return (
		<>
			<motion.img
				src={door}
				alt="door"
				className="door_scene2"
				initial={{ rotateY: 0 }}
				animate={doorOpen ? { rotateY: 75, x: -200 } : { rotateY: 0, x: 0 }}
				transition={{ duration: 1 }}
			/>

			{showWitch && (
				<motion.img
					src={witch}
					alt="witch"
					className="witch_scene2"
					initial={{ x: 0, opacity: 0 }}
					animate={{ x: 100, opacity: 1 }}
					transition={{ duration: 2 }}
				/>
			)}
		</>
	);
}

export default Scene2_Door;
