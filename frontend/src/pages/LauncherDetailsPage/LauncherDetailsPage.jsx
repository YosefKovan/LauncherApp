import { useParams, Link } from "react-router";
import useFetch from "../../hooks/useFetch";
import Message from "../../components/Message/Message";

const BASE_URL = "http://localhost:3000/api/launchers"

function LauncherDetailsPage() {
  const { id } = useParams();

  const { loading, apiData, error } = useFetch(BASE_URL + `/${id}`);

  console.log(apiData);
  

  return (
    <main>
       <Link to="/">Back</Link> 
      {error && <Message messageType="error" content={error.message}/>} 
      {!loading && !error &&apiData && (
        <div>
          <ul>
            <li>{apiData.launcher._id}</li>
            <li>{apiData.launcher.city}</li>
            <li>{apiData.launcher.rocketType}</li>
            <li>{apiData.launcher.latitude}</li>
            <li>{apiData.launcher.longitude}</li>
            <li>{apiData.launcher.name}</li>
          </ul>
        </div>
      )}
    </main>
  );
};

export default LauncherDetailsPage;
