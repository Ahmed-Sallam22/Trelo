import userModel from "../../../../DB/model/user.model.js";
import asyncHandeler from "../../../utils/errorHandling.js";
import bcrypt from "bcryptjs";

const ChangePassword = asyncHandeler(async (req, res, next) => {
  const { oldpassword, newpassword, repassword } = req.body;
  const user= await userModel.findById(req.user._id);
  const match = bcrypt.compareSync(oldpassword, user.password);
  if (!match) {
    return next(new Error("In-valid Password"));
  }
  if (newpassword != repassword) {
    return next(new Error("password not match rePassword"));
  }
  if(oldpassword==newpassword){
    return next(new Error("oldpassword equal newPassword"));

  }
  const HashPassword = bcrypt.hashSync(newpassword, 8);
  const change = await userModel.findByIdAndUpdate(
    req.user._id,
    { password: HashPassword },
    { new: true }
  );
  return res.json({ message: `Done`, change });
});

export default ChangePassword;
