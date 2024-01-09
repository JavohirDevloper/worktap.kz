"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JsonWebToken {
    sign(paylod) {
        return jsonwebtoken_1.default.sign(paylod, process.env.JWT_SECRET);
    }
    verify(token) {
        try {
            return jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        }
        catch (error) {
            return null;
        }
    }
}
exports.jwtToken = new JsonWebToken();
