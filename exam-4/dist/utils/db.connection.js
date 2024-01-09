"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnections = void 0;
const mongoose_1 = require("mongoose");
async function dbConnections() {
    try {
        await (0, mongoose_1.connect)("mongodb://127.0.0.1:27017/test");
        console.log("db is connected succsessfully");
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}
exports.dbConnections = dbConnections;
