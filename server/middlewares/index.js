import { expressjwt} from "express-jwt";
import User from "../models/user.js";
import Course from "../models/course.js";
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

export const isEnrolled=async (req,res,next)=>
  {
    try{
      const user=await User.findById(req.auth._id).exec();
      const course=await Course.findOne({slug:req.params.slug}).exec();

      let ids=[];
      for(let i=0;i<user.courses.length;i++)
      {
        ids.push(user.courses[i].toString())
      }
      // console.log(ids);
      // console.log(course._id);
      if(!ids.includes(course._id.toString()))
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