"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkModel = void 0;
const mongoose_1 = require("mongoose");
const workings_schema_js_1 = require("../schemas/workings.schema.js");
exports.WorkModel = (0, mongoose_1.model)("working", workings_schema_js_1.workingSchema);
