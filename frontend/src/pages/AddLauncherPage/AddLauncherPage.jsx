import { useState } from "react";


const options = ["Shahab3", "Fetah110", "Radwan", "Kheibar"];

function AddLAuncher(){
     
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [rocketType, setRocketType] = useState(options[0]);
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongtitude] = useState("");
    

    async function submitForm(e){
        e.preventDefault()
    }

    return(
        <main>
            <form>
                <div className="form-group">
                    <input type="text" placeholder="Please enter name" value={name} onChange={e=>setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <select value={rocketType} pnChange={e=>setRocketType(e.target.value)}>
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
                <button type="submit">Submit</button>
            </form>
        </main>
    )

}

export default AddLAuncher;