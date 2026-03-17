import "./Navbar.css"
import { Link, useNavigate } from "react-router";
import useUser from "../../store/useUser";
import useLogout from "../../hooks/useLogout";

function Navbar(){
    
  
    const {logout} = useLogout();
    
    const role = useUser((state)=>state.role);

    console.log("role", role);
    

    const token = localStorage.getItem("token")
    
    return(
        <nav className="navbar">
            <h1>Launch App</h1>
            <ul>
                {role === "ADMIN" && <li><Link to="/users">Users</Link></li>}
                <li><Link to="/launchers">Launchers</Link></li>
                {role === "ADMIN" && <li><Link to="/register-user">Create User</Link></li>}
                {(role === "ADMIN" || role === "INTELLIGENCE") && <li><Link to="/create-launcher">Create Launcher</Link></li>}
                {!token && <li><Link to="/">Login</Link></li>}
                {token && <li><button onClick={logout} className="logout">Logout</button></li>}
            </ul>
        </nav>
    )

}

export default Navbar;