import express from "express";
import "dotenv/config.js";
import { user_router } from "./Router/register.routes.js";
import { work_router } from "./Router/work.routes.js";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";

async function starter() {
  try {
    const PORT = process.env.PORT;
    await mongoose
      .connect("mongodb://127.0.0.1:27017/exam5")
      .then((e) => console.log("succest"))
      .catch((error) => console.log(error));

    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(bodyParser.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/user", user_router);
    app.use("/work", work_router);
    app.use(express.static(path.join(path.resolve(), "uploads")));

    app.listen(PORT, console.log(`server is running on ${PORT} port`));
  } catch (error) {
    console.error(error.message);
  }
}

starter();
