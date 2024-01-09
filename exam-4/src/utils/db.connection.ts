import { connect } from "mongoose";

async function dbConnections() {
  try {
    await connect("mongodb://127.0.0.1:27017/test");
    console.log("db is connected succsessfully");

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export { dbConnections };
