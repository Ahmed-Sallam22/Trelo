import userModel from "../../../../DB/model/user.model.js";
import asyncHandeler from "../../../utils/errorHandling.js";

const logout = asyncHandeler(async(req, res, next) => {
   const user=await userModel.findByIdAndUpdate(req.user._id,{ isOnline: false }, { new: true })
     return res.status(200).json({ message: "Done"});   
    });


export default logout;
