import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import coins from "../../assets/scene3_gold.svg";

import coinCollectSound from "../../assets/scene3_coins_collect.mp3";
import coinSound from "../../assets/scene3_coins_sound.mp3";

function Scene3_GoldCoins({ onTransitionEnd }) {
	const [coinsVisible, setCoinsVisible] = useState(false);
	const [coinSoundHasPlayed, setCoinSoundHasPlayed] = useState(false);
	const [startFade, setStartFade] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			if (scrollY >= 1500 && !coinSoundHasPlayed) {
				new Audio(coinSound).play();
				setCoinsVisible(true);
				setCoinSoundHasPlayed(true);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [coinSoundHasPlayed]);

	const handleClick = () => {
		new Audio(coinCollectSound).play();
		setCoinsVisible(false);
		setStartFade(true);

		setTimeout(() => {
			onTransitionEnd();
			setStartFade(false);
		}, 2000);
	};

	return (
		<>
			<motion.img
				src={coins}
				alt="coins"
				className="coins_scene3"
				initial={{ opacity: 0 }}
				animate={coinsVisible ? { opacity: 1 } : { opacity: 0 }}
				transition={{ duration: 1 }}
				onClick={handleClick}
			/>

			{startFade && (
				<motion.div
					className="dark-transition"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1 }}
					style={{
						position: "fixed",
						inset: 0,
						backgroundColor: "black",
						zIndex: 9999,
						pointerEvents: "none",
					}}
				/>
			)}
		</>
	);
}

export default Scene3_GoldCoins;
