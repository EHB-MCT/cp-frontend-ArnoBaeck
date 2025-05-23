import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import coins from "../../assets/scene3_gold.svg";

import coinCollectSound from "../../assets/scene3_coins_collect.mp3";
import coinSound from "../../assets/scene3_coins_sound.mp3";

function Scene3_GoldCoins() {
	const [coinsVisible, setCoinsVisible] = useState(false);
	const [coinSoundHasPlayed, setCoinSoundHasPlayed] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			if (scrollY >= 1500 && !coinSoundHasPlayed) {
				const enterSound = new Audio(coinSound);
				enterSound.play();
				setCoinsVisible(true);
				setCoinSoundHasPlayed(true);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [coinsVisible]);

	return (
		<motion.img
			src={coins}
			alt="coins"
			className="coins_scene3"
			initial={{ opacity: 0 }}
			animate={coinsVisible ? { opacity: 1 } : { opacity: 0 }}
			transition={{ duration: 1 }}
			onClick={() => {
				const collectSound = new Audio(coinCollectSound);
				collectSound.play();
				setCoinsVisible(false);
			}}
		/>
	);
}

export default Scene3_GoldCoins;
