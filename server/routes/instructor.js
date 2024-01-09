import express from "express";
const router = express.Router();
//middleware
 import { requireSignin } from "../middlewares/index.js";

import { makeInstructor, getAccountStatus, currentInstructor} from '../controllers/instructor.js';



router.post("/make-instructor", requireSignin, makeInstructor);
router.post('get-account-status', requireSignin, getAccountStatus);
router.get("/current-instructor", requireSignin, currentInstructor);
export default router;
