import { Link } from 'react-router-dom'

function Navigation () {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/making-of">Making-of</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation