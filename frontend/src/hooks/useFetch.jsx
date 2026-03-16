import { useState } from "react";

function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      
      try {
        const response = await fetch(url);

        const data = response.json();

        if (!response.ok) {
            throw {message : data.message || "Unknown error occured", statusCode : response.statusCode}
        }
        
        setApiData(data);

      } catch (error) {
        setError({message : error.message || "Unknown error occured", statusCode : error.statusCode || 500})
      }
    }

    fetchData();
  }, [url]);

  return {loading, apiData, error}
}

export default useFetch;
