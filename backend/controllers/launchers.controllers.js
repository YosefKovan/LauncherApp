import * as launcherService from "../services/launcher.services.js";
import AppError from "../errors/app.errors.js";


export async function getLaunchers(req, res, next) {
  try {
     const launchers = await launcherService.getLaunchersService();
     return res.status(200).json({launchers : launchers});
  } catch (err) {
    next(err);
  }
}


export async function getLauncherById(req, res, next) {
  try {

    const {id} = req.params;
    const launcher = await launcherService.getLauncherByIdService(id);
    return res.status(200).json({launcher});

  } catch (err) {
    next(err);
  }
}



export async function addLauncher(req, res, next) {
  
  try {

    const {name, rocketType, latitude, longitude, city} = req.body;

    if(!name || !rocketType || !latitude || !longitude || !city){
      throw new AppError(400, "must include all fields");
    }

    const launcher = await launcherService.addLauncherService(name, rocketType, latitude, longitude, city);
    return res.status(200).json({message : "launcher added successfully.", launcher});
  } catch (err) {
    next(err);
  }
}

export async function deleteLauncher(req, res, next) {
  
  try {

    const {id} = req.params;
    await launcherService.deleteLauncher(id);
    return res.status(201).json({message : "launcher was deleted successfully."});

  } catch (err) {
    next(err);
  }
}
