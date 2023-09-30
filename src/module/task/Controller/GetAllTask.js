import taskModel from "../../../../DB/model/tasks.model.js";
import asyncHandeler from "../../../utils/errorHandling.js";


const getAllTask=asyncHandeler(
    async(req,res,next)=>{
        const AllTasks=await taskModel.find().populate([
            {
                path:"userId",
                select:"userName email"
            },
            {
                path:"assignTo",
                select:"userName email"
            }
        ])
        return res.json({message:"Done",AllTasks})
    }
)

export default getAllTask