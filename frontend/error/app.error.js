
class AppError extends Error{

    constructor(code, message){
        super(message)
        this.code = Number(code);
    }
}

export default AppError