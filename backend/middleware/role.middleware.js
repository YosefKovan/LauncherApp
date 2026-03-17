import AppError from "../errors/app.errors.js"


function roleMiddleWare(role){

    return (req, res, next)=>{

        if(req.payload.role.toUpperCase() !== role.toUpperCase()){
            throw new AppError(401, "You are not authorized must have higher permissions.")
        }

        next();
    }

}

export default roleMiddleWare;