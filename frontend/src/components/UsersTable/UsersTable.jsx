import "../HomeTable/HomeTable.css";
import { Link } from "react-router";

function UsersTable({users}){

    return(
    <table className="home-table">
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Role</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user)=>(
          <tr key={user._id}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td><Link to={`/users/edit/${user._id}`}>Edit</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
    )
}

export default UsersTable;