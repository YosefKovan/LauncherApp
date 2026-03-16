
class AppError extends Error{

    constructor(code, message){
        this.code = Number(code);
        this.message = message;
    }
}

export default AppError