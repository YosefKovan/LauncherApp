import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet } from 'react-router';

function ProtectedRoute({roles}){

    const token = localStorage.getItem("token");
    
    if(!token){
        return <Navigate to="/"/>
    }

    
    if(!roles.includes(jwtDecode(token).role)){
        return <Navigate to="/"/>
    }

    return(
        <Outlet/>
    )
}

export default ProtectedRoute;