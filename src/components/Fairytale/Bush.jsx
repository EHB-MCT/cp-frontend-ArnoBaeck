import { motion, useTransform } from "framer-motion";
import bush from "../../assets/scene1_bush.svg";
import bushDragSound from "../../assets/scene1_bushes.mp3";
import { useRef } from "react";

function Bush({ scrollY }) {
	const bushZoneRef = useRef(null);
	const bushAudioRef = useRef(new Audio(bushDragSound));
	const bushY = useTransform(scrollY, [900, 1500], [0, -280]);

	return (
		<div ref={bushZoneRef} className="drag-zone bush-zone">
			<motion.img
				src={bush}
				alt="bush"
				className="bush"
				drag
				style={{ y: bushY }}
				onDragStart={() => {
					const sound = bushAudioRef.current;
					sound.currentTime = 0;
					sound.play();
				}}
			/>
		</div>
	);
}

export default Bush;