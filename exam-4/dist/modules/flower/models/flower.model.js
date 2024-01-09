"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flowerModel = void 0;
const mongoose_1 = require("mongoose");
const flower_schema_js_1 = require("../schemas/flower.schema.js");
exports.flowerModel = (0, mongoose_1.model)('flower', flower_schema_js_1.flowerSchema);
