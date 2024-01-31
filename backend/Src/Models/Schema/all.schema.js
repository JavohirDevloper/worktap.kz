import { Schema } from "mongoose";
import mongoose from "mongoose";
const user_schema = new Schema({
  avatar: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const user_model = mongoose.model("users_table", user_schema);

const work_schema = new Schema({
  avatar: {
    type: String,
  },
  work_type: {
    type: String,
    required: true,
  },
  work_price: {
    type: Number,
    required: true,
  },
  work_bio: {
    type: String,
    default: "no bio",
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "users_table",
    required: true,
  },
});

export const work_model = mongoose.model("works_table", work_schema);
