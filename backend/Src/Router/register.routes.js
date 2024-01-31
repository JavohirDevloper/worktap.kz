import { Router } from "express";
import { Control } from "../Controller/users/user.control.js";
import { registerCheck, checkLogin } from "../Middlewares/check.user.js";
import { upload } from "../Utils/multer.js";

export const user_router = Router();

user_router
  .post("/register", registerCheck, Control.user_Register)
  .post("/login", Control.user_Login)
  .get("/all", Control.userFind)
  .put("/update/:email", Control.userUpdate);
