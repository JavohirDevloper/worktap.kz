"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenCheker = void 0;
const jwt_1 = require("../../../utils/jwt");
class TokenCheaker {
    async checkToken(req, res, next) {
        try {
            const token = req.headers['authorization'];
            if (!token) {
                res.status(401).json({ msg: 'no token', data: null, error: true });
                return;
            }
            const user = jwt_1.jwtToken.verify(token);
            req.user = user;
            next();
        }
        catch (error) {
            res.status(500).json({ msg: error.message, data: null, error: true });
        }
    }
}
exports.tokenCheker = new TokenCheaker();
