import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet } from 'react-router';

function ProtectedRoute({roles}){

    const token = localStorage.getItem("token");

    console.log(jwtDecode(token));
    
    
    if(!token || !roles.includes(jwtDecode(token).role)){
        return <Navigate to="/"/>
    }

    return(
        <Outlet/>
    )
}

export default ProtectedRoute;