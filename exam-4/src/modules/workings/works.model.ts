import { model } from "mongoose";
import { IWorktab, workingSchema } from "./workings.schema.js";

export const WorkModel = model<IWorktab>("working", workingSchema);
