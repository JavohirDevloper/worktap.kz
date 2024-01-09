import { Router } from "express";
import { categoryController } from "./category.controller.js";

export const categoryRouter: Router = Router();

categoryRouter.get("/category", categoryController.getCategory);
categoryRouter.post("/category", categoryController.createCategory);
categoryRouter.delete("/categories/:id", categoryController.deleteCategory);
categoryRouter.put("/categories/:id", categoryController.updateCategory);
