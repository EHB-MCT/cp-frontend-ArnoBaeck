import { useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";

import Trees from "./Trees";
import magicalStartSound from "../../assets/start.mp3";

function Cover() {
	const [hasStarted, setHasStarted] = useState(false);
	const startAudioRef = useRef(new Audio(magicalStartSound));
	const { scrollY } = useScroll();

	return (
		<>
			{!hasStarted && (
				<motion.div
					className="cover"
					initial={{ opacity: 1 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1 }}
					onClick={() => {
						setHasStarted(true);
						const sound = startAudioRef.current;
						sound.currentTime = 0;
						sound.play();
						sound.volume = 0.2;
					}}
				>
					<div className="text-cover">
						<h1>Hansel and Gretel</h1>
						<p>Turn on your audio and scroll through the story. Follow the instructions as you go.</p><br />
						<p>Click anywhere to begin the fairytale.</p>
					</div>
				</motion.div>
			)}

			<Trees hasStarted={hasStarted} scrollY={scrollY} />
		</>
	);
}

export default Cover;
