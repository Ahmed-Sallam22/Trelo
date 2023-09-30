import taskModel from "../../../../DB/model/tasks.model.js";
import asyncHandeler from "../../../utils/errorHandling.js";
import userModel from "../../../../DB/model/user.model.js";

const addTasks = asyncHandeler(async (req, res, next) => {
  const { title, description, assignTo, deadline } = req.body;
  const checkuser = await userModel.findById(assignTo)
  if(!checkuser){
    return next(new Error("in-valid user"));
  }
  var varDate = new Date(deadline);
  const nowDate=new Date()
  if(varDate<nowDate){
    return next(new Error("Enter Valid Date"));
  }
  const tasks = await taskModel.create({
    title,
    description,
    assignTo,
    deadline:varDate,
    userId: req.user._id,
  });
  return res.status(201).json({ message: "Done", tasks });
});

export default addTasks;
