// components/LoginForm.js

import { useState } from 'react';

const LoginForm = ({ onLogin }) => {
    const [role, setRole] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (role === 'student' || role === 'admin') {
            onLogin(role); // Trigger the onLogin function with the selected role
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-group">
            <div className="form-group">
                <label htmlFor="role" className="form-label">Login as:</label>
                <select
                    id="role"
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="form-select"
                >
                    <option value="">Select Role</option>
                    <option value="student">Student</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            <button
                type="submit"
                className="form-button"
            >
                Log in
            </button>
        </form>
    );
};

export default LoginForm;
