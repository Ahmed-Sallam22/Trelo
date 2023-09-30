import taskModel from "../../../../DB/model/tasks.model.js";
import asyncHandeler from "../../../utils/errorHandling.js";


const getAllAssignTasks=asyncHandeler(
    async(req,res,next)=>{

        const getAllAssignTo_me=await taskModel.find({assignTo:req.user._id})
        .populate([
            {
                path:"userId",
                select:"userName email"
            },
            {
                path:"assignTo",
                select:"userName email"
            }
        ])
        return res.json({message:"Done",getAllAssignTo_me})
    }
)

export default getAllAssignTasks