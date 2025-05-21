import { motion, useTransform } from "framer-motion";

import bread1 from "../../assets/scene1_bread1.svg";
import bread2 from "../../assets/scene1_bread2.svg";
import bread3 from "../../assets/scene1_bread3.svg";

function Bread({ scrollY }) {
	const breadY = useTransform(scrollY, [900, 1500], [0, -75]);
    const breadOpacity1 = useTransform(scrollY, [2000, 2300, 2800, 3100], [0, 1, 1, 0]);
    const breadOpacity2 = useTransform(scrollY, [1800, 2100, 2600, 2900], [0, 1, 1, 0]);
    const breadOpacity3 = useTransform(scrollY, [1600, 1900, 2400, 2700], [0, 1, 1, 0]);

	return (
		<>
        {/* Using inline styling becayse bread crubles where not working when styled in CSS */}
			<motion.img
				src={bread1}
				alt="bread1"
				style={{
					y: breadY,
                    opacity: breadOpacity1,
					position: "absolute",
					top: "35vh",
					right: "5vw",
					scale: 0.02,
					zIndex: 3,
				}}
			/>
			<motion.img
				src={bread2}
				alt="bread2"
				style={{
					y: breadY,
                    opacity: breadOpacity2,
					position: "absolute",
					top: "45vh",
					right: "3vw",
					scale: 0.02,
					zIndex: 3,
				}}
			/>
			<motion.img
				src={bread3}
				alt="bread3"
				style={{
					y: breadY,
                    opacity: breadOpacity3,
					position: "absolute",
					top: "50vh",
					right: "8vw",
					scale: 0.02,
					zIndex: 3,
				}}
			/>
		</>
	);
}

export default Bread;
