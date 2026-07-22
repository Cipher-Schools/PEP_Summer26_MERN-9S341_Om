// import fs from 'fs/promises';
// import { coursePath } from '../index.js';
import Course from '../models/Course.js'

export const getCourses = async (req, res) => {

    try {
        // const courses = JSON.parse( await fs.readFile(coursePath, 'utf-8'));
        const courses = Course.find();

        if (!courses) {
            res.json({ message: "No available course right now"});
            return;
        }

        res.json({
            message: "Courses fetched",
            courses
        });
        return;

    } catch(err) {
        console.log('error: ', err);
        res.json({ message: 'Error while fetching courses, try again!'});
        return;
    }
}