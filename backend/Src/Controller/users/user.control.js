import { user_model } from "../../Models/Schema/all.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config.js";

class userControl {
  async user_Register(req, res) {
    try {
      let { username, last_name, email, phone, password } = req.body;
      let SECRET_KEY = process.env.SECRET_KEY;

      const hashing_password = await bcrypt.hash(password, 10);
      const register_data = await new user_model({
        username: username,
        last_name: last_name,
        email: email,
        phone: phone,
        password: hashing_password,
      }).save();

      let { _id } = register_data;
      const access_token = jwt.sign({ _id }, SECRET_KEY);

      res.status(201).json({
        username: username,
        last_name: last_name,
        email: email,
        phone: phone,
        access_token: access_token,
        status: 201,
      });
    } catch (error) {
      res.status(500).json({ data: "internal server error" });
    }
  }

  async user_Login(req, res) {
    try {
      let { email, password } = req.body;

      const SECRET_KEY = process.env.SECRET_KEY;
      const user = await user_model.findOne({ email: email });
      if (user) {
        const password_valid = await bcrypt.compare(password, user.password);
        if (password_valid) {
          let { _id } = user;
          let token = jwt.sign({ _id }, SECRET_KEY);
          res.status(200).json({
            data: {
              username: user.username,
              last_name: user.last_name,
              email: user.email,
              phone: user.phone,
              access_token: token,
              status: 200,
            },
          });
        } else {
          res.status(404).json({ data: "wrong password", status: 404 });
        }
      }

      if (!user) {
        res.status(404).json({ data: "this email not found", status: 404 });
      }
    } catch (error) {
      res.status(500).json({ data: "internal server error" });
    }
  }

  async userUpdate(req, res) {
    try {
      let SECRET_KEY = process.env.SECRET_KEY;
      let { email } = req.body;

      if (!email) {
        let { access_token } = req.headers;
        let payload = jwt.verify(access_token, SECRET_KEY);
        let dataFind = await user_model.findOne({ _id: payload._id });
        let { email } = req.params;
        if (dataFind.email == email) {
          let data = await user_model.updateOne(req.params, { $set: req.body });
          res.status(200).json({ data });
          return;
        }
        if (dataFind.email !== email) {
          res.status(212).json({ data: "bu sizga tegishli emas", status: 403 });
          return;
        }
      } else {
        res
          .status(212)
          .json({ data: "emailni ozgartirish mumkin emas", status: 403 });
      }
    } catch (error) {
      if (error instanceof jwt.JsonWebTokenError) {
        res.status(401).json({ error: "invalide token" });
        return;
      }
      res.status(500).json({ data: "internal server error" });
    }
  }

  async userFind(req, res) {
    try {
      let data = await user_model.find();
      if (data) {
        return res.status(201).json({ data });
      } else {
        return res.status(404).json({ message: "not found data", status: 404 });
      }
    } catch (error) {
      res.status(500).json({ data: "internal server error" });
    }
  }
}

export const Control = new userControl();
