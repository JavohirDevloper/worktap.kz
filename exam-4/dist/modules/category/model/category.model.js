"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryModel = void 0;
const category_chema_1 = require("../schema/category.chema");
const mongoose_1 = require("mongoose");
exports.categoryModel = (0, mongoose_1.model)("category", category_chema_1.categorySchema);
