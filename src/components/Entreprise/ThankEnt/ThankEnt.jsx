// ThankYou.jsx

import React from 'react';

import image from '../../../images/imgs.png'
import { Link } from 'react-router-dom';
import './thankEnt.css'; 


const Thank = ({ onBack }) => {
  return (
    <div className="container1" id="container">
      <div className="cv-image">
        <img src={image} alt="Signup" className="displayStep" />
      </div>
      <div className="circle_entreprise">
        <div className="circle7" id="circle1">
          <p>1</p>
        </div>
        <div className="circle8" id="circle2">
          <p>2</p>
        </div>
      </div>
      <div className="steps_entreprise">
        <div className="step1_entreprise">
          <p>STEP 1</p>
          <span className="Span_entreprise">Personal Information</span>
        </div>
        <div className="step2_entreprise">
          <p>STEP 2</p>
          <span className='Span2_entreprise'>Trainings and Diplomas </span>
        </div>
      </div>
      <div className="stepContainer" id="stepContainer">
        <div className="stepThankYou">
          <div className="stepInfo" id="stepInfo">
          
            <h2> Congratulation! Your account has been successfully created.</h2>
        <p>
        "We are grateful to be able to accompany you on your journey, 
        and we are confident that this collaboration will be fruitful."
        </p>
        
        
        </div>
         </div>
         <div className='buttonContainer'>
           <Link to ='/page'> <button className="startButton"> Start Now </button> </Link> 
          </div>

         </div>
          
         <div>
          
         
         </div> 
     
    </div>
  );
};

export default Thank;
