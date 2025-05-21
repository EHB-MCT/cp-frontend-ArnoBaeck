import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

import bg from "../../../assets/scene1_background.svg";
import stars from "../../../assets/scene1_stars.svg";
import mountainBack from "../../../assets/scene1_mountain2.svg";
import mountainFront from "../../../assets/scene1_mountain1.svg";
import bread1 from "../../../assets/scene1_bread1.svg";
import bread2 from "../../../assets/scene1_bread2.svg";
import bread3 from "../../../assets/scene1_bread3.svg";
import hansel_gretel from "../../../assets/scene1_hansel_and_gretel.svg";
import tree1 from "../../../assets/scene1_tree1.svg";
import tree2 from "../../../assets/scene1_tree2.svg";
import tree3 from "../../../assets/scene1_tree3.svg";
import tree4 from "../../../assets/scene1_tree4.svg";
import tree5 from "../../../assets/scene1_tree5.svg";
import tree6 from "../../../assets/scene1_tree6.svg";
import tree7 from "../../../assets/scene1_tree7.svg";
import moon from "../../../assets/scene1_moon.svg";
import house from "../../../assets/scene1_house.svg";
import bush from "../../../assets/scene1_bush.svg";
import bushDragSound from "../../../assets/scene1_bushes.mp3";

function Scene1() {
	const bushZoneRef = useRef(null);
	const bushAudioRef = useRef(new Audio(bushDragSound));

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

	return (
		<div className="scene">
			<img src={bg} alt="background" className="layer" />
			<motion.img src={stars} alt="stars" className="stars" style={{ x: starsX, y: starsY }} />
			<img src={mountainBack} alt="mountain back" className="mountain_back" />
			<img src={mountainFront} alt="mountain front" className="mountain_front" />
			<img src={bread1} alt="bread1" className="bread bread1" />
			<img src={bread2} alt="bread2" className="bread bread2" />
			<img src={bread3} alt="bread3" className="bread bread3" />
			<img src={hansel_gretel} alt="Hansel and Gretel" className="hansel_gretel" />
			<img src={tree1} alt="tree1" className="tree tree1" />
			<img src={tree2} alt="tree2" className="tree tree2" />
			<img src={tree3} alt="tree3" className="tree tree3" />
			<img src={tree4} alt="tree4" className="tree tree4" />
			<img src={tree5} alt="tree5" className="tree tree5" />
			<img src={tree6} alt="tree6" className="tree tree6" />
			<img src={tree7} alt="tree7" className="tree tree7" />
			<img src={moon} alt="moon" className="moon" />
			<img src={house} alt="house" className="house" />
			<div ref={bushZoneRef} className="drag-zone bush-zone">
				<motion.img
					src={bush}
					alt="bush"
					className="bush"
					drag
					onDragStart={() => {
						const sound = bushAudioRef.current;
						sound.currentTime = 0;
						sound.play();
					}}
				/>
			</div>
		</div>
	);
}

export default Scene1;
