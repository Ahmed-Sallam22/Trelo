import userModel from "../../../../DB/model/user.model.js";
import asyncHandeler from "../../../utils/errorHandling.js";

const update =asyncHandeler(
  async (req, res,next) => {
    const { userName, age, phone } = req.body;
      const user = await userModel.findByIdAndUpdate(
          req.user._id,
          { age, phone, userName },
          { new: true }
          );
          return res.json({ message: "Done", user });
    
    }
)



export default update;
