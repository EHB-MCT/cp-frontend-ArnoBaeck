import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import smoke from "../../assets/scene2_smoke.svg";
import scene2Sountreack from "../../assets/scene2_soundtrack.mp3";

function Scene2_Smoke() {
	const audioRef = useRef(new Audio(scene2Sountreack));
	const [hideSmoke, setHideSmoke] = useState(false);
	const [startSmokeFade, setStartSmokeFade] = useState(false);

	useEffect(() => {
		const audio = audioRef.current;
		audio.volume = 1;

		audio.loop = true;
		audio.play();
	}, []);

	const handleClick = () => {
		const audio = audioRef.current;
		let volume = 1;

		setStartSmokeFade(true);

		const fadeOut = setInterval(() => {
			volume -= 0.05;
			if (volume <= 0) {
				audio.pause();
				clearInterval(fadeOut);
				setHideSmoke(true);
			} else {
				audio.volume = volume;
			}
		}, 150);
	};

	return (
		<div onClick={handleClick}>
			{!hideSmoke && (
				<motion.img
					src={smoke}
					alt="smoke"
					className="smoke_scene2"
					initial={{ opacity: 1 }}
					animate={startSmokeFade ? { opacity: 0 } : { opacity: 1 }}
					transition={{ duration: 3 }}
				/>
			)}
		</div>
	);
}

export default Scene2_Smoke;