import AWS from "aws-sdk"
import { nanoid } from "nanoid";
import Image from "../models/image.js";
import slugify from "slugify";
import {readFileSync} from'fs' 
import dotenv from 'dotenv';
// import { useRouter } from 'next/router';
import User from "../models/user.js";
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

export const create = async (req, res) => {
    // console.log(req.body.name.toLowerCase());
    // return;
    try {
        const alreadyExist = await Image.findOne({
            slug: slugify(req.body.name.toLowerCase()),
        });
        if(alreadyExist) return res.status(400).send("Title is taken");
        console.log(req.auth._id);
        const image = await new Image({
            slug: slugify(req.body.name),
            creator: req.auth._id,
            ...req.body,
        }).save();
        
        res.json(image);
    } catch(err) {
        console.log(err); 
        return res.status(400).send("Image create failed. Try again!")
    }
}

export const read = async (req, res) => {
    try{
        const image = await Image.findOne({ slug: req.params.slug})
        .populate("creator", "_id name")
        .exec();
        res.json(image);
    } catch (err) {
        console.log(err);
    }
}



export const update = async (req, res) =>{
    try{
        const { slug } = req.params;
        const image = await Image.findOne({ slug }).exec();
        if(req.auth._id != image.creator){
            return res.status(400).send("Unauthorized");
        } 
        const updated = await Image.findOneAndUpdate({ slug }, req.body, {
            new: true,
        }).exec();
        res.json(updated);
    } catch(err){
        console.log(err);
        return res.status(400).send(err.message);
    }
} 

export const publish = async (req, res) => {

    try {
        console.log("Incoming request:", req.body);
        const { imageId } = req.params;

        const image = await Image.findById(imageId).select('creator').exec();

        if (image.creator._id != req.auth._id) {
            return res.status(400).send("unauthorized");
        }

        const updated = await Image.findByIdAndUpdate(
            imageId,
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
      const { imageId } = req.params;
      const image = await Image.findById(imageId).select('creator').exec();
   
      if (image.creator._id != req.auth._id) {
        return res.status(400).send('Unauthorized');
      }
   
      const updated = await Image.findByIdAndUpdate(imageId, { published: false }, { new: true }).exec();
   
      return res.status(200).json(updated);
    } catch (err) {
      console.log(err);
      return res.status(400).send('Unpublish image failed');
    }
  };

  export const images =async(req,res)=>
  {
    const all = await Image.find({published:true}).populate().exec();
   return  res.json(all);

  }

  export const checkEnrollment=async (req,res)=>
  {
    try
    {
        console.log("hello ji");
      const {imageId}=req.params;
      const user= await User.findById(req.auth._id).exec();
      let ids=[];
      let length=user.images && user.images.length;
      if(user.images){
      for(let i=0;i<user.images.length;i++)
      {
        ids.push(user.images[i].toString())
      }
      }
      res.json({
        status:ids.includes(imageId),
        image:await Image.findById(imageId).exec()
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
    
  const image=await Image.findById(req.params.imageId).exec();
  const result=await User.findByIdAndUpdate(req.auth._id,
    {
      $addToSet:{images:image._id},
    },{new:true}).exec();
    
    res.json({message:"Congratulations! You have successfully saved an image",
      image})
  }catch(err)
  {
    console.log(err);
    return res.status(400).send("save failed");
  }
}




export const userImages=async(req,res)=>
{
  try
  {
    const user=await User.findById(req.auth._id).exec();
    const images=await Image.find({_id:{$in:user.images}})
    .populate("creator","_id name").exec();
    res.json(images);
  }catch(err)
  {
    console.log(err);
  }
}
