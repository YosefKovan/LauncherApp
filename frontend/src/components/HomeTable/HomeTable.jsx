import "./HomeTable.css";
import { Link } from "react-router";

function Table({launchers}) {
  
  if(launchers.length == 0){
    return <h1>No Matches found!</h1>
  }
  

  return (
    <table className="home-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>rocketType</th>
          <th>Go To</th>
        </tr>
      </thead>
      <tbody>
        {launchers.map((launcher)=>(
          <tr key={launcher._id}>
            <td>{launcher.name}</td>
            <td>{launcher.city}</td>
            <td>{launcher.rocketType}</td>
            <td><Link to={`/launcher/${launcher._id}`}>Review</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
