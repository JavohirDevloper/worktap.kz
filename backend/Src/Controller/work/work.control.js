import { work_model } from "../../Models/Schema/all.schema.js";
import jwt from "jsonwebtoken";
import "dotenv/config.js";

class workControl {
  /*=====================================================> WORK CREATE FUNCTION  <================================================== */

  async workCreate(req, res) {
    try {
      const SECRET_KEY = process.env.SECRET_KEY;
      let { work_type, work_price, work_bio } = req.body;
      let { access_token } = req.headers;
      const payload = jwt.verify(access_token, SECRET_KEY);
      const { _id } = payload;

      let filename = null;
      if (req.file) {
        filename = req.file.filename;
      }

      const createData = await new work_model({
        avatar: filename ? `/img/${filename} ` : null,
        work_type: work_type,
        work_price: work_price,
        work_bio: work_bio,
        user_id: _id,
      }).save();

      res.status(201).json({ data: createData, status: 201 });
    } catch (error) {
      res.status(500).json({ data: "internal server error" });
      console.log(error.message);
    }
  }

  /*=====================================================> WORK FIND FUNCTION  <================================================== */

  async workGet(req, res) {
    try {
      let data = await work_model.find().populate("user_id");
      if (data) {
        return res.status(201).json({ data: data });
      } else {
        return res.status(404).json({ data: "not found data", status: 404 });
      }
    } catch (error) {
      res.status(500).json({ data: "internal server error" });
    }
  }

  /*=====================================================> WORK FIND WITH WORK TYPE FUNCTION  <================================================== */

  async typeSearch(req, res) {
    try {
      let { type } = req.params;
      const worksData = await work_model
        .find({ work_type: type })
        .populate("user_id");
      if (worksData) {
        return res.status(232).json({ data: worksData });
      } else {
        res.status(404).json({ data: "not foud data", status: 404 });
      }
    } catch (error) {
      res.status(500).json({ data: "internal server error" });
    }
  }
}

export const controlWork = new workControl();