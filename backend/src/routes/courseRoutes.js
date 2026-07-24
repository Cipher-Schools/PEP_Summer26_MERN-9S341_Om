import { Router } from "express";
import { getCourses } from "../controllers/courseController.js";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorize.js";
import { addCourse } from "../controllers/courseController.js";
import { myCourses } from "../controllers/courseController.js";
import { enrollCourse } from "../controllers/courseController.js";

const router = Router();

router.get('/get-courses', getCourses);

router.post('/add-course',authenticate, authorize('instructor'), addCourse);

router.post('/enroll-course', authenticate, authorize('student'), enrollCourse);

router.get('/my-courses',authenticate, authorize('student', 'instructor'), myCourses);




export default router;
