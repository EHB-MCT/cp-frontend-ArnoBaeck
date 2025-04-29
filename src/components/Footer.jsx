import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer>
			<div className="wrapper">
				<div className="footerContainer">
					<div className="logo">
						<Link to="/">
							<img src="./../public/logo.svg" alt="Logo" />
						</Link>
					</div>
					<div className="about">
						<h2>About us</h2>
						<p>
							Welcome to a world where fairy tales scroll with depth. Through parallax magic, we bring front-end stories to life
							— one layer at a time. ✨
						</p>
					</div>
					<div className="links">
						<h2>Links</h2>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/projects">Projects</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
