import { motion, useScroll, useTransform } from "framer-motion";

import bg from "../../../assets/scene1_background.svg";
import Bush from "../Bush.jsx";
import Stars from "../Stars.jsx";
import Cover from "../Cover.jsx";
import Mountains from "../Mountains.jsx";
import Moon from "../Moon.jsx";
import Bread from "../Bread.jsx";
import House from "../House.jsx";
import HanselAndGretel from "../HanselAndGretel.jsx";

function Scene1({ scrollRef }) {
	const { scrollY } = useScroll({ target: scrollRef, layoutEffect: false });

	return (
		<div className="scene" ref={scrollRef}>
			<img src={bg} alt="background" className="layer" />
			<Stars />
			<Mountains scrollY={scrollY} />
			<Moon scrollY={scrollY}/>
			<Bread scrollY={scrollY} />
			<HanselAndGretel scrollY={scrollY} />
			<House scrollY={scrollY} />
			<Cover />
			<Bush scrollY={scrollY}/>
		</div>
	);
}

export default Scene1;
