import React, { useState, useEffect } from 'react';
import './step6.css';  // Import your CSS file if needed
import image from '../../../images/imgs.png';

const StepSix = ({ data, onNext, onBack }) => {
  const [rewardTitle, setRewardTitle] = useState('');
  const [rewardDate, setRewardDate] = useState('');
  const [rewardDescription, setRewardDescription] = useState('');

  useEffect(() => {
    // Update the state when the data prop changes
    if (data) {
      setRewardTitle(data.rewardTitle || '');
      setRewardDate(data.rewardDate || '');
      setRewardDescription(data.rewardDescription || '');
    }
  }, [data]);

  const checkStepSixFields = () => {
    // Perform any additional validation for StepSix fields
    // Return true if valid, false otherwise
    return (
      rewardTitle.trim() !== '' &&
      rewardDate.trim() !== '' &&
      rewardDescription.trim() !== ''
    );
  };

  const handleNext = () => {
    const isStepSixValid = checkStepSixFields();

    if (isStepSixValid) {
      onNext({ ...data, rewardTitle, rewardDate, rewardDescription });
    }
  };

  const handleBack = () => {
    // You can now use onBack as it is a prop
    onBack();
  };


      
  return (
    <div className="containers" id="container">
     <div className="cv-image">
        <img src={image} alt="Signup" className="displayStep" />
      </div>
      <div className="circle">
        <div className="circle5" id="circle1">
          <p>1</p>
        </div>
        <div className="circle2" id="circle2">
          <p>2</p>
        </div>
        <div className="circle3" id="circle3">
          <p>3</p>
        </div>
        <div className="circle4" id="circle4">
          <p>4</p>
        </div>
        <div className="circle5" id="circle5">
          <p>5</p>
        </div>
        <div className="circle1" id="circle6">
          <p>6</p>
        </div>
      </div>
      <div className="steps">
        <div className="step1">
          <p>STEP 1</p>
          <span className="Span1">Personal Information</span>
        </div>
        <div className="step1">
          <p>STEP 2</p>
          <span className="Span2">Trainings and Diplomas</span>
        </div>
        <div className="step1">
          <p>STEP 3</p>
          <span className="Span3">Professional Experience</span>
        </div>
        <div className="step1">
          <p>STEP 4</p>
          <span className="Span4">Skills & Languages</span>
        </div>
        <div className="step1">
          <p>STEP 5</p>
          <span className="Span5">Projects</span>
        </div>
        <div className="step1">
          <p>STEP 6</p>
          <span className="Span6">Rewards</span>
        </div>
      </div>
      
      <div className="affichStep6">
        <div className="stepInfo">
          <div><h2>Rewards</h2></div>


          <label>Title:</label>
          <div className="cv">
            <input
              type="text"
              value={rewardTitle}
              onChange={(e) => setRewardTitle(e.target.value)}
            />
          </div>

          <label>Date:</label>
          <div className="cv">
            <input
              type="date"
              value={rewardDate}
              onChange={(e) => setRewardDate(e.target.value)}
            />
          </div>

          <label>Description:</label>
          <div className="cv">
            <textarea
              value={rewardDescription}
              onChange={(e) => setRewardDescription(e.target.value)}
            />
          </div>

          <div className="buttonContainerStepSix">
          <button onClick={handleBack} className="goBack">Go back</button>
           <button onClick={handleNext} className="nextStep">Next Step</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepSix;
