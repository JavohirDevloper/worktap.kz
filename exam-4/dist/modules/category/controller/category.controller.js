"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryController = void 0;
const category_model_js_1 = require("../models/category.model.js");
class CategoryController {
    async getCategory(req, res) {
        try {
            const categories = await category_model_js_1.categoryModel.find().populate("works").exec();
            res.status(200).json({ msg: "Ok", data: categories, error: false });
        }
        catch (error) {
            res.status(500).json({ msg: error.message, data: null, error: true });
        }
    }
    async createCategory(req, res) {
        try {
            const category = await new category_model_js_1.categoryModel({
                name: req.body.name,
            }).save();
            res.status(201).json({
                msg: "Created",
                data: category,
                error: false,
            });
        }
        catch (error) {
            res.status(500).json({ msg: error.message, data: null, error: true });
        }
    }
    async deleteCategory(req, res) {
        try {
            const { id } = req.params;
            const deletedCategory = await category_model_js_1.categoryModel.findByIdAndDelete(id);
            if (!deletedCategory) {
                res.status(404).json({ msg: "Not Found", data: null, error: true });
                return;
            }
            res
                .status(200)
                .json({ msg: "Deleted", data: deletedCategory, error: false });
        }
        catch (error) {
            res.status(500).json({ msg: error.message, data: null, error: true });
        }
    }
    async updateCategory(req, res) {
        try {
            const { id } = req.params;
            const updatedCategory = await category_model_js_1.categoryModel.findByIdAndUpdate(id, {
                name: req.body.name,
            }, { new: true });
            if (!updatedCategory) {
                res.status(404).json({ msg: "Not Found", data: null, error: true });
                return;
            }
            res
                .status(200)
                .json({ msg: "Updated", data: updatedCategory, error: false });
        }
        catch (error) {
            res.status(500).json({ msg: error.message, data: null, error: true });
        }
    }
}
;
exports.categoryController = new CategoryController();
