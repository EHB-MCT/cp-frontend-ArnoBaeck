import { useState } from "react";

function TextOverlay({ text, onDismiss }) {
	return (
		<div className="text-overlay" onClick={onDismiss}>
			<div className="text-content">
				<p className="main-text">{text}</p>
				<p className="click-hint">Click to continue</p>
			</div>
		</div>
	);
}

export default TextOverlay;