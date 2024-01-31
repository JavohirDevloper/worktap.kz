import { user_model } from "../Models/Schema/all.schema.js";

export async function registerCheck(req, res, next) {
  try {
    let { username, last_name, email, phone, password } = req.body;
    console.log(req.body);

    if (!username || !last_name || !email || !phone || !password) {
      return res
        .status(400)
        .json({ data: "ma'lumotlar to'liq kiritilmagan", status: 400 });
    }
    let existingChack = await user_model.find({
      email: email,
    });
    if (existingChack.length) {
      return res
        .status(409)
        .json({ data: "this user already exists", status: 409 });
    }
    if (
      username.length < 3 ||
      !isNaN(username) ||
      /[@#!$%^&*:']/g.test(username)
    ) {
      return res
        .status(400)
        .json({ data: "Invalid username value", staus: 400 });
    }

    if (email.length < 3 || !isNaN(email)) {
      return res.status(400).json({ data: "Invalid email value", staus: 400 });
    }

    if (last_name.length < 3 || !isNaN(last_name)) {
      return res
        .status(400)
        .json({ data: "Invalid last_name value", staus: 400 });
    }

    if (password.length < 3 || !isNaN(password)) {
      return res
        .status(400)
        .json({ data: "Invalid password value", staus: 400 });
    }
    return next();
  } catch (error) {
    res.status(500).json({ data: "internal server error", status: 500 });
  }
}

export async function checkLogin(req, res, next) {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ data: "ma'lumotlar to'liq kiritilmagan", status: 400 });
    }

    return next();
  } catch (error) {
    res.status(500).json({ data: "internal server error" });
  }
}
