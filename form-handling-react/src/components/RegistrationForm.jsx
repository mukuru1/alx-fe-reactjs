import React, { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!username) newErrors.username = 'Username is required.';
        if (!email) newErrors.email = 'Email is required.';
        if (!password) newErrors.password = 'Password is required.';
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});

        fetch('https://your-api-endpoint', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Registration successful:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
            </div>
            <div>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
