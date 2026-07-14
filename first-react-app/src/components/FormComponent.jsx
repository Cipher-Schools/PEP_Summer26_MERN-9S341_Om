import { useEffect, useState } from "react";

function StudentData() {

    const [name, setName] = useState('');
    const [regId, setRegId] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState();
    const [city, setCity] = useState('');
    const [designation , setDesignation] = useState('');

    // const [showData, setShowData] = useState(false);
    // const [studentDetails, setStudentDetails] = useState();
    const [studentsDetails, setStudentsDetails] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('studentsss-data');
        if (data) {
            setStudentsDetails(JSON.parse(data));
        }
    }, [])
    

    function students() {
        const newStudent = {
            name,
            regId,
            email,
            age,
            city,
            designation
        }

        const allStudentsData = [...studentsDetails, newStudent ];

        localStorage.setItem('studentsss-data', JSON.stringify(allStudentsData));

        setStudentsDetails(allStudentsData);
        setName('');
        setEmail('');
        setAge(0);
        setCity('');
        setDesignation('');
        setRegId('');
    }

    // function student() {
    //     const studentData = {
    //         name,
    //         regId,
    //         email,
    //         age,
    //         city,
    //         designation
    //     }

    //     setStudentDetails(studentData);

    //     setName('');
    //     setEmail('');
    //     setAge(0);
    //     setCity('');
    //     setDesignation('');
    //     setRegId('');

    // }

    return (
        <div>
            <p>Student Form</p>
            <input type="text" placeholder="Enter your Name" value={name} 
                onChange={e => setName(e.target.value)}
             />
            <input type="text" placeholder="Registration Id" value={regId} 
            onChange={e => setRegId(e.target.value)}
            />
            <input type="email" name="" id="" placeholder="Email" value={email} required
            onChange={e => setEmail(e.target.value)}
            />
            <input type="number" name="age" id="" placeholder="Age" value={age}
            onChange={e => setAge(e.target.value)}
            />
            <input type="text" name="" id="" placeholder="City Name" value={city}
            onChange={e => setCity(e.target.value)}
            />
            <select name="" id=""
            onChange={e => setDesignation(e.target.value)} value={designation}
            >
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
                <option value="scholar">Scholar</option>
            </select>
            {/* <button onClick={() => setShowData(true)}>Add Details</button> */}
            <button onClick={students}>Add Details</button>


            {/* {studentDetails && (
                <div>
                    <h2>Show Student Details</h2>
                    <p>Name: {studentDetails.name}</p>
                    <p>RegId: {studentDetails.regId}</p>
                    <p>Email: {studentDetails.email}</p>
                    <p>Age: {studentDetails.age}</p>
                    <p>City: {studentDetails.city}</p>
                    <p>Designation: {studentDetails.designation}</p>
                </div>
            )} */}
             <h2>Show Student Details</h2>
             {studentsDetails && studentsDetails.map((student, index )=> (
                <div key={index}>
                    <p>Name: {student.name}</p>
                    <p>RegId: {student.regId}</p>
                    <p>Email: {student.email}</p>
                    <p>Age: {student.age}</p>
                    <p>City: {student.city}</p>
                    <p>Designation: {student.designation}</p>
                </div>
             ))}
        </div>
    )
}

export default StudentData;