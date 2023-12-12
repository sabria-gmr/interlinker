import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';
import menImage from '../../images/men.jpg';
import mail from '../../images/gmail.png';
import pass from '../../images/password.png';
import person from '../../images/person.png';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword || !role) {
      alert('Please fill in all fields');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    alert("Le mot de passe doit avoir au moins 8 caractères, incluant au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial parmi @$!%*?&.");
    return;
  }

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    switch (role) {
      case 'student':
        console.log('Redirecting to student-cv');
        // Navigate to student-cv page
        navigate('/student-cv');
        break;
      case 'professor':
        console.log('Redirecting to professor-form');
        // Navigate to professor-form page
        navigate('/professor-form');
        break;
      case 'company':
        console.log('Redirecting to company-form');
        // Navigate to company-form page
        navigate('/company-form');
        break;
      default:
        alert('Invalid role');
    }
  };
 
  return (
    <div className="signup-wrapper">
       <div className="signup-container">
         <div className="signup-image">
           <img src={menImage} alt="Signup" className="signup-image" />
         </div>
         <div className="signup-content">
           <h2>Sign up to InterLinker</h2>
           <div className="images-captions">
             <p className="images-caption welcome-to"><h3>Welcome To InterLinker</h3></p>
           </div>
           <div className='images-sub'>
             <p className="images-caption subs-heading"> <h6>Navigating the Student Journey, Connecting Opportunities, and Amplifying Student Engagement</h6></p>
           </div>
           <div className='images-but'>
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
                    <option value="" disabled hidden>Role</option>
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
                   placeholder="Email@gmail.com"
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
           
         </div>
       </div>
    </div>
   );
};

export default Signup;
