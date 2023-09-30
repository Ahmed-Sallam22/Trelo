import taskModel from "../../../../DB/model/tasks.model.js";
import asyncHandeler from "../../../utils/errorHandling.js";

const GetAllLateTask = asyncHandeler(async (req, res, next) => {
  const nowDate = new Date();
  const LateTasks = await taskModel
    .find({ userId: req.user._id, deadline: { $lt: nowDate } })
    .populate([
      {
        path: "userId",
        select: "userName email",
      },
      {
        path: "assignTo",
        select: "userName email",
      },
    ]);
  return res.json({ message: "Done", LateTasks });
});

export default GetAllLateTask;
