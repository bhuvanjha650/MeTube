class ApiRrror extends Error {
    constructor(
        message = "something went wrong",
        Error = [],
        statuscode,
        stack=""
    ){
        super(message);
        this.statuscode = statuscode;
        this.Error = Error;
        this.data = this.data;
        this.message = message;
        this.success = false;  // kyuki humne error ke liye success false set kiya hai
        if(stack){
            this.stack = stack;
        }
        else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiRrror }