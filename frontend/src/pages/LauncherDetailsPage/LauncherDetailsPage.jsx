import { useParams, Link, useNavigate } from "react-router";
import useFetch from "../../hooks/useFetch";
import Message from "../../components/Message/Message";
import Table from "../../components/LauncherTable/LauncherTable";
import "./LauncherDetailsPage.css"
import useSend from "../../hooks/useSend";
import { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import useUser from "../../store/useUser";


const BASE_URL = "http://localhost:3000/api/launchers"

function LauncherDetailsPage() {
  const { id } = useParams();
  const role = useUser((state)=>state.role)
  const navigate = useNavigate();
  const {apiData, error, loading, sendData} = useSend()

  useEffect(()=>{
    const token = localStorage.getItem("token");
    sendData(BASE_URL + `/${id}`, {method : "GET", headers : {Authorization : "Bearer " + token}});
  }, [])
  

  async function handleDelete(){
    const token = localStorage.getItem("token");
    const [data, error] = await sendData(BASE_URL + `/${id}`, {method : "DELETE", headers : {Authorization : "Bearer " + token}});
    
    if(error){
      return;
    }

    return navigate("/launchers")
  }

  if(loading){
    return <Loader/>
  }
   
  return (
    <main className="launch-details-page">
      <Link to="/launchers">Back</Link>
      {error && <Message messageType="error" content={error.message}/>} 
      {!loading && !error && apiData && (
        <div className="main-section">
          <Table launcher={apiData.launcher}/>
          {(role === "ADMIN" || role === "INTELLIGENCE") && <button className="delete-btn" onClick={handleDelete}>Delete</button>} 
        </div>
      )}
    </main>
  );
};

export default LauncherDetailsPage;
