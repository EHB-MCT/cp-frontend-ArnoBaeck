import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useState } from "react";

function Layout() {
    const [searchTerm, setSearchTerm] = useState("");
    
    return (
        <>
            <Navigation searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

            <Outlet context={{searchTerm}}/>
        </>
    )
}

export default Layout