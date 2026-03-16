import AppError from "../errors/app.errors.js"

function errorMiddleware(err, req, res, next){

    if(err instanceof AppError){
        return res.status(err.code).json({message : err.message, statusCode : err.code});
    }

    return res.status(500).json({message : "Interanl server error", statusCode : 500});
} 

export default errorMiddleware;