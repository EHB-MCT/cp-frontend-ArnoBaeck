import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import key from "../../assets/scene3_key.svg";
import keyDropSound from "../../assets/scene3_key_drop.mp3";

function Scene3_Key({ keyFall }) {
	const [dropped, setDropped] = useState(false);

	useEffect(() => {
		if (keyFall && !dropped) {
			const dropSound = new Audio(keyDropSound);
			dropSound.play();
			setDropped(true);
		}
	}, [keyFall, dropped]);

	return (
		<motion.img
			src={key}
			alt="key"
			className="key_scene3"
			drag
			initial={{ y: 0, x: 0, opacity: 1 }}
			animate={{ y: dropped ? 2600 : 0, x: dropped ? 2600 : 0, rotate: dropped ? 90 : 0, opacity: 1 }}
			transition={{ duration: 0.8 }}
		/>
	);
}

export default Scene3_Key;
