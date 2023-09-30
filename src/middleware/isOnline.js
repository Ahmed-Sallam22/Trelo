import userModel from "../../DB/model/user.model.js";

const isonline=async(req,res,next)=>{
    const user= await userModel.findById(req.user._id);
    if(user.isOnline==false){
        return next(new Error("you must be login"));
    }
    return next();
}
export default isonline