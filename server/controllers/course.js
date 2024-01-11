import AWS from "aws-sdk"
import { nanoid } from "nanoid";
import Course from "../models/course.js";
import slugify from "slugify";
import dotenv from 'dotenv';
// import { useRouter } from 'next/router';
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