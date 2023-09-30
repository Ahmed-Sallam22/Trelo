import { Router } from "express";
import update from "./Controller/update.js";
import auth from "../../middleware/auth.js";
import ChangePassword from "./Controller/ChangePassword.js";
import deleteUser from "./Controller/Deleteuser.js";
import isonline from "../../middleware/isOnline.js";
import softDelete from "./Controller/softDelete.js";
import softdelete from "../../middleware/soft.js";
import * as validators from './validation.js'
import { validation } from "../../middleware/validation.middelware.js";

const router = Router();

router.put("/update",validation(validators.update) , auth, isonline,softdelete ,update);
router.patch("/ChangePassword", validation(validators.ChangePassword),auth, isonline, ChangePassword);
router.delete("/deleteUser", auth,isonline ,softdelete,deleteUser);
router.patch("/softDelete", auth, isonline,softdelete ,softDelete);

export default router;
