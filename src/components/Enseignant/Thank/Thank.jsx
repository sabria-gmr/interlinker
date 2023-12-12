// ThankYou.jsx

import React from 'react';
import './thank.css'; // Import your CSS file
import image from '../../../images/imgs.png'
const Thank = () => {

  return (
    <div className="container1">
         <div className="cv-image">
        <img src={image} alt="Signup" className="displayStep" />
      </div>

      <div className="circles_thank">
        <div className="circlest" id="circles1">
          <p>1</p>
        </div>
        <div className="circlest" id="circles2">
          <p>2</p>
        </div>
        <div className="circlest" id="circles3">
          <p>3</p>
        </div>
      </div>
      <div className="Enseignant_steps">
        <div className="step2">
          <p>STEP 1</p>
          <span className="SpanE1">Personal Information</span>
        </div>
        <div className="step3">
          <p>STEP 2</p>
          <span className="SpanE2">Academic Background </span>
        </div>
        <div className="step4">
          <p>STEP 3</p>
          <span className="SpanE3">Professional Experience </span>
        </div>
      </div>
      <div className="stepContainer" id="stepContainer">
        <div className="stepThankYou">
          <div className="stepInfo" id="stepInfo">
          
            <h2> Congratulation! Your account has been successfully created.</h2>
        <p> 
          "We are thankful for the opportunity to support you on your journey, 
           and we believe our collaboration will be rewarding and successful."
        </p>
        
        
        </div>
         </div>
         <div className='buttonContainer'>
            <button className="startButton"> Start Now </button>
          </div>

         </div>
          
         <div>
          
         
         </div> 
     
    </div>
  );
};

export default Thank;
