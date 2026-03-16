import { addLauncher } from "../controllers/launchers.controllers"
import Launcher from "../models/launcher.model.js"

export async function getAllLaunchers(){


}

export async function addLauncher(name, rocketType, latitude, longitude, city){

   const result = await Launcher.create({name, rocketType, latitude, longitude, city}) 
    
   console.log(result);
   
}