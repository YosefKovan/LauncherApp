import "./Navbar.css"
import { Link } from "react-router";

function Navbar(){

    return(
        <nav className="navbar">
            <h1>Launch App</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create">Create Report</Link></li>
            </ul>
        </nav>
    )

}

export default Navbar;