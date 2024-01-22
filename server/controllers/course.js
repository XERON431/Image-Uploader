import AWS from "aws-sdk"
import { nanoid } from "nanoid";
import Course from "../models/course.js";
import slugify from "slugify";
import {readFileSync} from'fs' 
import dotenv from 'dotenv';
// import { useRouter } from 'next/router';
import User from "../models/user.js";
import Completed from "../models/completed.js";
import course from "../models/course.js";
dotenv.config();

const awsConfig = {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    apiVersion: process.env.AWS_API_VERSION,
};

const S3 = new AWS.S3(awsConfig);


export const uploadImage = async (req, res) => {
    try{
        const { image } = req.body;
        if(!image) return res.status(400).send("No image");

        //prepare the image
        const base64Data = new Buffer.from(
            image.replace(/^data.image\/\w+;base64,/, ""),
            "base64"
        );
        const type = image.split(",")[0].split("/")[1];

        const params = {
            Bucket: "edemy-bucket-siddhant",
            Key: `${nanoid()}.${type}`,
            Body: base64Data,
            ACL: "public-read",
            ContentEncoding: "base64",
            ContentType: `image/${type}`,
        };

        // upload to S3
        S3.upload(params, (err, data) => {
            if(err){
                console.log(err);
                return res.sendStatus(400);
            }
            console.log(data);
            res.send(data);
        });
    } catch (err) {
        console.log(err);
    }
}

// export const removeImage = async (req,res) =>{
//     try {
//         const { image } = req.body;
//         const params = {
//             Bucket: image.Bucket,
//             Key: image.Key,
//         };

//         S3.deleteObject(params, (err, data) => {
//             if(err){
//                 console.log(err);
//                 res.sendStatus(400);
//             }
//             res.send({ ok: true });
//         });
//     } catch (err) {
//         console.log(err);
//     }
// }

export const create = async (req, res) => {
    // console.log(req.body.name.toLowerCase());
    // return;
    try {
        const alreadyExist = await Course.findOne({
            slug: slugify(req.body.name.toLowerCase()),
        });
        if(alreadyExist) return res.status(400).send("Title is taken");
        
        const course = await new Course({
            slug: slugify(req.body.name),
            instructor: req.auth._id,
            ...req.body,
        }).save();
        // console.log("abhi tak theek hai bhai ")
        res.json(course);
    } catch(err) {
        console.log(err); 
        return res.status(400).send("Course create failed. Try again!")
    }
}

export const read = async (req, res) => {
    try{
        const course = await Course.findOne({ slug: req.params.slug})
        .populate("instructor", "_id name")
        .exec();
        res.json(course);
    } catch (err) {
        console.log(err);
    }
}

export const uploadVideo = async (req,res) => {
    try{
        if(req.auth._id != req.params.instructorId)
        {
            return res.status(400).send("Unauthorized");
        }
        const { video } = req.files;
        if(!video) return res.status(400).send("No Video");
        const params = {
            Bucket: "edemy-bucket-siddhant",
            Key: `${nanoid()}.${video.type.split("/")[1]}`,
            Body: readFileSync(video.path),
            ACL: "public-read",
            ContentType: video.type,
        };

        //upload to s3
        S3.upload(params, (err, data) => {
            if(err){
                console.log(err);
                res.sendStatus(400);
            }
            console.log(data);
            res.send(data);
        })
    } catch (err) {
        console.loog(err);
    }
};

export const addLesson = async (req, res) => {
    try{
        const { slug, instructorId } = req.params;
        const { title, content, video } = req.body;
        if(req.auth._id != instructorId){
            return res.status(400).send("Unauthorized");
        }
        const updated  = await Course.findOneAndUpdate(
            { slug },
            {
                $push: { lessons: { title, content, video, slug: slugify(title)}},
            },
            {
                new : true
            }
        )
        .populate("instructor", "_id name")
        .exec();
        res.json(updated);
    } catch(err){
        console.log(err);
        return res.status(400).send("Add lesson failed");
    }
}
export const update = async (req, res) =>{
    try{
        const { slug } = req.params;
        const course = await Course.findOne({ slug }).exec();
        if(req.auth._id != course.instructor){
            return res.status(400).send("Unauthorized");
        } 
        const updated = await Course.findOneAndUpdate({ slug }, req.body, {
            new: true,
        }).exec();
        // console.log(updated);
        res.json(updated);
    } catch(err){
        console.log(err);
        return res.status(400).send(err.message);
    }
} 

export const removeLesson = async (req, res) => {
    const { slug, lessonId } = req.params;
    const course = await Course.findOne({ slug }).exec();
    if(req.auth._id != course.instructor){
        return res.status(400).send("Unauthorized");
    }  
    const deletedCourse = await Course.findByIdAndUpdate(course._id, {
        $pull: { lessons: {_id: lessonId}}, 
    }).exec();
    res.json({ ok: true});
}
export const updateLesson = async(req, res) => {
    try {
        const { slug } = req.params;
     const { _id, title, content, video, free_preview } = req.body;
    const course = await Course.findOne({ slug }).select("instructor").exec();
    if(course.instructor._id != req.auth._id){
        return res.status(400).send("Unauthorised");
    }
    const updated = await Course.updateOne(
        {"lessons._id": _id},
        {
            $set: {
                "lessons.$.title": title,
                "lessons.$.content": content,
                "lessons.$.video":video,
                "lessons.$.free_preview": free_preview,
            },
        },
        {new : true}
    ).exec();

    res.json({ ok:true });
    } catch(err){
        console.log(err);
        return res.status(400).send("Update lesson failed");
    }
}

export const publish = async (req, res) => {

    try {
        console.log("Incoming request:", req.body);
        const { courseId } = req.params;

        const course = await Course.findById(courseId).select('instructor').exec();

        if (course.instructor._id != req.auth._id) {
            return res.status(400).send("unauthorized");
        }

        const updated = await Course.findByIdAndUpdate(
            courseId,
            { published: true },
            { new: true }
        ).exec();

        return res.status(200).json(updated);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send("publish-fails");
    }
}


export const unpublish = async (req, res) => {
    try {
      const { courseId } = req.params;
      const course = await Course.findById(courseId).select('instructor').exec();
   
      if (course.instructor._id != req.auth._id) {
        return res.status(400).send('Unauthorized');
      }
   
      const updated = await Course.findByIdAndUpdate(courseId, { published: false }, { new: true }).exec();
   
      return res.status(200).json(updated);
    } catch (err) {
      console.log(err);
      return res.status(400).send('Unpublish course failed');
    }
  };

  export const courses =async(req,res)=>
  {
    const all =await Course.find({published:true}).populate().exec();
   return  res.json(all);

  }

  export const checkEnrollment=async (req,res)=>
  {
    try
    {
        console.log("hello ji");
      const {courseId}=req.params;
      const user= await User.findById(req.auth._id).exec();
      let ids=[];
      let length=user.courses && user.courses.length;
      if(user.courses){
      for(let i=0;i<user.courses.length;i++)
      {
        ids.push(user.courses[i].toString())
      }
      }
      res.json({
        status:ids.includes(courseId),
        course:await Course.findById(courseId).exec()
      })
    }catch(err)
    {
      console.log("bro");
    }
  }

  export const freeEnrollment=async(req,res)=>
{
  try
  {
    console.log("hello from free enrollment")
  const course=await Course.findById(req.params.courseId).exec();
  // console.log("Here====="+course._id);

  if(course.price!=0) return;
  const result=await User.findByIdAndUpdate(req.auth._id,
    {
      $addToSet:{courses:course._id},
    },{new:true}).exec();
    res.json({message:"Congratulations! You have successfully enrolled",
      course,})
  }catch(err)
  {
    console.log(err);
    return res.status(400).send("Enrollment failed");
  }
}

export const paidEnrollment=async(req,res)=>
{
  try
  {
  const course=await Course.findById(req.params.courseId).exec();
  // console.log("Here====="+course._id);

  if(course.free) return;
  const result=await User.findByIdAndUpdate(req.auth._id,
    {
      $addToSet:{courses:course._id},
    },{new:true}).exec();
    res.json({message:"Congratulations! You have successfully enrolled",
      course,})
  }catch(err)
  {
    console.log(err);
    return res.status(400).send("Enrollment failed");
  }
}


export const userCourses=async(req,res)=>
{
  try
  {
    const user=await User.findById(req.auth._id).exec();
    // console.log("fdfdfdf"+user);
    const courses=await Course.find({_id:{$in:user.courses}})
    .populate("instructor","_id name").exec();
    // console.log(courses);
    res.json(courses);
  }catch(err)
  {
    console.log(err);
  }
}

export const markCompleted = async (req,res) => {
    const { courseId, lessonId} = req.body;
    // console.log(courseId, lessonId);
    const existing = await Completed.findOne({
        user: req.auth._id,
        course: courseId,
    }).exec();
    if(existing)
    {
        const updated = await Completed.findOneAndUpdate(
            {
                user: req.auth._id,
                course: courseId,
            },
            {
                $addToSet: { lessons: lessonId}
            }
        ).exec();
        res.json({ ok: true});
    } else {
        const created = await new Completed({
            user: req.auth._id,
            course: courseId,
            lessons: lessonId,
        }).save();
        res.json({ ok:true});
    }
}

export const listCompleted = async (req,res) => {
    try{
        const list = await Completed.findOne({
            user: req.auth._id,
            course: req.body.courseId,
        }).exec();
        list && res.json(list.lessons);
    } catch (err){
        console.log(err);
    }
}