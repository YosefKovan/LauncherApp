import { useState } from "react";
import useSend from "../../hooks/useSend"
import {redirect  } from "react-router";
import Message from "../../components/Message/Message";

const URL = ""

function LoginPage(){
    
    const {sendData, error} = useSend()

    const [useranme, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

    async function handleSubmit(){

        const [data, error] = await sendData(URL, {
            method : "POST",
            headers : {"Content-Type": "application/json"},
            body : JSON.stringify({ useranme, password })
        })

        if(!error){
            localStorage.setItem("token", data.token);
            redirect("/")
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <Message messageType="error" content={error.message}/>
            <input value={useranme} onChange={e=>setUsername(e.target.value)} />
            <input alue={password} onChange={e=>setPassword(e.target.value)}/>
            <buton></buton>
        </form>
    )

}


export default LoginPage;