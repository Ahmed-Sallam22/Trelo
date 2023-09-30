import userModel from "../../DB/model/user.model.js";

const softdelete=async(req,res,next)=>{
    const user= await userModel.findById(req.user._id);
    if(user.isDeleted==true){
        return next(new Error("This Email is Deleted  you must be login"));
    }
    return next();
}
export default softdelete