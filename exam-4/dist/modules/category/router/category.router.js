"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = require("express");
const category_controller_js_1 = require("../controller/category.controller.js");
exports.categoryRouter = (0, express_1.Router)();
exports.categoryRouter.get('/category', category_controller_js_1.categoryController.getCategory);
exports.categoryRouter.post("/category", category_controller_js_1.categoryController.createCategory);
exports.categoryRouter.delete("/categories/:id", category_controller_js_1.categoryController.deleteCategory);
exports.categoryRouter.put("/categories/:id", category_controller_js_1.categoryController.updateCategory);
