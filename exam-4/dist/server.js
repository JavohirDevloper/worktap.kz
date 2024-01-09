"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const db_connection_js_1 = require("./utils/db.connection.js");
const mongoose_1 = require("mongoose");
const category_router_js_1 = require("./modules/category/category.router.js");
const workings_router_js_1 = require("./modules/workings/workings.router.js");
const auth_router_js_1 = require("./modules/auth/auth.router.js");
async function starter() {
    try {
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        await (0, db_connection_js_1.dbConnections)();
        // Router
        app.use(auth_router_js_1.authRouter);
        app.use(category_router_js_1.categoryRouter);
        app.use(workings_router_js_1.workRouter);
        await (0, mongoose_1.connect)("mongodb://127.0.0.1:27017/test");
        console.log("db connect");
        const port = process.env.PORT || 4000;
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
        });
    }
    catch (error) {
        console.error(error);
        process.exit(-1);
    }
}
starter();
