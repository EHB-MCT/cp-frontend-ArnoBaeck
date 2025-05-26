import { Outlet } from "react-router-dom";
import { useState } from "react";

import Navigation from "../components/Navigation";
import Footer from "../components/footer";

function Layout() {
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<>
			<div className="wrapper">
				<Navigation searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

				{/* Outlet context sends data to child routes, which can be accessed using the useOutletContext hook. */}
				<Outlet context={{ searchTerm }} />
			</div>
			<Footer />
		</>
	);
}

export default Layout;
