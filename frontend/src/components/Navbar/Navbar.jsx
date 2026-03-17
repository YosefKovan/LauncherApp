import "./Navbar.css"
import { Link } from "react-router";

function Navbar(){
    
     
    return(
        <nav className="navbar">
            <h1>Launch App</h1>
            <ul>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/launchers">Launchers</Link></li>
                <li><Link to="/register-user">Create User</Link></li>
                <li><Link to="/create-launcher">Create Launcher</Link></li>
                <li><Link to="/">Login</Link></li>
            </ul>
        </nav>
    )

}

export default Navbar;