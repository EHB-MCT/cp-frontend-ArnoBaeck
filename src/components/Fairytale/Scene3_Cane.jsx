import { motion } from "framer-motion";

import cane from "../../assets/scene3_cane.svg";

function Cane_Scene2({ onDragStart }) {
	// Cane is sitting on top of the witch's hand, because if you put it under her hand with z-index it will not be draggable
	return <motion.img src={cane} alt="cane" className="cane_scene3" drag onDragStart={onDragStart} />;
}

export default Cane_Scene2;
