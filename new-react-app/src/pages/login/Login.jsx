import { useState } from "react";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (
        
    ) => {}

    return (
        <div>
            <h3>Login</h3>
            <input 
                type="email" 
                placeholder="Enter email" 
                onChange={e => setEmail(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="Enter password" 
                onChange={e => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;