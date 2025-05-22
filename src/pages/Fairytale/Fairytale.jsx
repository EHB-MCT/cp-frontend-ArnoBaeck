import { useRef, useState } from "react";
import Scene1 from "../../components/Fairytale/Scenes/Scene1";
import Scene2 from "../../components/Fairytale/Scenes/Scene2";
import Scene3 from "../../components/Fairytale/Scenes/Scene3";

function Fairytale() {
	const scrollRef = useRef(null);
	const [showScene2, setShowScene2] = useState(false);
	const [showScene3, setShowScene3] = useState(false);

	return (
		<>
			<div className="scroll-wrapper" ref={scrollRef}>
				<Scene1 scrollRef={scrollRef} onTransitionEnd={() => setShowScene2(true)} />
				{showScene2 && <Scene2 onTransitionEnd={() => setShowScene3(true)} />}
				{showScene3 && <Scene3 />}
			</div>
			<div style={{ height: "2000vh" }} />
		</>
	);
}

export default Fairytale;
