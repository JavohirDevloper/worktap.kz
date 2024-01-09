"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const user_model_js_1 = require("../../users/models/user.model.js");
const jwt_js_1 = require("../../../utils/jwt.js");
const mongoose_1 = require("mongoose");
class AuthController {
    async login(req, res) {
        try {
            const { username, password } = req.body;
            const user = await user_model_js_1.userModel.findOne({ username });
            if (!user || user.password != password) {
                res.status(404).json({ msg: "User is not found", data: null, error: true });
                return;
            }
            const TOKEN = jwt_js_1.jwtToken.sign({ username, isAdmin: user.isAdmin });
            res.status(200).json({ msg: "Ok", data: TOKEN, error: false });
        }
        catch (error) {
            res.status(500).json({ msg: error.message, data: null, error: true });
        }
    }
    async register(req, res) {
        try {
            const { username, password } = req.body;
            const user = await user_model_js_1.userModel.create({
                username,
                password
            });
            const TOKEN = jwt_js_1.jwtToken.sign({ username, isAdmin: false });
            res.status(201).json({ msg: 'CREATED', data: TOKEN, error: false });
        }
        catch (error) {
            if (error instanceof mongoose_1.mongo.MongoServerError) {
                res.status(409).json({ msg: error.message, data: null, error: true });
                return;
            }
            res.status(500).json({ msg: error.message, data: null, error: true });
        }
    }
}
exports.AuthController = AuthController;
