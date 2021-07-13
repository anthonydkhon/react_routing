import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/films">
                        Films
                    </Link>
                    <Link to="/people">
                        People
                    </Link>
                    <Link to="/locations">
                        Locations
                    </Link>
                    <Link to="/species">
                        Species
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;