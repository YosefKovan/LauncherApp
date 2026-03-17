import AppError from "../errors/app.errors.js";
import * as authService from "../services/auth.services.js";


export async function loginUserController(req, res, next){

    try{
        const {username, password} = req.body;

        if(!username || !password){
            throw new AppError(400, "must include username and password");
        }

        const response = await authService.loginUserService(username, password);
        
        return res.status(200).json({...response,  message : "login was successful."})

    }catch(err){
        next(err);
    }

}


export async function createUserController(req, res, next){

    try{
        const {username, password, email, role} = req.body;

        if(!username || !password || !email || !role){
            throw new AppError(400, "must include all fields.");
        }
        
        const user = await authService.createUserService(username, password, email, role)
        
        return res.status(201).json({message : "user was added successfully.", user})
    }catch(err){
        next(err);
    }
}


export async function updateUserController(req, res, next){

    try{
        const {username, password, email, role, id} = req.body;
         
        if(!id){
            throw new AppError(400, "must include an id");
        }

        if(!username && !password && !email && !role){
            throw new AppError(400, "must include at least one field to update");
        }
        
        await authService.updateUserService(id, username, password, email, role);
        
        return res.status(201).json({message : "user was updated successfully."});

    }catch(err){
        next(err);
    }

}

export async function deleteUserController(req, res, next){

    try{
        const {id} = req.params;

        await authService.deleteUserService(id);
        
        return res.status(201).json({message : "user was removed successfully."});

    }catch(err){
        next(err);
    }
}

export async function getCurrentUser(req, res, next){

    try{
        const user = await authService.getUserById(req.payload.id);
        return res.status(201).json({user});
    }catch(err){
        next(err);
    }

}

export async function getAllUsers(req, res, next){

    try{
        
        const users = await authService.getAllUsers();
        return res.status(200).json({users});

    }catch(err){
        next(err);
    }

}

export async function getUserById(req, res, next){

    try{
        const {id} = req.params; 
        const user = await authService.getUserById(id);
        return res.status(201).json({user});
    }catch(err){
        next(err);
    }

}

