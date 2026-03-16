import { useState } from "react";
import AppError from "../../error/app.error";

function useSend() {
  
   const [apiData, setApiData] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);

   async function sendData(url, sendData) {
    
    setLoading(true);
    setApiData(null);
    setError(null);

    try {
      const response = await fetch(url, sendData);

      const data = await response.json();
       
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
