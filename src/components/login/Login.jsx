// Login.js

import React, { useState } from 'react';
import './Login.css';
import menImage from '../../images/men.jpg';
import mail from '../../images/gmail.png';
import pass from '../../images/password.png';
import { FcGoogle } from 'react-icons/fc';
import { FaLinkedin } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // send data to backend for authentication
  };

  const handleGoogleLogin = () => {
    // implement Google OAuth 2.0 authentication here
  };

  const handleLinkedInLogin = () => {
    // implement LinkedIn OAuth 2.0 authentication here
  };

  const handleForgotPassword = () => {
    // implement the forgot password feature here
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-content">
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
             <div className='but'>
                <button type="submit">Sign in</button>
             </div>
            
          </form>

          {/*<h4>Or sign in with your</h4>
          
           <div className="social-buttons">
            <button type="button" onClick={handleGoogleLogin}>
              <FcGoogle />
            </button>
            <button type="button" onClick={handleLinkedInLogin}>
              <FaLinkedin />
            </button>
          </div> */}
          
        </div>
        <div className="login-image">
          <div className="image-overlay">
            <img src={menImage} alt="Login" className='login-image' />
            <div className="image-captions">
               <p className="image-caption welcome-back"><h3>Welcome Back!</h3></p>
            </div>
            <div className='image-sub'> 
               <p className="image-caption sub-heading"><h6>Simplify Internship Management for Students and Businesses : Connect to Success.</h6></p>
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
