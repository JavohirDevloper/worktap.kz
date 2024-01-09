"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flowerRouter = void 0;
const express_1 = require("express");
const flower_controller_js_1 = require("../controller/flower.controller.js");
const token_middleware_js_1 = require("../../auth/middleware/token.middleware.js");
const multer_config_js_1 = require("../../../utils/multer.config.js");
exports.flowerRouter = (0, express_1.Router)();
exports.flowerRouter.get('/flowers', flower_controller_js_1.flowerController.getFlowers);
exports.flowerRouter.post("/flowers/:id", token_middleware_js_1.tokenCheker.checkToken, multer_config_js_1.upload.single('image'), flower_controller_js_1.flowerController.createFlower);