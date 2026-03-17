import useUser from "../store/useUser";
import { useNavigate, Navigate } from "react-router";

function useLogout() {
  const navigate = useNavigate();
  const removeRole = useUser((state) => state.setRole);
  
  function logout(){
     
    localStorage.removeItem("token");
     removeRole(null);
     return navigate("/");
  }

  return {logout};
}

export default useLogout;
