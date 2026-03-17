import AppError from "../errors/app.errors.js";
import {validateToken} from "../utils/jwt.utils.js";

function authMiddleware(req, res, next){

    try{

        const bearerToken = req.headers.authorization;

        if(!bearerToken){
            throw new AppError(401, "Unauthorized - Token not provided");
        }
        
        if(!bearerToken.startsWith("Bearer ")){
            throw new AppError(401, "Unauthorized - must include a valid Bearer token");
        }

        const token = bearerToken.split(" ")[1];
         
        const payload = validateToken(token);

        req.payload = payload;

        next();

    }catch(error){
        next(error);
    }

}

export default authMiddleware;