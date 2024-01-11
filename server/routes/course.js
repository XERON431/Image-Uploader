import express from "express";
const router = express.Router();
//middleware
 import { isInstructor, requireSignin } from "../middlewares/index.js";

import {uploadImage, create, read } from '../controllers/course.js';
// import {removeImage}  from '../controllers/course.js';

//image
router.post("/course/upload-image",uploadImage );
// router.post("/course/remove-image",removeImage );

//course
router.post("/course", requireSignin, isInstructor, create);
router.get("/course/:slug", read);
export default router;
