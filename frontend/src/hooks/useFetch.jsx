import { useState, useEffect } from "react";
import useLogout from "./useLogout";

function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);

  const {logout} = useLogout();

  useEffect(() => {
    async function fetchData() {
      
      setLoading(true);
      const token = localStorage.getItem("token");

      try {
        const response = await fetch(url, {method : "GET", headers : {Authorization : "Bearer " + token}});

        const data = await response.json();

        if (!response.ok) {
            throw {message : data.message || "Unknown error occured", statusCode : response.status}
        }
        

        if(response.status === 401){
           logout();
        }
        
        setApiData(data);

      } catch (error) {
        setError({message : error.message || "Unknown error occured", statusCode : error.statusCode || 500})
      }finally{
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return {loading, apiData, error}
}

export default useFetch;
