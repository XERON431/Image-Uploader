import { expressjwt} from "express-jwt";
import User from "../models/user.js";
import Image from "../models/image.js";
const JWT_SECRET = "JUMANDASJHDVKJSDBCKJBDCKJBKJDBC";

export const requireSignin = expressjwt({
  getToken: (req, res) => req.cookies.token,
  secret: JWT_SECRET,
  algorithms: ["HS256"],
});

export const isEnrolled=async (req,res,next)=>
  {
    try{
      const user=await User.findById(req.auth._id).exec();
      const image=await Image.findOne({slug:req.params.slug}).exec();

      let ids=[];
      for(let i=0;i<user.images.length;i++)
      {
        ids.push(user.images[i].toString())
      }
      // console.log(ids);
      // console.log(image._id);
      if(!ids.includes(image._id.toString()))
      {
        res.sendStatus(403);
      }
      else
      {
        next();
      }

    }catch(err)
    {
      console.log(err);
    }
  }