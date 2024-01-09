import { model } from "mongoose";
import { ICategory, categorySchema } from "./category.chema.js";

export const categoryModel = model<ICategory>("category", categorySchema);
