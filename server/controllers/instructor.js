import User from "../models/user.js";
import Course from "../models/course.js";
import queryString from "query-string";
import dotenv from 'dotenv';
import stripe from "stripe";

dotenv.config();

const stripeSecret = process.env.STRIPE_SECRET;
const stripeInstance = stripe(stripeSecret);

export const makeInstructor = async (req, res) => {
    try {
        const user = await User.findById(req.auth._id).exec();

        if (!user.stripe_account_id) {
            const account = await stripeInstance.accounts.create({ type: "standard" });
            user.stripe_account_id = account.id;
            await user.save();
        }

        let accountLink = await stripeInstance.accountLinks.create({
            account: user.stripe_account_id,
            refresh_url: process.env.STRIPE_REDIRECT_URL,
            return_url: process.env.STRIPE_REDIRECT_URL,
            type: "account_onboarding",
        });

        accountLink = Object.assign(accountLink, {
            "stripe_user[email]": user.email,
        });

        res.send(`${accountLink.url}?${queryString.stringify(accountLink)}`);
    } catch (err) {
        console.log('MAKE INSTRUCTOR ERR', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getAccountStatus = async (req, res) => {
    try{
        const user = await User.findById(req.auth._id).exec();
        const account = await stripe.accounts.retrieve(auth.stripe_account_id);
        if(!account.charges_enabled){
            return res.status(401).send("Unauthorized");
        }else{
            const statusUpdated = await User.findByIdAndUpdate(
                auth._id,
                {
                    stripe_seller: account,
                    $addToSet: { role: "Instructor"}, 
                },
                { new: true }
            ).select("-password").exec();
            res.json(statusUpdated);
        }
    } catch(err){
        console.log(err);
    }
};

export const currentInstructor = async (req,res) => {
    try{
        let user = await User.findById(req.auth._id).select("-password").exec();
        if(!user.role.includes("Instructor")){
            return res.sendStatus(403);
        }
        else{
            res.json({ ok: true});
        }
    } catch (err) {
        console.log(err);
    }
};

export const instructorCourses = async (req, res) => {
   
    try{
        const courses = await Course.find({ instructor: req.auth._id})
        .sort({ createdAt: -1})
        .exec();
        //  console.log("helloji")
        res.json(courses);
    } catch(err) {
        console.log(err);
    }
}
