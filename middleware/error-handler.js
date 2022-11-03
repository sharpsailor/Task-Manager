const {CustomAPIError} = require('../errors/custom-error')
const errHandlerMiddleware =(err,req,res,next)=>{
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).json({msg:"Soomething went wrong , try again later "})
}
module.exports = errHandlerMiddleware;