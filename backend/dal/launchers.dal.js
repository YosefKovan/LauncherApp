import Launcher from "../models/launcher.model.js"
import AppError from "../errors/app.errors.js";

export async function getAllLaunchers(){

    return await Launcher.find({})
}

export async function addLauncher(name, rocketType, latitude, longitude, city){

   const result = await Launcher.create({name, rocketType, latitude, longitude, city}) 
    
   return result;
}

export async function getLauncherById(id){

    const result = await Launcher.findOne({_id : id});

    if(!result){
        throw new AppError(404, "launcher with this id was not found.")
    }

    return result;
}


export async function deleteLauncher(id){

    const result = await Launcher.deleteOne({_id : id});

    if(!result || !result.acknowledged || result.deletedCount < 1){
        throw new AppError(402, "error occured when deleting the launch");
    }
}