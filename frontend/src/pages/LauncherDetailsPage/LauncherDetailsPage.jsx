import { useParams, Link, useNavigate } from "react-router";
import useFetch from "../../hooks/useFetch";
import Message from "../../components/Message/Message";
import Table from "../../components/LauncherTable/LauncherTable";
import "./LauncherDetailsPage.css"
import useSend from "../../hooks/useSend";
import { useEffect } from "react";
import Loader from "../../components/Loader/Loader"


const BASE_URL = "http://localhost:3000/api/launchers"

function LauncherDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {apiData, error, loading, sendData} = useSend()

  useEffect(()=>{
    sendData(BASE_URL + `/${id}`, {method : "GET"});
  }, [])
  

  async function handleDelete(){

    const [data, error] = await sendData(BASE_URL + `/${id}`, {method : "DELETE"});
    
    if(error){
      return;
    }

    return navigate("/")
  }

  if(loading){
    return <Loader/>
  }
   
  return (
    <main className="launch-details-page">
      <Link to="/">Back</Link>
      {error && <Message messageType="error" content={error.message}/>} 
      {!loading && !error && apiData && (
        <div className="main-section">
          <Table launcher={apiData.launcher}/>
          <button className="delete-btn" onClick={handleDelete}>Delete</button> 
        </div>
      )}
    </main>
  );
};

export default LauncherDetailsPage;
