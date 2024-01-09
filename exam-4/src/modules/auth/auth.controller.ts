import { Request, Response } from "express";
import { userModel } from "../users/user.model.js";
import { jwtToken } from "../../utils/jwt.js";
import { mongo } from "mongoose";

export class AuthController {
  async login(req: Request, res: Response): Promise<void> {
    try {
      const { username, password } = req.body;
      const user = await userModel.findOne({ username });

      if (!user || user.password != password) {
        res
          .status(404)
          .json({ msg: "User is not found", data: null, error: true });
        return;
      }

      const TOKEN = jwtToken.sign({ username, isAdmin: user.isAdmin });
      res.status(200).json({ msg: "Ok", data: TOKEN, error: false });
    } catch (error: any) {
      res.status(500).json({ msg: error.message, data: null, error: true });
    }
  }

  async register(req: Request, res: Response): Promise<void> {
    try {
      const { username, password } = req.body;
      const user = await userModel.create({
        username,
        password,
      });

      const TOKEN = jwtToken.sign({ username, isAdmin: false });

      res.status(201).json({ msg: "CREATED", data: TOKEN, error: false });
    } catch (error: any) {
      if (error instanceof mongo.MongoServerError) {
        res.status(409).json({ msg: error.message, data: null, error: true });
        return;
      }
      res.status(500).json({ msg: error.message, data: null, error: true });
    }
  }
}
