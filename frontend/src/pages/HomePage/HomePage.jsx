import useFetch from "../../hooks/useFetch";
import Table from "../../components/HomeTable/HomeTable";
import { useEffect, useState } from "react";
import {RocketOptions} from "../../consts/consts";
import "./HomePage.css"

const URL = "http://localhost:3000/api/launchers";

function HomePage() {
  const { loading, apiData, error } = useFetch(URL);
  
  const [dataToDisplay, setDataToDisplay] = useState([]);
  const [selected, setSelected] = useState("all");
  const [search, serSearch] = useState("");

  
  useEffect(()=>{

    if(!apiData) return;
    
  
    const display = apiData.launchers.filter((data)=>{
      if(selected !== "all" && data.rocketType !== selected){
        return false
      }

      if(search !== "" && !data.city.startsWith(search)){
        
        return false;
      }
      
      console.log("In here", data.city, search)
      
      return true;
    })

    setDataToDisplay(display);

  }, [apiData, selected, search])

  return (
    <main className="home-page">
      {loading && <div>Loading...</div>}
      {!loading && !error && apiData &&(
        <>
        <section className="form-section">
          <form>
            <div className="form-group">
              <input value={search} onChange={e=>serSearch(e.target.value)}/>
            </div>
            <div className="form-group">
              <select value={selected} onChange={e=>setSelected(e.target.value)}>
                <option value="all" >All</option>
                {RocketOptions.map((option)=><option value={option}>{option}</option>)}
              </select>
            </div>
          </form>
        </section>
        <section className="table-section">
          <Table launchers={dataToDisplay} />
        </section>
        </>
      )}
    </main>
  );
}

export default HomePage;
