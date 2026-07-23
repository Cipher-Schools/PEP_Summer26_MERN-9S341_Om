import { Router } from "express";
import { getCourses } from "../controllers/courseController.js";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorize.js";
import { addCourse } from "../controllers/courseController.js";

const router = Router();

router.get('/get-courses', getCourses);

// router.get('/myCourses', myCourses);

router.post('/add-course',authenticate, authorize('instructor'), addCourse);

export default router;