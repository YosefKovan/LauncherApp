import * as launcherService from "../services/launcher.services.js";


export async function getLaunchers(req, res, next) {
  try {
     const launchers = await launcherService.getLaunchersService();
     return res.status(200).json(launchers);
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
    await launcherService.addLauncherService(id);
    return res.status(200).json({message : "launcher added successfully."});
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
