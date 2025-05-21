import { motion, useScroll, useTransform } from "framer-motion";

import bg from "../../../assets/scene1_background.svg";
import hansel_gretel from "../../../assets/scene1_hansel_and_gretel.svg";
import house from "../../../assets/scene1_house.svg";
import Bush from "../Bush.jsx";
import Stars from "../Stars.jsx";
import Cover from "../Cover.jsx";
import Mountains from "../Mountains.jsx";
import Moon from "../Moon.jsx";
import Bread from "../Bread.jsx";

function Scene1({ scrollRef }) {
	const { scrollY } = useScroll({ target: scrollRef, layoutEffect: false });
	const houseY = useTransform(scrollY, [900, 1500], [0, -280]);
	const hanselAndGretleY = useTransform(scrollY, [900, 1500], [0, -280]);

	return (
		<div className="scene" ref={scrollRef}>
			<img src={bg} alt="background" className="layer" />
			<Stars />
			<Mountains scrollY={scrollY} />
			<Moon />
			<Bread scrollY={scrollY} />
			<motion.img src={hansel_gretel} alt="Hansel and Gretel" className="hansel_gretel" style={{ y: hanselAndGretleY }} />
			<motion.img src={house} alt="house" className="house" style={{ y: houseY }} />
			<Cover />
			<Bush scrollY={scrollY}/>
		</div>
	);
}

export default Scene1;
