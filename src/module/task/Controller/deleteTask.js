import taskModel from "../../../../DB/model/tasks.model.js";
import userModel from "../../../../DB/model/user.model.js";
import asyncHandeler from "../../../utils/errorHandling.js";


const deleteTask=asyncHandeler(
    async(req,res,next)=>{
        const {id} = req.params
        const task = await taskModel.findById(id);
        if(!task){
            return next(new Error("In-valid Id"));
        }
if(req.user._id=task.userId){
    const deletedTask =await taskModel.findByIdAndDelete(id)
    return res.json({ message:"Done",deletedTask });
}
return next(new Error("You are not allow To Delete This Task"));
    }
)

export default deleteTask