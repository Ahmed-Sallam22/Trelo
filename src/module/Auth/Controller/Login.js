import userModel from "../../../../DB/model/user.model.js";
import bcrypt from "bcryptjs";
import asyncHandeler from "../../../utils/errorHandling.js";
import jwt from "jsonwebtoken";

const Login = asyncHandeler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    return next(new Error("In-valid Email "));
  }
  const match = bcrypt.compareSync(password, user.password);
  if (!match) {
    return next(new Error("In-valid Password"));
  }
  const token = jwt.sign(
    { name: user.userName, id: user._id,email:user.email },
   process.env.TOKEN_PASS,{
    expiresIn:2
   }
  );
  const online=await user.updateOne({ isOnline: true ,isDeleted:false}, { new: true });
  return res.json({ message: `Done`, token });
});
export default Login;
