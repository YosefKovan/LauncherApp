import { useParams, Link } from "react-router";
import useFetch from "../../hooks/useFetch";
import Message from "../../components/Message/Message";
import Table from "../../components/LauncherTable/LauncherTable";
import "./LauncherDetailsPage.css"

const BASE_URL = "http://localhost:3000/api/launchers"

function LauncherDetailsPage() {
  const { id } = useParams();

  const { loading, apiData, error } = useFetch(BASE_URL + `/${id}`);

  console.log(apiData);
  

  return (
    <main className="launch-details-page">
      <Link to="/">Back</Link> 
      {error && <Message messageType="error" content={error.message}/>} 
      {!loading && !error &&apiData && (
        <div>
          <Table launcher={apiData.launcher}/>
        </div>
      )}
    </main>
  );
};

export default LauncherDetailsPage;
