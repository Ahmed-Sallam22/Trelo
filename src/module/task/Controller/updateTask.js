import taskModel from "../../../../DB/model/tasks.model.js";
import userModel from "../../../../DB/model/user.model.js";
import asyncHandeler from "../../../utils/errorHandling.js";


const UpdateTasks=asyncHandeler(
    async(req,res,next)=>{
        const {id} = req.params
        const {title,description,status,assignTo}=req.body
        const checkuser = await userModel.findById(assignTo)
        if(!checkuser){
            return next(new Error("in-valid user"));
        }
        const task = await taskModel.findById(id);
        if(!task){
            return next(new Error("In-valid Id"));
        }
        if(assignTo==req.user._id){
            return next(new Error("You can not assign Task To you"));
        }
    if(req.user._id=task.userId){
        const UpdateTask =await taskModel.findByIdAndUpdate(id,{
            title,description,status
        },{new:true})
        return res.json({ message:"Done",UpdateTask });
}
return next(new Error("You are not allow To Update This Task"));
    }
)

export default UpdateTasks