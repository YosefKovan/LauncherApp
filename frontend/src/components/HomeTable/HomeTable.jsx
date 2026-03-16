import "./HomeTable.css";
import { Link } from "react-router";

function Table({launchers}) {
  
  return (
    <table className="home-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Go To</th>
        </tr>
      </thead>
      <tbody>
        {launchers.map((launcher)=>(
          <tr key={launcher._id}>
            <td>{launcher.name || "no name"}</td>
            <td><Link to={`/launcher/${launcher._id}`}>Review {launcher.name}</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
