import React from 'react';
import './common.css';
import './Signup.css';

const Signup: React.FC = () => {
    return (
        <div className="signup-container">
            <div className="header-container">
                <span className="app-logo">🎹pianoda</span>
                <a href="/previous-page" className="back-link">← Go back</a>
            </div>
            <h1>Create account</h1>
            <p>Welcome</p>
            <div className="social-login-buttons">
                <button className="social-button google-button">
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Icon" />
                    Sign up with Google
                </button>
            </div>

            <div className="divider">or</div>

            <form className="signup-form">
                <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input type="email" id="email" placeholder="Enter your email" required aria-required="true"/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password*</label>
                    <input type="password" id="password" placeholder="Create a password" required aria-required="true"/>
                </div>

                <button type="submit" className="submit-button">Sign Up</button>
            </form>

            <p className="login-link">
                Already have an account? <a href="/login">Login</a>
            </p>
        </div>
    );
};

export default Signup;
