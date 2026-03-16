import {Schema, model} from "mongoose";


const launcherSchema = new Schema(
    {  
        name : String,
        city : String,
        rocketType : {enum : ["Shahab3", "Fetah110", "Radwan", "Kheibar"], type : String},
        latitude : Number,
        longitude : Number, 
        city : String
    }
)

export default model("Launcher", launcherSchema);
