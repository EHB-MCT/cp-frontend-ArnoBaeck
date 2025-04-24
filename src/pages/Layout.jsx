import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import { useState } from "react";

function Layout() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <Navigation searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

            <Outlet context={{searchTerm}}/>
            <Footer />
        </>
    )
}

export default Layout