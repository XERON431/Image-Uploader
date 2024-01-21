import express from "express";
import formidable from "express-formidable"
const router = express.Router();
//middleware
 import { isInstructor, requireSignin } from "../middlewares/index.js";

import {uploadImage, create, read, uploadVideo, addLesson, update, removeLesson, updateLesson ,publish ,unpublish, courses } from '../controllers/course.js';
// import {removeImage}  from '../controllers/course.js';
router.get('/courses',courses);
//image
router.post("/course/upload-image",uploadImage );
// router.post("/course/remove-image",removeImage );

//course
router.post("/course", requireSignin, isInstructor, create);
router.put("/course/:slug", requireSignin, update);
router.get("/course/:slug", read);
router.post("/course/video-upload/:instructorId", requireSignin, formidable(), uploadVideo);
router.put("/course/publish/:courseId", requireSignin,publish);
router.put("/course/unpublish/:courseId", requireSignin,unpublish);
router.post("/course/lesson/:slug/:instructorId", requireSignin, addLesson);
router.put("/course/lesson/:slug/:instructorId", requireSignin, updateLesson);
router.put("/course/:slug/:lessonId", requireSignin, removeLesson);

export default router;
 