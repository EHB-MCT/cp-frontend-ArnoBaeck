import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navigation({ searchTerm, setSearchTerm }) {
    return (
        <nav>
            <div className="logoContainer">
                <li>
                    <Link to="/">
                        <img src="./../public/logo.svg" alt="Logo" />
                    </Link>
                </li>
            </div>
            <div className="navigationContainer">
                <div className="navigation">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                    </ul>
                </div>
                <div className="searchBar">
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
