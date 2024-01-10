import express from "express";
const router = express.Router();
//middleware
 import { requireSignin } from "../middlewares/index.js";

import {uploadImage} from '../controllers/course.js';
// import {removeImage} from '../controllers/course.js';


router.post("/course/upload-image",uploadImage );
// router.post("/course/remove-image",removeImage );
export default router;
