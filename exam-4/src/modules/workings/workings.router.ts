import { Router } from "express";
import { workController } from "./working.controller.js";
import { tokenCheker } from "../auth/token.middleware.js";
import { upload } from "../../utils/multer.config.js";

export const workRouter = Router();
workRouter.get("/works", workController.getWorks);
workRouter.post(
  "/works/:id",
  tokenCheker.checkToken,
  upload.single("image"),
  workController.createWork
);
workRouter.delete("/works/:id", workController.deleteWork);
workRouter.put("/works/:id", workController.updateWork);
