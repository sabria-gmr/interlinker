import React, { useState } from 'react';
import menImage from '../../images/men.jpg';
import mail from '../../images/gmail.png';
import logo from '../../images/conduite.png';
import pass from '../../images/password.png';
import { Link } from 'react-router-dom';

import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Send data to backend for authentication
    // ...

    // If all validations pass, you can proceed with form submission
    alert('Form submitted successfully');
  };

  const handleForgotPassword = () => {
    // Implement the forgot password feature here
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-content">
          <div>
            <img src={logo} alt="Login" className="logo-img" />
          </div>
          <h2>Sign in to InterLinker</h2>

          <form onSubmit={handleSubmit}>
            <div className="inputs">
              <div className="input">
                <img src={mail} alt="" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}

                />
              </div>
            </div>

            <div className="inputs">
              <div className="input">
                <img src={pass} alt="" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="remeber">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember Me
              <div className="forgot-password">
                <a href="#" onClick={handleForgotPassword}>
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="but-login">
              <button type="submit" className='button-login'>Sign in</button>
            </div>
          </form>
        </div>
        <div className="login-image">
          <div className="image-overlay">
            <img src={menImage} alt="Login" className='login-image' />
            <div className="image-captions">
              <h3 className="image-caption welcome-back" > <p> Welcome Back!</p></h3>
            </div>
            <div className='image-sub'>
              <h6 className="image-caption sub-heading"> <p>Simplify Internship Management for Students and Businesses : Connect to Success.</p></h6>
            </div>
            <div className='image-but'>
              <button type="submit" className="signin-button"><Link to='/signup'>Sign up</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
