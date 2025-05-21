import { motion, useTransform } from "framer-motion";

import tree1 from "../../assets/scene1_tree1.svg";
import tree2 from "../../assets/scene1_tree2.svg";
import tree3 from "../../assets/scene1_tree3.svg";
import tree4 from "../../assets/scene1_tree4.svg";
import tree5 from "../../assets/scene1_tree5.svg";
import tree6 from "../../assets/scene1_tree6.svg";
import tree7 from "../../assets/scene1_tree7.svg";

// { hasStarted } is the same as using props.hasStarted.
// It's called destructuring and makes the code shorter and cleaner.
function Trees({hasStarted, scrollY}) {
	const treeBackY = useTransform(scrollY, [900, 1500], [0, -180]);
	const treeFrontY = useTransform(scrollY, [900, 1500], [0, -190]);
	return (
		<div>
			<motion.img
				src={tree1}
				alt="tree1"
				className="tree tree1"
				initial={{ x: 1500, opacity: 0 }}
				animate={hasStarted ? { x: 0, opacity: 1 } : {}}
				style={{ y: treeFrontY }}
				transition={{ duration: 0.8, delay: 0.1 }}
			/>
			<motion.img
				src={tree2}
				alt="tree2"
				className="tree tree2"
				initial={{ x: 1500, opacity: 0 }}
				animate={hasStarted ? { x: 0, opacity: 1 } : {}}
				style={{ y: treeFrontY }}
				transition={{ duration: 0.4, delay: 0.1 }}
			/>
			<motion.img
				src={tree3}
				alt="tree3"
				className="tree tree3"
				initial={{ x: -1500, opacity: 0 }}
				animate={hasStarted ? { x: 0, opacity: 1 } : {}}
				style={{ y: treeFrontY }}
				transition={{ duration: 1.2, delay: 0.1 }}
			/>
			<motion.img
				src={tree4}
				alt="tree4"
				className="tree tree4"
				initial={{ x: -1500, opacity: 0 }}
				animate={hasStarted ? { x: 0, opacity: 1 } : {}}
				style={{ y: treeFrontY }}
				transition={{ duration: 0.8, delay: 0.1 }}
			/>
			<motion.img
				src={tree5}
				alt="tree5"
				className="tree tree5"
				initial={{ x: 1500, opacity: 0 }}
				animate={hasStarted ? { x: 0, opacity: 1 } : {}}
				style={{ y: treeBackY }}
				transition={{ duration: 1, delay: 0.1 }}
			/>
			<motion.img
				src={tree6}
				alt="tree6"
				className="tree tree6"
				initial={{ x: 1500, opacity: 0 }}
				animate={hasStarted ? { x: 0, opacity: 1 } : {}}
				style={{ y: treeBackY }}
				transition={{ duration: 0.5, delay: 0.1 }}
			/>
			<motion.img
				src={tree7}
				alt="tree7"
				className="tree tree7"
				initial={{ x: -1500, opacity: 0 }}
				animate={hasStarted ? { x: 0, opacity: 1 } : {}}
				style={{ y: treeBackY }}
				transition={{ duration: 0.8, delay: 0.1 }}
			/>
		</div>
	);
}

export default Trees;
