import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import door from "../../assets/scene2_door_house.svg";
import witch from "../../assets/scene2_witch.svg";

import doorOpeningSound from "../../assets/scene2_door.mp3";
import grabAudio from "../../assets/scene2_grab.mp3";
import doorCloseAudio from "../../assets/scene2_door_close.mp3";
import cellAudio from "../../assets/scene2_cell_lock.mp3";
import buildupAudio from "../../assets/scene2_buildup.mp3";

function Scene2_Door() {
	const [doorOpen, setDoorOpen] = useState(false);
	const [showWitch, setShowWitch] = useState(false);
	const [witchCloseUp, setWitchCloseUp] = useState(false);

	const [startDarkTransition, setStartDarkTransition] = useState(false);
	const [hideScene2, setHideScene2] = useState(false);

	const buildupStarted = useRef(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;

			if (scrollY >= 800 && !doorOpen) {
				setDoorOpen(true);
				new Audio(doorOpeningSound).play();
			}

			if (scrollY >= 1000 && !showWitch) {
				setShowWitch(true);
			}

			if (scrollY >= 1300 && !witchCloseUp) {
				setWitchCloseUp(true);
			}

			if (scrollY >= 1700 && !buildupStarted.current) {
				buildupStarted.current = true;

				const buildup = new Audio(buildupAudio);
				buildup.play();

				setTimeout(() => {
					setStartDarkTransition(true);
				}, 6500);

				setTimeout(() => {
					const grab = new Audio(grabAudio);
					const door = new Audio(doorCloseAudio);
					const cell = new Audio(cellAudio);

					grab.play();
					setTimeout(() => door.play(), 5000);
					setTimeout(() => cell.play(), 6500);
					setTimeout(() => setHideScene2(true), 4000);
				}, 7500);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [doorOpen, showWitch, witchCloseUp, startDarkTransition]);

	return (
		<>
			{!hideScene2 && (
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
							initial={{ x: 0, opacity: 0, scale: 1 }}
							animate={{
								x: 100,
								opacity: 1,
								scale: witchCloseUp ? 1.8 : 1,
								y: witchCloseUp ? -100 : 0,
							}}
							transition={{ duration: 2 }}
						/>
					)}
				</>
			)}

			{startDarkTransition && (
				<motion.div
					className="dark-transition"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3 }}
				/>
			)}
		</>
	);
}

export default Scene2_Door;
