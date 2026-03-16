import { useState } from "react";
import useSend from "../../hooks/useSend";
import Message from "../../components/Message/Message";

const URL = "http://localhost:3000/api/launchers"

const options = ["Shahab3", "Fetah110", "Radwan", "Kheibar"];

function AddLAuncher(){
     
    const {sendData, loading, error, apiData} = useSend();

    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [rocketType, setRocketType] = useState(options[0]);
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongtitude] = useState("");
    

    async function submitForm(e){
        e.preventDefault();
        
        const body = {name, city, rocketType, latitude, longitude};

        const headers = {"Content-Type": "application/json"}

        sendData(URL, {method : "POST", headers, body : JSON.stringify(body)});
    }

    return(
        <main className="add-launch-page">
            {error && <Message messageType="error" content={error.message}/>}
            {apiData && <Message messageType="success" content={apiData.message}/>}
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <input type="text" placeholder="Please enter name" value={name} onChange={e=>setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <select value={rocketType} onChange={e=>setRocketType(e.target.value)}>
                        {options.map((option, index)=>(
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Please enter city" value={city} onChange={e=>setCity(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="number" placeholder="Please enter latitude" value={latitude} onChange={e=>setLatitude(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="number" placeholder="Please enter longitude" value={longitude} onChange={e=>setLongtitude(e.target.value)}/>
                </div>
                <button type="submit" disabled={loading}>Submit</button>
            </form>
        </main>
    )

}

export default AddLAuncher;