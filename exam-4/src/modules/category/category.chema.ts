import { Schema, Types } from "mongoose";
import { IWorktab } from "../workings/workings.schema.js";

export interface ICategory {
  name: string;
  works?: Array<IWorktab>;
}

export const categorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },
  works: [{ type: Types.ObjectId, ref: "flower" }],
});
