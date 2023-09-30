import userRouting from "./module/user/user.router.js";
import authRouting from "./module/Auth/auth.router.js";
import taskRouting from "./module/task/task.router.js";
import ConnectDB from "../DB/Connection.js";
import { globalErrorHandling } from "./utils/errorHandling.js";

const bootstrap = (app, express) => {
  app.use(express.json());

  app.use("/auth", authRouting);
  app.use("/user", userRouting);
  app.use("/task", taskRouting);

  app.use(globalErrorHandling);

  app.use("*", (req, res, next) => {
    return res.json({ message: "In-valid Routing" });
  });

  ConnectDB();
};
export default bootstrap;
