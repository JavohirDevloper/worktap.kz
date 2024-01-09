import { NextFunction, Request, Response } from "express";
import { jwtToken } from "../../utils/jwt";

interface IUserToken {
  username: string;
  isAdmin: boolean;
}

class TokenCheaker {
  async checkToken(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers["authorization"];
      if (!token) {
        res.status(401).json({ msg: "no token", data: null, error: true });
        return;
      }

      const user = jwtToken.verify(token) as IUserToken;
      req.user = user;
      next();
    } catch (error: any) {
      res.status(500).json({ msg: error.message, data: null, error: true });
    }
  }
}

export const tokenCheker = new TokenCheaker();
