import { Router } from "express";
import { AuthController } from "./auth.controller.js";

const authController = new AuthController();
export const authRouter: Router = Router();

authRouter.post("/login", authController.login);
authRouter.post("/register", authController.register);
