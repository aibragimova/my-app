import React, { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const [submitted, setSabmitted] = useState('');

    const validate = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = 'Email abligotory';
        } else if (!/\S+@\S+\.S+/.test(email)) {
            newErrors.email = 'Non correct email';
        }
        if (!password) {
            newErrors.password = 'password abligotory';
        } else if (password.length < 6) {
            newErrors.password = 'Password shoud contain more than 6 symbols';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setSabmitted(true);
        }
        else {
            setSabmitted(false);
        }
    };

    return (
        <div>
            <h2>New Form Login</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label>Email:</label>
                    <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <div style={{ color: 'red' }}> {errors.email}</div>}

                </div>
                <div>
                    <label>Password:</label>
                    <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <div style={{ color: 'red' }}> {errors.password}</div>}
                </div>
                <button type="submit">Login</button>

            </form>
        </div>
    )
}

export default LoginForm;