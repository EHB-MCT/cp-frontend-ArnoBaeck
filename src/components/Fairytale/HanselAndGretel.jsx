import { motion, useTransform } from "framer-motion";

import hansel_gretel from "../../assets/scene1_hansel_and_gretel.svg";

function HanselAndGretel({ scrollY }) {
	const hanselAndGretleY = useTransform(scrollY, [900, 1500], [0, -280]);

	return (
		<motion.img src={hansel_gretel} alt="Hansel and Gretel" className="hansel_gretel" style={{ y: hanselAndGretleY }} />
	);
}

export default HanselAndGretel;
