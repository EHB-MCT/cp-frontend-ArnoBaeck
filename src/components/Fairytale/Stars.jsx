import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import stars from "../../assets/scene1_stars.svg";

function Stars() {
	// useMotionValue creates a reactive value that can be updated with for example mouse movement
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	// useTransform changes the mouse position value into a smaller movement
	// so the stars move only a little when the mouse moves across the screen
	const starsX = useTransform(mouseX, [0, window.innerWidth], [-10, 10]);
	const starsY = useTransform(mouseY, [0, window.innerHeight], [-10, 10]);

	useEffect(() => {
		const handleMouseMove = (e) => {
			mouseX.set(e.clientX);
			mouseY.set(e.clientY);
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return <motion.img src={stars} alt="stars" className="stars" style={{ x: starsX, y: starsY }} />;
}

export default Stars;
