import { useContext } from "react";
import CourseCard from "../../components/courseCard/CourseCard";
import courses from "../../data/courses";
import './dashboard.css';
import { ThemeContext } from "../../context/ThemeContext";

function Dashboard() {

    const {theme} = useContext(ThemeContext);

    return (
        <div className={theme}>
            <h2>Dashboard</h2>
            <h3>Courses</h3>
            <div className='courseContainer'>
            {courses.map(course => (
                <div id={course.id}>
                    <CourseCard 
                        image={course.image}
                        title={course.title}
                        instructor={course.instructor}
                        price={course.price} 
                    />
                </div>
            ))}
            </div>
        </div>
    )
}

export default Dashboard;