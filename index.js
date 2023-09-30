import express from "express";
import bootstrap from "./src/index.router.js";
const app = express();
const port = 5000;
import dotenv from "dotenv";
import sendEmail from "./src/utils/Conf_Email.js";
dotenv.config();

// sendEmail({
//     to:"ahmed30sallam@gmail.com",
//     subject:"Test",
//    html:"<p></p>",
  
// })

app.get('/',(req,res,next)=>{
    console.log(req.protocol);
})
bootstrap(app, express);

app.listen(port);
