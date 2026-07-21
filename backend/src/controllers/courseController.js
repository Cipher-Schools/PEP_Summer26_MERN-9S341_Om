import fs from 'fs/promises';
import { coursePath } from '../index.js';

export const courses = async (req, res) => {

    try {
        const courses = JSON.parse( await fs.readFile(coursePath, 'utf-8'));

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