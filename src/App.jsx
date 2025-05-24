import "./App.css";

import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import MakingOf from "./pages/MakingOf";
import Projects from "./pages/Projects";
import Layout from "./pages/Layout";
import FairytaleLayout from "./pages/Fairytale/FairytaleLayout";
import Fairytale from "./pages/Fairytale/Fairytale";
import { useEffect } from "react";

function BackgroundController() {
	const location = useLocation();

	useEffect(() => {
		if (location.pathname.includes("/fairytale")) {
			document.body.style.backgroundImage = "none"
		} else {
			document.body.style.backgroundImage = "url('./background_image.png')";
		}
	}, [location])
}

function App() {
	return (
		// HashRouter adds a "#" in the URL so routing works on static sites like GitHub Pages.
		// It makes sure page reloads do not break the app.
		<HashRouter>
			<BackgroundController />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="projects" element={<Projects />} />
					<Route path="making-of/:id" element={<MakingOf />} />

					{/* 404-pagina */}
					<Route path="*" element={<h1>404 Not Found</h1>} />
				</Route>

				<Route path="/fairytale" element={<FairytaleLayout />}>
					<Route index element={<Fairytale />} />
				</Route>
			</Routes>
		</HashRouter>
	);
}

export default App;
