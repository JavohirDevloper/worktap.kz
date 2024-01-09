"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workController = void 0;
const works_model_js_1 = require("../models/works.model.js");
const category_model_js_1 = require("../../category/models/category.model.js");
const mongoose_1 = require("mongoose");
class WorksController {
    async getWorks(req, res) {
        try {
            const { page, limit } = req.query;
            const count = await works_model_js_1.WorkModel.find().countDocuments();
            const works = await works_model_js_1.WorkModel.find()
                .skip((Number(page) - 1) * Number(limit))
                .limit(Number(limit));
            res.status(200).json({ msg: "Ok", data: { count, works }, error: false });
        }
        catch (error) {
            res.status(500).json({ msg: error.message, data: null, error: true });
        }
    }
    async createWork(req, res) {
        try {
            const { id } = req.params;
            const category = await category_model_js_1.categoryModel.findOne({ _id: id });
            if (!category) {
                res.status(404).json({ msg: "Not Found", data: null, error: true });
                return;
            }
            const work = await new works_model_js_1.WorkModel({
                name: req.body.name,
                price: req.body.price,
                image: `http://${process.env.APP_HOST}:${process.env.PORT}/` +
                    req.file?.filename,
                category: new mongoose_1.Types.ObjectId(category._id),
            }).save();
            console.log(category);
            category.works?.push(work);
            await category.save();
            res.status(201).json({ msg: "Created", data: work, error: false });
        }
        catch (error) {
            res.status(500).json({ msg: error.message, data: null, error: true });
        }
    }
    async deleteWork(req, res) {
        try {
            const { id } = req.params;
            const deletedWork = await works_model_js_1.WorkModel.findByIdAndDelete(id);
            if (!deletedWork) {
                res.status(404).json({ msg: "Not Found", data: null, error: true });
                return;
            }
            res.status(200).json({ msg: "Deleted", data: deletedWork, error: false });
        }
        catch (error) {
            res.status(500).json({ msg: error.message, data: null, error: true });
        }
    }
    async updateWork(req, res) {
        try {
            const { id } = req.params;
            const updatedWork = await works_model_js_1.WorkModel.findByIdAndUpdate(id, {
                name: req.body.name,
                price: req.body.price,
            }, { new: true });
            if (!updatedWork) {
                res.status(404).json({ msg: "Not Found", data: null, error: true });
                return;
            }
            res.status(200).json({ msg: "Updated", data: updatedWork, error: false });
        }
        catch (error) {
            res.status(500).json({ msg: error.message, data: null, error: true });
        }
    }
}
exports.workController = new WorksController();
