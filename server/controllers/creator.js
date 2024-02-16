import User from "../models/user.js";
import Image from "../models/image.js";
import dotenv from 'dotenv';


dotenv.config();



export const currentCreator = async (req,res) => {
    try{
        let user = await User.findById(req.auth._id).select("-password").exec();
            console.log("good here")
            res.json({ ok: true});
    } catch (err) {
        console.log("woah error was hhere")
        console.log(err);
    }
};

export const creatorImages = async (req, res) => {
   
    try{
        const images = await Image.find({ creator: req.auth._id})
        .sort({ createdAt: -1})
        .exec();
        res.json(images);
    } catch(err) {
        console.log(err);
    }
}
