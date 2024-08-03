import express from "express";
import { login, logout, register } from "../controllers/user.controller";
import { createEmail, deleteEmail } from "../controllers/email.controller";
import isAuthenticated from "../middleware/isAuthenticated";

const router=express.Router();
 router.route("/create").post(isAuthenticated,createEmail);
 router.route("/:id").delete(isAuthenticated,deleteEmail);
 router.route("/getallemails").get(isAuthenticated,getAllEmailById);


export default router;