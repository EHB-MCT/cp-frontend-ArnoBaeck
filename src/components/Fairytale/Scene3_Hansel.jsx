import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import hansel from "../../assets/scene3_hansel.svg";

function Scene3_Hansel() {
	const [moveHansle, setMoveHansle] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			if (scrollY >= 1000) {
				setMoveHansle(true);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [moveHansle]);

	return (
		<motion.img
			src={hansel}
			alt="hansel"
			className="hansel_scene3"
			initial={{ x: 0, y: 0 }}
			animate={moveHansle ? { x: 150, y: 900 } : { x: 0, y: 0 }}
			transition={{ duration: 1 }}
		/>
	);
}

export default Scene3_Hansel;
