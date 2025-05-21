import { motion, useTransform } from "framer-motion";

import house from "../../assets/scene1_house.svg";

function House({ scrollY }) {
	const houseY = useTransform(scrollY, [900, 1500], [0, -280]);

	return <motion.img src={house} alt="house" className="house" style={{ y: houseY }} />;
}

export default House;
