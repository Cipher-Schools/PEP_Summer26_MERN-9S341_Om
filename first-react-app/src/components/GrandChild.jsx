import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";

function GrandChild() {

    const {name, setName} = useContext(UserContext);
    const [user, setUser] = useState('');

    return (
        <div style={{border: '1px solid blue', padding: '20px'}}>
            <p>This is GrandChild component</p>
            <p>Goodmorning: {name}</p>

            <input type="text" placeholder="Enter User name" 
                onChange={e => setUser(e.target.value)}
            />
            <button onClick={() =>setName(user)}>Add Name</button>
        </div>
    )
}

export default GrandChild;