import jwt from "jsonwebtoken";
import userModel from "../../DB/model/user.model.js";
import asyncHandeler from "../utils/errorHandling.js";

const auth = asyncHandeler(
  async (req, res, next) => {
    const { token } = req.headers;
    if (!token?.startsWith(process.env.BEARAR_PASS)) {
      return next(new Error("Token is required or in-valid Bearar Key",{cause:400}));
    }
    const PassToken=token.split(process.env.BEARAR_PASS)[1]
    try{
      const decoded = jwt.verify(PassToken, process.env.TOKEN_PASS)
      const user = await userModel.findById(decoded.id).select("userName email");
      if (!user) {
        return next(new Error("You must Signup First",{cause:400}));
      }
       
        req.user = user;
        return next();
      
    }catch(error){
      if(error=="TokenExpiredError: jwt expired"){
        const user = await userModel.findOne({token:PassToken})
        return res.status(200).json({message:"Token refreshed",user})

        if (!user) {
          return next(new Error("Wrong token",{cause:400}));
        }
        const userToken=jwt.sign(
          { name: user.userName, id: user._id,email:user.email },
         process.env.TOKEN_PASS,{
          expiresIn:5
         }
        );
        user.token=userToken
        await user.save()
        return res.status(200).json({message:"Token refreshed",userToken})
      }
      return next(new Error("in-valid Token",{cause:400}));
    }
    
  
  }
)
export default auth;
