"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flowerController = void 0;
const flower_model_js_1 = require("../models/flower.model.js");
const category_model_js_1 = require("../../category/models/category.model.js");
const mongoose_1 = require("mongoose");
class FlowerController {
    async getFlowers(req, res) {
        try {
            const flowers = await flower_model_js_1.flowerModel.find();
            res.status(200).json({ msg: 'Ok', data: flowers, error: false });
        }
        catch (error) {
            res.status(500).json({ msg: error.message, data: null, error: true });
        }
    }
    async createFlower(req, res) {
        try {
            const { id } = req.params;
            const category = await category_model_js_1.categoryModel.findOne({ _id: id });
            if (!category) {
                res.status(404).json({ msg: 'Not Found', data: null, error: true });
                return;
            }
            const flower = await new flower_model_js_1.flowerModel({
                name: req.body.name,
                price: req.body.price,
                image: req.file?.filename,
                category: new mongoose_1.Types.ObjectId(category._id)
            }).save();
            console.log(category);
            category.flowers?.push(flower);
            await category.save();
            res.status(201).json({ msg: 'Created', data: flower, error: false });
        }
        catch (error) {
            res.status(500).json({ msg: error.message, data: null, error: true });
        }
    }
}
exports.flowerController = new FlowerController();
