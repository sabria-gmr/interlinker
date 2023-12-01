import React, { useState, useEffect } from 'react';
import './step5.css';
import image from '../../../images/imgs.png';

const isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

const StepFive = ({ data, onNext, onBack }) => {
  const [title, setTitle] = useState('');
  const [supervisor, setSupervisor] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [isProjectLinkValid, setIsProjectLinkValid] = useState(true);

  useEffect(() => {
    // Update the state when the data prop changes
    if (data) {
      setTitle(data.title || '');
      setSupervisor(data.supervisor || '');
      setProjectLink(data.projectLink || '');
      setProjectDescription(data.projectDescription || '');
    }
  }, [data]);

  const checkStepFiveFields = () => {
    const isLinkValid = isValidURL(projectLink);

    setIsProjectLinkValid(isLinkValid);

    // Only require title, supervisor, and a valid projectLink
    return title.trim() !== '' && supervisor.trim() !== '' && isLinkValid;
  };

  const handleNext = () => {
    const isStepFiveValid = checkStepFiveFields();

    if (isStepFiveValid) {
      onNext({
        ...data,
        title,
        supervisor,
        projectLink,
        projectDescription,
      });
    }
  };

  const handleBack = () => {
    // You can now use onBack as it is a prop
    onBack();
  };

  useEffect(() => {
    // You can save the project information to your desired storage or state
    console.log('Project Information:', {
      title,
      supervisor,
      projectLink,
      projectDescription,
    });
  }, [title, supervisor, projectLink, projectDescription]);

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
        <div className="circle1" id="circle5">
          <p>5</p>
        </div>
        <div className="circle6" id="circle6">
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
      <div className="affichStep5">
        <div className="stepInfo">
          <div><h2> My Projects</h2></div>

          <label>Title:</label>
          <div className="cv">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <label>Supervisor:</label>
          <div className="cv">
            <input
              type="text"
              value={supervisor}
              onChange={(e) => setSupervisor(e.target.value)}
            />
          </div>

          <label>Project Link:</label>
          <div className="cv">
            <input
              type="text"
              value={projectLink}
              onChange={(e) => setProjectLink(e.target.value)}
            />
          </div>

          <label>Project Description:</label>
          <div className="cv">
            <textarea
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className="textarea-styled"
            />
          </div>

          <div className="buttonContainerStepFive">
          <button onClick={handleBack} className="goBack">Go back</button>
           <button onClick={handleNext} className="nextStep">Next Step</button>
          </div>
        </div>
      </div>
    </div>
);
      
}
export default StepFive;