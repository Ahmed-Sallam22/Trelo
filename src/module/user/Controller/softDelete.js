import userModel from "../../../../DB/model/user.model.js";
import asyncHandeler from "../../../utils/errorHandling.js";


const softDelete=asyncHandeler(
    async(req,res,next)=>{ 
        const user=await userModel.findByIdAndUpdate(req.user._id,{isDeleted:true},{new:true})
        return res.json({ message: "Done", user });
    }
)

export default softDelete