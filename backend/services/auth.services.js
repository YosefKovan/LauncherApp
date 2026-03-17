import * as userDal from "../dal/user.dal.js"
import {signToken} from "../utils/jwt.utils.js";
import AppError from "../errors/app.errors.js";
 
export async function loginUserService(username, password){


    const user = await userDal.getUserByUsername(username);
    
    if(!user){
        throw new AppError(401, "username incorrect");
    }
    
    console.log(user);
    

    if(user.password !== password){
        throw new AppError(401, "password is incorrect")
    }
    
    await userDal.updateLoginTime();
    
    const token = signToken({id : user._id, username : username, role : user.role});

    return token;
}

export async function createUserService(username, password, email, role){
    
    const user = await userDal.createUserDal(username, password, email, role);
    
    return {username : user.username, email : user.email, role : user.role, id : user._id};
}

export async function updateUserService(id, username, password, email, role){
    
    let update = {};

    if(username){
        update = {username};
    }

    if(password){
        update = {...update, password}
    }

    if(email){
        update = {...update, email}
    }

    if(role){
        update = {...update, role}
    }

    await userDal.updateUser(id, update);
}

export async function deleteUserService(id){

    await userDal.deleteUserById(id);
}

