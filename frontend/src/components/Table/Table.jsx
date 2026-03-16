import "./Table.css";
import { Link } from "react-router";

function Table({launchers}) {
  
  
  console.log(typeof launchers)

  
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
           <th>City</th>
          <th>Rocket Type</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Go To</th>
        </tr>
      </thead>
      <tbody>
        {launchers.map((launcher)=>(
          <tr key={launcher._id}>
            <td>{launcher.name || "no name"}</td>
            <td>{launcher.city}</td>
            <td>{launcher.rocketType}</td>
            <td>{launcher.latitude}</td>
            <td>{launcher.longitude}</td>
            <td><Link to={`/launcher/${launcher._id}`}>Review</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
