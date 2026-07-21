import { Router } from "express";
import { courses } from "../controllers/courseController.js";

const router = Router();

router.get('/', courses);

export default router;