import { Request, Response } from "express";
import { categoryModel } from "./category.model.js";

class CategoryController {
  async getCategory(req: Request, res: Response): Promise<void> {
    try {
      const categories = await categoryModel.find().populate("works").exec();
      res.status(200).json({ msg: "Ok", data: categories, error: false });
    } catch (error: any) {
      res.status(500).json({ msg: error.message, data: null, error: true });
    }
  }

  async createCategory(req: Request, res: Response): Promise<void> {
    try {
      const category = await new categoryModel({
        name: req.body.name,
      }).save();

      res.status(201).json({
        msg: "Created",
        data: category,
        error: false,
      });
    } catch (error: any) {
      res.status(500).json({ msg: error.message, data: null, error: true });
    }
  }

  async deleteCategory(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deletedCategory = await categoryModel.findByIdAndDelete(id);

      if (!deletedCategory) {
        res.status(404).json({ msg: "Not Found", data: null, error: true });
        return;
      }

      res
        .status(200)
        .json({ msg: "Deleted", data: deletedCategory, error: false });
    } catch (error: any) {
      res.status(500).json({ msg: error.message, data: null, error: true });
    }
  }

  async updateCategory(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updatedCategory = await categoryModel.findByIdAndUpdate(
        id,
        {
          name: req.body.name,
        },
        { new: true }
      );

      if (!updatedCategory) {
        res.status(404).json({ msg: "Not Found", data: null, error: true });
        return;
      }

      res
        .status(200)
        .json({ msg: "Updated", data: updatedCategory, error: false });
    } catch (error: any) {
      res.status(500).json({ msg: error.message, data: null, error: true });
    }
  }
}

export const categoryController = new CategoryController();
