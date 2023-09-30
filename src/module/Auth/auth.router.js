import { Router } from "express";
import signup, { Newconfirmemail, confirmemail } from "./Controller/Signup.js";
import Login from "./Controller/Login.js";
import logout from "./Controller/Logout.js";
import auth from "../../middleware/auth.js";
import softdelete from "../../middleware/soft.js";
import isonline from "../../middleware/isOnline.js";
import { validation } from "../../middleware/validation.middelware.js";
import * as validators from './validation.js'

const router = Router();

router.post("/signup",  validation(validators.signup),signup);
router.post("/login", validation(validators.login), Login);
router.patch("/logout", auth, isonline, softdelete, logout);

router.get("/confirmEmail/:token", confirmemail); 
router.get("/confirmEmail/resend/:token", Newconfirmemail); 

export default router;
