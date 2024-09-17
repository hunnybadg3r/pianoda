import React from 'react';
import './common.css';
import './Login.css';

const Login: React.FC = () => {
    return (
        <div className="login-container">
            <div className="header-container">
                <span className="app-logo">🎹pianoda</span>
                <a href="/previous-page" className="back-link">← Go back</a>
            </div>
            <h1>Login</h1>
            <p>Welcome back!</p>
            <div className="social-login-buttons">
                <button className="social-button google-button">
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Icon" />
                    Sign in with Google
                </button>
            </div>

            <div className="divider">or</div>

            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" required aria-required="true"/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required aria-required="true"/>
                </div>
               
                <div className="forgot-password-container">
                    <a href="#" className="forgot-password">Forgot password?</a>
                </div>

                <button type="submit" className="submit-button">Sign In</button>
            </form>

            <p className="login-link">
                Don't have an account? <a href="/signup">Create Account</a>
            </p>
        </div>
    );
};

export default Login;