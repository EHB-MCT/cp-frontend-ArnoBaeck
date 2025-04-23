import SearchFilter from "./SearchFilter";

function Header() {

    return (
        <header>
            <div className="nav-container">
                <div className="logo">
                    <img src="../public/logo.svg" alt="Logo — ER WAS EENS..." />
                </div>
                <div className="navigation">
                    <nav>
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">PROJECTS</a></li>
                            <li><a href="#">MAKING-OF</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="searchFilter">
                <SearchFilter />
            </div>
        </header>
    )
}

export default Header;