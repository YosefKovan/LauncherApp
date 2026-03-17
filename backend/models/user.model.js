import {Schema, model} from "mongoose";

const userSchema = new Schema({
    username : {type : String, unique : true},
    password : String,
    email : String,
    role : {type : String, enum : ["ADMIN", "AIRFORCE", "INTELLIGENCE"]},
    lastLogin : Date
})

export default model("User", userSchema)