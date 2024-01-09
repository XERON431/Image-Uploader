
import User from "../models/user.js";
import { hashPassword, comparePassword} from "../utils/auth.js";
import jwt from 'jsonwebtoken';
import AWS from 'aws-sdk';
import {nanoid} from 'nanoid';
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = "JUMANDASJHDVKJSDBCKJBDCKJBKJDBC";



///aws


const awsConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  apiVersion: process.env.AWS_API_VERSION,
};


const SES =new AWS.SES(awsConfig);


export const register = async (req, res) => {
  try {
    // console.log(req.body);
    const { name, email, password } = req.body;
    // validation
    if (!name) return res.status(400).send("Name is required");
    if (!password || password.length < 6) {
      return res
        .status(400)
        .send("Password is required and should be min 6 characters long");
    }
    let userExist = await User.findOne({ email }).exec();
    if (userExist) return res.status(400).send("Email is taken");

    // hash password
    const hashedPassword = await hashPassword(password);

    // register
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    // console.log("saved user", user);
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }
};

export const login = async (req, res) => {
  try {
    // console.log(req.body);
    const { email, password } = req.body;
    // check if our db has user with that email
    const user = await User.findOne({ email }).exec();
    if (!user) return res.status(400).send("No user found");
    // check password
    const match = await comparePassword(password, user.password);
    // create signed jwt
    if(!match) return res.status(400).send("wrong password");
    const token = jwt.sign({ _id: user._id },JWT_SECRET, {
      expiresIn: "7d",
    });
    // return user and token to client, exclude hashed password
    user.password = undefined;
    // send token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      // secure: true, // only works on https
    });
    // send user as json response
    res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.json({ message: "Signout success" });
  } catch (err) {
    console.log(err);
  }
};

export const currentUser = async (req, res) => {
  try {
    const user = await User.findById(req.auth._id).select("-password").exec();
    console.log("CURRENT_USER", user);
    return res.json(user);
  } catch (err) {
    console.log(err);
  }
};

export const sendTestEmail = async (req, res) => {
  const params = {
    Source: 'siddhantgoyal.iitg@gmail.com',  
    Destination: {
      ToAddresses: ['sidiitguwahati@gmail.com']
    },
    ReplyToAddresses: ['siddhantgoyal.iitg@gmail.com'],
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `
            <html>
              <h1>Reset password link</h1>
              <p>Please use the following link to reset your password</p>
            </html>
          `,
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Password reset link',
      },
    },
  };

  try {
    const emailSent = await SES.sendEmail(params).promise();
    console.log(emailSent);
    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: 'Failed to send email' });
  }
};



export const forgotpassword =async(req,res)=>
{

  try{
    const {email}=req.body;
const shortCode =nanoid(6).toUpperCase();
const user =await User.findOneAndUpdate({email},{passwordResetCode:shortCode})
if(!user)
return res.status(400).send("user not found");


const params = {
  Source: 'siddhantgoyal.iitg@gmail.com',  
  Destination: {
    ToAddresses: [email]
  },
  Message: {
    Body: {
      Html: {
        Charset: 'UTF-8',
        Data: `
          <html>
            <h1>Reset password link</h1>
            <p>Please use the following link to reset your password</p>
            <h2>${shortCode}</h2>
          </html>
        `,
      }
    },
    Subject: {
      Charset: 'UTF-8',
      Data: 'Password reset link',
    },
  },
};


const emailSent=SES.sendEmail(params).promise();

emailSent
.then((data)=>{
console.log(data);
res.json({ok:true})
})

.catch((err)=>
{
console.log(err);
}
);
  
}

  catch(err)
{
console.log(err);
}




};



export const resetpassword=async(req,res)=>
{
   try{
        const{email,code,newpassword} = req.body;
       // console.log(email,newpassword)
      

       const hashedPassword=await hashPassword(newpassword);

       const user =User.findOneAndUpdate({
        email,
        passwordResetCode:code,
       },{password:hashedPassword,
        passwordResetCode:"",
      }).exec();

res.json({ok: true})


   }
   catch(err)
   {
    console.log(err);
    return res.status(400).send("error");
   }
  


}