import { useRef } from "react";
import Scene1 from "../../components/Fairytale/Scenes/Scene1";
import Scene2 from "../../components/Fairytale/Scenes/Scene2";

function Fairytale() {
	const scrollRef = useRef(null);

	return (
		<>
			<div className="scroll-wrapper" ref={scrollRef}>
				<Scene1 scrollRef={scrollRef} />
			</div>
			<Scene2 />
			<div style={{ height: '2000vh' }} />
		</>
	);
}

export default Fairytale;