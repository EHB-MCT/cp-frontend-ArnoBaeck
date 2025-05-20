import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navigation({ searchTerm, setSearchTerm }) {
	const location = useLocation();

	return (
		<nav>
			<div className="navigationFlexContainer">
				<div className="logoContainer">
					<li>
						<Link to="/cp-frontend-ArnoBaeck/">
							<img src="./logo.svg" alt="Logo" />
						</Link>
					</li>
				</div>
				<div className="navigationContainer">
					<div className="navigation">
						<ul>
							<li>
								<Link to="/" className={location.pathname === "/" ? "active" : ""}>
									Home
								</Link>
							</li>
							<li>
								<Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>
									Projects
								</Link>
							</li>
							<li>
								<Link to="/fairytale" className={location.pathname === "/fairytale" ? "active" : ""}>
									Fairytale
								</Link>
							</li>
						</ul>
					</div>
					<div className="searchBar">
						<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
					</div>
				</div>
			</div>
			<div className="divideLine"></div>
		</nav>
	);
}

export default Navigation;
