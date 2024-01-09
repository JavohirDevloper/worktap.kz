import { Request, Response } from "express";
import { WorkModel } from "./works.model.js";
import { categoryModel } from "../category/category.model.js";
import { Types } from "mongoose";

class WorksController {
  async getWorks(req: Request, res: Response): Promise<void> {
    try {
      const { page, limit } = req.query;
      const count = await WorkModel.find().countDocuments();
      const works = await WorkModel.find()
        .skip((Number(page) - 1) * Number(limit))
        .limit(Number(limit));

      res.status(200).json({ msg: "Ok", data: { count, works }, error: false });
    } catch (error: any) {
      res.status(500).json({ msg: error.message, data: null, error: true });
    }
  }

  async createWork(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const category = await categoryModel.findOne({ _id: id });
      if (!category) {
        res.status(404).json({ msg: "Not Found", data: null, error: true });
        return;
      }

      const work = await new WorkModel({
        name: req.body.name,
        price: req.body.price,
        image:
          `http://${process.env.APP_HOST}:${process.env.PORT}/` +
          req.file?.filename!,
        category: new Types.ObjectId(category._id),
      }).save();

      console.log(category);

      category.works?.push(work);
      await category.save();

      res.status(201).json({ msg: "Created", data: work, error: false });
    } catch (error: any) {
      res.status(500).json({ msg: error.message, data: null, error: true });
    }
  }

  async deleteWork(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deletedWork = await WorkModel.findByIdAndDelete(id);

      if (!deletedWork) {
        res.status(404).json({ msg: "Not Found", data: null, error: true });
        return;
      }

      res.status(200).json({ msg: "Deleted", data: deletedWork, error: false });
    } catch (error: any) {
      res.status(500).json({ msg: error.message, data: null, error: true });
    }
  }

  async updateWork(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updatedWork = await WorkModel.findByIdAndUpdate(
        id,
        {
          name: req.body.name,
          price: req.body.price,
        },
        { new: true }
      );

      if (!updatedWork) {
        res.status(404).json({ msg: "Not Found", data: null, error: true });
        return;
      }

      res.status(200).json({ msg: "Updated", data: updatedWork, error: false });
    } catch (error: any) {
      res.status(500).json({ msg: error.message, data: null, error: true });
    }
  }
}

export const workController = new WorksController();
