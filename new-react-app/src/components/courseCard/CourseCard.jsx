import './courseCard.css';

function CourseCard(props) {

    return (
        <div className='card'>
            <img src={props.image} alt="Course Image" />
            <div>
                <h5>{props.title}</h5>
                <p>Instructor Name: {props.instructor}</p>
                <p>Price: {props.price}</p>
            </div>
        </div>
    )
}

export default CourseCard;