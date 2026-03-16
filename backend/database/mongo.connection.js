import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI;

async function connect(){

    await mongoose.connect(MONGODB_URI)
    console.log("Mongo db connection was established");
}

export default connect;