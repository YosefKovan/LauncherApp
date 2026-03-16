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
  const [search, setSearch] = useState("");
  
  function clearFields(e){
    e.preventDefault()
    
    setSelected("all");
    setSearch("");

    setDataToDisplay(apiData.launchers)

  }

  function filterData(e){
    e.preventDefault();
    
    const display = apiData.launchers.filter((data)=>{
      if(data.rocketType !== selected && search !== data.city){
        return false
      }
            
      return true;
    })

    setDataToDisplay(display);

  }
  
  useEffect(()=>{

    if(!apiData) return;
    
    setDataToDisplay(apiData.launchers);

  }, [apiData])

  

  return (
    <main className="home-page">
      {loading && <div>Loading...</div>}
      {!loading && !error && apiData &&(
        <>
        <section className="form-section">
          <form>
            <div className="form-group">
              <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search for city.."/>
            </div>
            <div className="form-group">
              <select value={selected} onChange={(e)=>setSelected(e.target.value)}>
                <option value="all" >All</option>
                {RocketOptions.map((option)=><option value={option}>{option}</option>)}
              </select>
            </div>
            <button className="btn search-btn" onClick={filterData}>Search</button>
            <button className="btn clear-btn" onClick={(e)=>{clearFields(e)}} >Reset</button>
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
