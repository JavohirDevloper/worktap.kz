import jwt from "jsonwebtoken";

class JsonWebToken {
  sign(paylod: string | object): string {
    return jwt.sign(paylod, process.env.JWT_SECRET as string);
  }
  verify(token: string) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET as string);
    } catch (error: any) {
      return null;
    }
  }
}

export const jwtToken = new JsonWebToken();
