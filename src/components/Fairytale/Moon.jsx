import { useTransform, motion } from "framer-motion";
import moon from "../../assets/scene1_moon.svg";

function Moon({ scrollY }) {

	const moonX = useTransform(scrollY, [200, 700], [0, 9000]);
	const moonY = useTransform(scrollY, [200, 450, 700], [0, -600, 0]);
	const moonScale = useTransform(scrollY, [0, 500], [1, 1.15]);

	return <motion.img src={moon} alt="moon" className="moon" style={{ x: moonX, y: moonY, scale: moonScale }} />;
}

export default Moon;