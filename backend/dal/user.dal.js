import User from "../models/user.model.js";
import AppError from "../errors/app.errors.js";

export async function createUserDal(username, password, email, role){
    
    try{
        const result = await User.create({username, password, email, role, lastLogin : null});
    
        return result;
    }
    catch(err){
        if(err.errorResponse.code === 11000){
            throw new AppError(400, "username must be unique");
        }

        throw err;
    }
}

export async function getUserByUsername(username){

    const user = await User.findOne({username});

    return user;

}

export async function updateLoginTime(){

    await User.update({lastLogin : Date.now()});
}

export async function deleteUserById(id){

    const result = await User.deleteOne({_id : id});
}

export async function updateUser(id, fieldsToUpdate){

    const result = await User.findByIdAndUpdate(id, fieldsToUpdate);
}

