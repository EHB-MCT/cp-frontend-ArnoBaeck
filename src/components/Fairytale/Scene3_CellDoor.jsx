import { useEffect } from "react";
import { motion } from "framer-motion";

import door from "../../assets/scene3_cell_door.svg";
import doorOpenSound from "../../assets/scene2_cell_lock.mp3";

function Scene3_CellDoor({ isOpen }) {
	useEffect(() => {
		if (isOpen) {
			const sound = new Audio(doorOpenSound);
			sound.play().catch((e) => console.warn("Audio blocked", e));
		}
	}, [isOpen]);

	return (
		<motion.img
			src={door}
			alt="cell door"
			className="cell_door_scene3"
			initial={{ rotateY: 0, x: 0 }}
			animate={isOpen ? { rotateY: 75, x: -270 } : { rotateY: 0, x: 0 }}
			transition={{ duration: 1 }}
		/>
	);
}

export default Scene3_CellDoor;