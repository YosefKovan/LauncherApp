import { Roles } from "../../consts/consts";
import "./AdminForm.css";
import Message from "../Message/Message";

function AdminForm(props) {
  
  
    return (
    <form className="admin-form" onSubmit={props.handleSubmit}>
      {props.error && <Message messageType="error" content={props.error.message}/>}
      {props.success && <Message messageType="success" content={props.success.message}/>}
      <div className="form-group">
        <input
          type="text"
          value={props.username}
          onChange={(e) => props.setUsername(e.target.value)}
          placeholder="Enter Username..."
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          value={props.password}
          onChange={(e) => props.setPassword(e.target.value)}
          placeholder="Enter Password..."
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          value={props.email}
          onChange={(e) => props.setEmail(e.target.value)}
          placeholder="Enter email..."
        />
      </div>
      <div className="form-group">
        <select
          value={props.role}
          onChange={(e) => props.setRole(e.target.value)}
        >
          <option value={null}>Choose one</option>
          {Roles.map((role, index) => (
            <option key={index} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>
      <button className="submit-btn">Submit</button>
    </form>
  );
}

export default AdminForm;
