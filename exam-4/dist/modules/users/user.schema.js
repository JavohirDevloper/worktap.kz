"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^([A-Za-z]|[A-Za-z]\d+)+$/.test(v);
            },
            message: (props) => `${props.value} is not a valid username!`,
        },
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});
