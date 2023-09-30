import userModel from "../../../../DB/model/user.model.js";
import asyncHandeler from "../../../utils/errorHandling.js";




const deleteUser=asyncHandeler(
    async(req,res,next)=>{
            const user = await userModel.deleteOne({_id:req.user._id})
            return res.json({ message: "Done"}); 
    }
)

export default deleteUser


