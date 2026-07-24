import { useEffect, useState } from "react"
import CourseCard from "../../components/courseCard/CourseCard";

export const Home = () => {

    const [course, setCourse] = useState([]);

    useEffect(() => {

        const fetchCourses = () => {
            fetch('http://localhost:3000/course/get-courses')
            .then(res => res.json())
            .then(data => setCourse(data.courses)); 
        }

        fetchCourses();

    }, []);

    return (
        <div>
            <h3>Courses</h3>
            {course.length === 0 ? (
                <p>No course available</p>
            ) : (
                <div style={{ display: "flex"}}>
                    {
                        course.map(c => (
                            <div id={course.id} >
                                <CourseCard
                                    image={c.image}
                                    title={c.title}
                                    // instructor={course.instructor}
                                    price={c.price} 
                                />
                            </div>
                        ))
                    }
                </div>
            )}

        </div>
    )
}