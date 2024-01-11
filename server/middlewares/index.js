import { expressjwt} from "express-jwt";
import User from "../models/user.js";

const JWT_SECRET = "JUMANDASJHDVKJSDBCKJBDCKJBKJDBC";

export const requireSignin = expressjwt({
  getToken: (req, res) => req.cookies.token,
  secret: JWT_SECRET,
  algorithms: ["HS256"],
});

export const isInstructor = async (req, res, next) => {
  try{
    const user = await User.findById(req.auth._id).exec();
    if(!user.role.includes("Instructor"))
    {
      return res.sendStatus(403);
    }
    else
    { 
      next(); 
    }
  } catch(err){
    console.log(err);
  }
}