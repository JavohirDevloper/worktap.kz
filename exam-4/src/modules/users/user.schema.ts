import { Schema } from "mongoose";

export interface IUser {
  username: string;
  password: string;
  isAdmin: boolean;
}

export const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v: string) {
        return /^([A-Za-z]|[A-Za-z]\d+)+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid username!`,
    },
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
