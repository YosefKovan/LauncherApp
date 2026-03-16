import useFetch from "../../hooks/useFetch";
import Table from "../../components/HomeTable/HomeTable";

const URL = "http://localhost:3000/api/launchers";

function HomePage() {
  const { loading, apiData, error } = useFetch(URL);

  return (
    <main>
      {loading && <div>Loading...</div>}
      {!loading && !error && apiData &&(
        <section className="table-section">
          <Table launchers={apiData.launchers} />
        </section>
      )}
    </main>
  );
}

export default HomePage;
