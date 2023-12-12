import React, { useState, useEffect } from 'react';
import './step3.css';
import image from '../../../images/imgs.png';

const StepThree = ({ data, onNext, onBack }) => {
  const [job, setJob] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [description, setDescription] = useState('');
  const [noExperience, setNoExperience] = useState(false);

  useEffect(() => {
    if (data) {
      setJob(data.job || '');
      setCompanyName(data.companyName || '');
      setGithub(data.github || '');
      setLinkedin(data.linkedin || '');
      setDescription(data.description || '');
      setNoExperience(data.noExperience || false);
    }
  }, [data]);

  const checkStepThreeFields = () => {
    return !noExperience && job.trim() !== '' && companyName.trim() !== '' && github.trim() !== '' && linkedin.trim() !== '';
  };

  const handleNext = () => {
    const isStepThreeValid = checkStepThreeFields();

    if (isStepThreeValid || noExperience) {
      const isGithubValid = !github || isValidUrl(github);
      const isLinkedinValid = !linkedin || isValidUrl(linkedin);

      if (!isGithubValid) {
        alert('Invalid GitHub URL');
        return;
      }

      if (!isLinkedinValid) {
        alert('Invalid LinkedIn URL');
        return;
      }

      onNext({ ...data, job, companyName, github, linkedin, description, noExperience });
      alert('Step Three completed successfully!');
    } else {
      alert('Please fill in all the required fields.');
    }
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  const handleBack = () => {
    onBack();
  };




  return (
    <div class="container3" id="container" >
          <div className='cv-image'>
            <img src={image} alt="Signup" className="displayStep" />
          </div>
          <div className="circle">
              <div className="circle3" id="circle1"><p>1</p></div>
              <div className="circle2" id="circle2"><p>2</p></div>
              <div className="circle1" id="circle3"><p>3</p></div>
              <div className="circle4" id="circle4"><p>4</p></div>
              <div className="circle5" id="circle5"><p>5</p></div>
              <div className="circle6" id="circle6"><p>6</p></div>
          </div>
          <div className="steps">
              <div className="step1">
              <p>STEP 1</p>
              <span className='Span1'>Personnal  Information</span>
             </div>
             <div className="step1">
             <p>STEP 2</p>
             <span className='Span22'>Trainings and Diplomas </span>
            </div>
            <div className="step1">
            <p>STEP 3</p>
            <span className='Span33'>Professional Experience </span>
            </div>
            <div className="step1">
             <p>STEP 4</p>
             <span className='Span44'>Skills & Languages </span>
             </div>
             <div className="step1">
             <p>STEP 5</p>
             <span className='Span55'> Projects </span>
             </div>
             <div className="step1">
             <p>STEP 6</p>
             <span className='Span66'>Rewards </span>
             </div>
           </div>
           <div className="affichStep3">
        <div className="stepInfo">
          <h2>Professional Experience</h2>
          <label>Job:</label>
        <div > 
          <input type="text" value={job} onChange={(e) => setJob(e.target.value)} disabled={noExperience} />
        </div> 

        <label>Company Name:</label>
        <div >
          <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)}  disabled={noExperience} />
        </div>

        <label>GitHub:</label>
        <div >
          <input type="url" value={github} onChange={(e) => setGithub(e.target.value)} />
        </div>

        <label>LinkedIn:</label>
        <div >
          <input type="url" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
        </div>

        <label> Description:</label>
        <div className='cv'>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="textarea-styled" />
        </div>


        <div > 
          <label >
            <input
              type="checkbox"
              checked={noExperience}
             
              onChange={() => setNoExperience(!noExperience)}
              className='check_box1'
            />
          </label>
        </div>
        <span className='check_box_label'>I don't have professional experience</span>
        

        <div className="buttonContainerStepThree">
           <button onClick={handleBack} className="goBack">Go back</button>
           <button onClick={handleNext} className="nextStep">Next Step</button>
        </div>

          </div>
        </div>
      </div>

         
          
          
         
        
     
    
  );
};

export default StepThree;
