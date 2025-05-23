import { useState } from "react";
import { motion } from "framer-motion";

import CaneScene3 from "./Scene3_Cane";
import Scene3_Key from "./Scene3_Key";

import witch from "../../assets/scene3_witch.svg";
import witchFallSound from "../../assets/scene3_witch_fall.mp3";

function Scene3_Witch() {
	const [witchFell, setWitchFell] = useState(false);

	const handleWitchFall = () => {
		setWitchFell(true);
		const fallSound = new Audio(witchFallSound);
		fallSound.play();
	};

	return (
		<>
			{!witchFell && <img src={witch} alt="witch" className="witch_scene3" />}

			{witchFell && (
				<motion.img
					src={witch}
					alt="witch falling"
					className="witch_scene3"
					initial={{ y: 0, rotate: 0 }}
					animate={{ y: 300, rotate: 90 }}
					transition={{ duration: 2 }}
				/>
			)}

			<div className="drag-zone">
				<CaneScene3 onDragStart={handleWitchFall} />
				<Scene3_Key keyFall={witchFell} />
			</div>
		</>
	);
}

export default Scene3_Witch;
