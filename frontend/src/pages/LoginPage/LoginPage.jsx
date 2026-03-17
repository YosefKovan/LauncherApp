import { useState } from "react";
import useSend from "../../hooks/useSend"
import {useNavigate} from "react-router";
import Message from "../../components/Message/Message";
import "./LoginPage.css"
import useUser from "../../store/useUser";

const URL = "http://localhost:3000/api/auth/login"

function LoginPage(){
    
    const {sendData, error} = useSend();
    const setRole = useUser((state)=>state.setRole);

    const navigate = useNavigate();

    const [username, setUserame] = useState("");
    const [password, setPassword] = useState("");
    

    async function handleSubmit(e){
        
        e.preventDefault();

        const [data, error] = await sendData(URL, {
            method : "POST",
            headers : {"Content-Type": "application/json"},
            body : JSON.stringify({ username, password })
        })

        if(!error){
            setRole(data.user.role);
            localStorage.setItem("token", data.token);
            return navigate("/launchers");
        }
    }

    return(
        <main className="login-page">
            <form onSubmit={handleSubmit}>
                <h1 className="form-header">Login</h1>
                {error && <Message messageType="error" content={error.message}/>}
                <div className="form-group">
                    <input type="text" value={username} onChange={e=>setUserame(e.target.value)} placeholder="Username..."/>
                </div>
                <div className="form-group">
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password..."/>
                </div>
                <button className="login-submit-button">Submit</button>
            </form>
        </main>
    )

}


export default LoginPage;