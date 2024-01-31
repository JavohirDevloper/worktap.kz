import { Router } from "express";
import { controlWork } from "../Controller/work/work.control.js";
import { upload } from "../Utils/multer.js";
import { WorkCheck } from "../Middlewares/check.work.js";

export const work_router = Router();

work_router
  .post("/create", upload.single("avatar"), WorkCheck, controlWork.workCreate)
  .get("/all", controlWork.workGet)
  .get("/all/:type", controlWork.typeSearch);