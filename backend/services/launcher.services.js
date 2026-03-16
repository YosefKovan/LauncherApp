import * as launcherDal from "../dal/launchers.dal.js"

export async function getLaunchersService(){

    return await launcherDal.getAllLaunchers();
}

export async function getLauncherByIdService(id){

    const launcher = await launcherDal.getLauncherById(id);

    return launcher;

}

export async function addLauncherService(name, rocketType, latitude, longitude, city){

    const launcher = await launcherDal.addLauncher(name, rocketType, latitude, longitude, city);

    return launcher;

}

export async function deleteLauncher(id){

    return await launcherDal.deleteLauncher(id)
}