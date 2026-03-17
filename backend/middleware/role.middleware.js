import AppError from "../errors/app.errors.js"


function roleMiddleWare(...roles){

    return (req, res, next)=>{

        if(!roles.includes(req.payload.role)){
            throw new AppError(403, "You are not authorized must have higher permissions.")
        }

        next();
    }

}

export default roleMiddleWare;