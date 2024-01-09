"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryModel = void 0;
const mongoose_1 = require("mongoose");
const category_chema_js_1 = require("../schemas/category.chema.js");
exports.categoryModel = (0, mongoose_1.model)("category", category_chema_js_1.categorySchema);
