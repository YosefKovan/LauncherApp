import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); 

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
          localStorage.removeItem("token");
          navigate("/")
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
