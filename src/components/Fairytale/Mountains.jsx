import { motion, useTransform } from "framer-motion";

import mountainBack from "../../assets/scene1_mountain2.svg";
import mountainFront from "../../assets/scene1_mountain1.svg";

function Mountains({ scrollY }) {
	const mountainBackY = useTransform(scrollY, [900, 1500], [0, -30]);
	const mountainFrontY = useTransform(scrollY, [900, 1500], [0, -60]);

	return (
		<>
			<motion.img src={mountainBack} alt="mountain back" className="mountain_back" style={{ y: mountainBackY }} />
			<motion.img src={mountainFront} alt="mountain front" className="mountain_front" style={{ y: mountainFrontY }} />
		</>
	);
}

export default Mountains;
