import { useState } from "react";
import useLogout from "./useLogout";
import { useNavigate } from "react-router";


function useSend() {
   
   const navigate = useNavigate();

   const [apiData, setApiData] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);

    const {logout} = useLogout();

   async function sendData(url, sendData) {
    
    setLoading(true);
    setApiData(null);
    setError(null);

    try {
      const response = await fetch(url, sendData);

      const data = await response.json();
       
      //this means the token is not vaild
      if(response.status === 401){
        logout();
      }
       

      if (!response.ok) {
          throw {message : data.message || "Unknown error occured", statusCode : response.status}
      }
       
      setApiData(data);
      return [data, null];

    } catch (err) {
        console.log(err)
        setError({message : err.message || "Unknown error occured", statusCode : err.statusCode || 500});
        return [null, {message : err.message || "Unknown error occured", statusCode : err.statusCode || 500}];
    }finally{
        setLoading(false);
    }
  }

  return { sendData, apiData, error, loading};
}

export default useSend;
