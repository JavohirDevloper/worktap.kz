"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_controller_js_1 = require("./auth.controller.js");
const authController = new auth_controller_js_1.AuthController();
exports.authRouter = (0, express_1.Router)();
exports.authRouter.post("/login", authController.login);
exports.authRouter.post("/register", authController.register);
