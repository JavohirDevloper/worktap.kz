import { Schema, Types } from "mongoose";

export interface IWorktab {
  name: string;
  price: number;
  image: string;
  category?: Types.ObjectId;
}

export const workingSchema = new Schema({
  name: String,
  price: Number,
  image: String,
  category: { type: Schema.Types.ObjectId, ref: "category" },
});
