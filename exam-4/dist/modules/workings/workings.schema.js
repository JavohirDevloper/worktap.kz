"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workingSchema = void 0;
const mongoose_1 = require("mongoose");
exports.workingSchema = new mongoose_1.Schema({
    name: String,
    price: Number,
    image: String,
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: "category" },
});
