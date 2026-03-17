import { useEffect, useState } from "react";
import { Roles } from "../../consts/consts";
import AdminForm from "../../components/AdminForm/AdminForm";
import useSend from "../../hooks/useSend";
import { useNavigate, useParams } from "react-router";

const SEND_URL = "http://localhost:3000/api/auth/update";
const GET_URL = "http://localhost:3000/api/auth/getUser";
const DELETE_URL = "http://localhost:3000/api/auth/delete";

function EditUserPage() {
  
  const {sendData, apiData, error, loading} = useSend();
  const { id } = useParams();
  const navigate = useNavigate()
   
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  
  console.log(id);
  

  useEffect(()=>{
    async function getInitialData(){
        
        const token = localStorage.getItem("token");
        const [data, error] = await sendData(GET_URL + `/${id}`, {method : "GET", headers : {Authorization : "Bearer " + token}});
        
        console.log(data);
        

        setUsername(data.user.username || "");
        setPassword(data.user.password || "");
        setEmail(data.user.email || "");
        setRole(data.user.role || "");
    }

    getInitialData();
    
  }, [])

  
  async function handleSubmit(e){

    e.preventDefault();

    const body = {
      username, password, email, role, id
    }

    const token = localStorage.getItem("token");

    const headers = {"Content-Type" : "application/json", "Authorization" : "Bearer " + token}

    const requestData = {
      method : "PUT",
      headers : headers,
      body : JSON.stringify(body)
    }

    const [daat, error] = await sendData(SEND_URL, requestData);

    if(!error){
        navigate("/users")
    }
  }

  async function handleDelete(){
    
    const token = localStorage.getItem("token");

    const headers = {"Content-Type" : "application/json", "Authorization" : "Bearer " + token}

    const requestData = {
      method : "DELETE",
      headers : headers,
    }

    const [daat, error] = await sendData(DELETE_URL + `/${id}`, requestData);

    if(!error){
        navigate("/users")
    }
  }

  return (
    <main>
      <h1>Edit User Or Delete</h1>
      <button onClick={handleDelete}>Delete User</button>
      <AdminForm
        error={error}
        username={username}
        password={password}
        email={email}
        role={role}
        setUsername={setUsername}
        setPassword={setPassword}
        setEmail={setEmail}
        setRole={setRole}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}

export default EditUserPage;
