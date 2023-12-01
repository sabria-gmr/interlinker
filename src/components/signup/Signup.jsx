// Signup.js

import React, { useState } from 'react';
import './Signup.css'; // Make sure to create this CSS file
import menImage from '../../images/men.jpg';
import mail from '../../images/gmail.png';
import pass from '../../images/password.png';
import person from '../../images/person.png'
import { FcGoogle } from 'react-icons/fc';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic for password match and other fields
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // send data to backend for user registration
  };

  const handleGoogleLogin = () => {
    // implement Google OAuth 2.0 authentication for signup here
  };

  const handleLinkedInLogin = () => {
    // implement LinkedIn OAuth 2.0 authentication for signup here
  };

 
  

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
      <div className="signup-image">
          <img src={menImage} alt="Signup" className="signup-image" />
          {/* Include your captions or other elements for the signup image section */}
        </div>
        <div className="signup-content">
          <h2>Sign up to InterLinker</h2>
          <div className="images-captions">
               <p className="images-caption welcome-to"><h3>Welcome To InterLinker</h3></p>
            </div>
            <div className='images-sub'>
               <p className="images-caption subs-heading"> <h6>Navigating  the  Student Journey, Connecting Opportunities, and Amplifying Student Engagement</h6></p>
            </div>
            <div className='images-but'>
  {/* Use Link component outside of the button */}
  <Link to='/'>
    <button type="submit" className="signin-button">Sign in</button>
  </Link>
</div>
            


          <form onSubmit={handleSubmit}>
          <div className="inputts">
              <div className="inputt">
                <img src={person} alt="" /> 
               <div className='custom-dropdown'>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                > 
                  <option value="" disabled hidden > Role</option>             
                  <option value="student">Student</option>
                  <option value="professor">Professor</option>
                  <option value="company">Company</option>
                </select>
                </div>
              </div>
            </div>
            <div className="inputts">
              <div className="inputt">
                <img src={mail} alt="" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="inputts">
              <div className="inputt">
                <img src={pass} alt="" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="inputts">
              <div className="inputt">
                <img src={pass} alt="" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

          

            <div className='but1'>
                <button type="submit">Sign up</button>
             </div>
          </form>

          {/* <h5>Or sign up with your</h5>
          <div className="social-buttons">
            <button type="button" onClick={handleGoogleLogin}>
              <FcGoogle />
            </button>
            <button type="button" onClick={handleLinkedInLogin}>
              <FaLinkedin />
            </button>
          </div> */}
        </div>
        
      </div>
    </div>
  );
};

export default Signup;