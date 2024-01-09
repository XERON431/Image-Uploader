import { expressjwt} from "express-jwt";

const JWT_SECRET = "JUMANDASJHDVKJSDBCKJBDCKJBKJDBC";

export const requireSignin = expressjwt({
  getToken: (req, res) => req.cookies.token,
  secret: JWT_SECRET,
  algorithms: ["HS256"],
});
