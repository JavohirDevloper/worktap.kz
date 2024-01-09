import "dotenv/config";
import express, { Application } from "express";
import { dbConnections } from "./utils/db.connection.js";
import { connect } from "mongoose";
import { categoryRouter } from "./modules/category/category.router.js";
import { workRouter } from "./modules/workings/workings.router.js";
import { authRouter } from "./modules/auth/auth.router.js";

declare global {
  namespace Express {
    interface Request {
      user: Object;
    }
  }
}

async function starter(): Promise<void> {
  try {
    const app: Application = express();
    app.use(express.json());
    await dbConnections();

    // Router
    app.use(authRouter);
    app.use(categoryRouter);
    app.use(workRouter);

    await connect("mongodb://127.0.0.1:27017/test");
    console.log("db connect");

    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  } catch (error: any) {
    console.error(error);
    process.exit(-1);
  }
}

starter();
