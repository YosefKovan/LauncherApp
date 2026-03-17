import { useState } from "react";
import { Roles } from "../../consts/consts";
import AdminForm from "../../components/AdminForm/AdminForm";
import useSend from "../../hooks/useSend";

const URL = "http://localhost:3000/api/auth/create";

function RegisterPage() {
  
  const {sendData, apiData, error, loading} = useSend()
   
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(Roles[0]);
  
  function handleSubmit(e){

    e.preventDefault();

    const body = {
      username, password, email, role
    }

    const token = localStorage.getItem("token");

    const headers = {"Content-Type" : "application/json", "Authorization" : "Bearer " + token}

    const requestData = {
      method : "POST",
      headers : headers,
      body : JSON.stringify(body)
    }

    sendData(URL, requestData);
  }

  return (
    <main>
      <AdminForm
        error={error}
        success={apiData}
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

export default RegisterPage;
