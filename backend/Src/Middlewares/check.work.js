import jwt from "jsonwebtoken";
import "dotenv/config";

export async function WorkCheck(
  req,
  res,
  next
) {
  try {
    let { work_type, work_price} = req.body;

    /*==================================================> ACCESS TOKENNI TEKSHIRISH <=============================================== */

    const SECRET_KEY = process.env.SECRET_KEY;
    const { access_token } = req.headers;
    const payload = jwt.verify(access_token, SECRET_KEY);

    if (!payload) {
      return res.status(405).json({ data: "ruxsat yo'q" });
    }

    /*==================================================> MALUMOTLAR TOLIQ EKANLIGINI TEKSHIRISH <=============================================== */

    if (!work_type || !work_price) {
      return res
        .status(400)
        .json({ data: "ma'lumotlar to'liq kiritilmagan", status: 400 });
    }

    return next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ error: "invalide token" });
    }
    res.status(500).json({ data: "internal server error", status: 500 });
  }
}
