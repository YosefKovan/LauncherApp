import jwt from "jsonwebtoken";
import AppError from "../errors/app.errors.js";
import dotenv from "dotenv"

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES = process.env.JWT_EXPIRES || '24h'

export function signToken(payload){
    

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES});
    return token;
}

export function validateToken(token){
    
    try{
        const payload = jwt.verify(token, JWT_SECRET);
        return payload;
    }catch(error){
        throw new AppError(401,  `Unauthorized - ${error.message}`);
    }
}