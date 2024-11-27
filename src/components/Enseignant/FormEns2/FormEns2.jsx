// FormEns2.js

import React, { useState, useEffect } from 'react';
import image from '../../../images/imgs.png';
import './form2.css'; // Make sure to import your CSS file

const FormEns2 = ({ onNext, onBack, data }) => {
  const [university, setUniversity] = useState('');
  const [degree, setDegree] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [previousProject, setPreviousProject] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');

  const [universityError, setUniversityError] = useState('');
  const [degreeError, setDegreeError] = useState('');
  const [fieldOfStudyError, setFieldOfStudyError] = useState('');
  const [githubError, setGithubError] = useState('');
  const [linkedinError, setLinkedinError] = useState('');

  useEffect(() => {
    // Update the state when the data prop changes
    if (data) {
      setUniversity(data.university || '');
      setDegree(data.degree || '');
      setFieldOfStudy(data.fieldOfStudy || '');
      setPreviousProject(data.previousProject || '');
      setGithub(data.github || '');
      setLinkedin(data.linkedin || '');
    }
  }, [data]);

  const checkFields = () => {
    // Check if University, Field of Study, and Degree are not empty
    const requiredFieldsValid =
      university.trim() !== '' && degree.trim() !== '' && fieldOfStudy.trim() !== '';

    // Validate GitHub and LinkedIn links (optional)
    const isGithubValid = validateLink(github);
    const isLinkedinValid = validateLink(linkedin);

    // Update error states
    setUniversityError(requiredFieldsValid ? '' : 'error');
    setDegreeError(requiredFieldsValid ? '' : 'error');
    setFieldOfStudyError(requiredFieldsValid ? '' : 'error');
    setGithubError(isGithubValid ? '' : 'error');
    setLinkedinError(isLinkedinValid ? '' : 'error');

    return requiredFieldsValid && isGithubValid && isLinkedinValid;
  };

  const validateLink = (link) => {
    // Simple validation for a valid URL
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return link.trim() === '' || urlRegex.test(link);
  };

  const handleNext = () => {
    // Reset error classes
    setUniversityError('');
    setDegreeError('');
    setFieldOfStudyError('');
    setGithubError('');
    setLinkedinError('');
  
    // Check if University, Field of Study, and Degree are not empty
    const requiredFieldsValid =
      university.trim() !== '' && degree.trim() !== '' && fieldOfStudy.trim() !== '';
  
    // Validate GitHub and LinkedIn links (optional)
    const isGithubValid = validateLink(github);
    const isLinkedinValid = validateLink(linkedin);
  
    // Update error states
    setUniversityError(requiredFieldsValid ? '' : 'error');
    setDegreeError(requiredFieldsValid ? '' : 'error');
    setFieldOfStudyError(requiredFieldsValid ? '' : 'error');
    setGithubError(isGithubValid ? '' : 'error');
    setLinkedinError(isLinkedinValid ? '' : 'error');
  
    // Display alerts for validation errors
    if (!requiredFieldsValid) {
      alert('Please fill in all required fields.');
      return;
    }
  
    if (!isGithubValid) {
      alert('Please enter a valid GitHub link.');
      return;
    }
  
    if (!isLinkedinValid) {
      alert('Please enter a valid LinkedIn link.');
      return;
    }
  
    // Call the onNext function and pass the data to the parent component
    onNext({ university, degree, fieldOfStudy, previousProject, github, linkedin });
  };
  return (
    <div className="container1" id="container">
      <div className="cv-image">
        <img src={image} alt="Signup" className="displayStep" />
      </div>
      <div className="circles_enseignant">
        <div className="circles2" id="circles1">
          <p>1</p>
        </div>
        <div className="circles1" id="circles2">
          <p>2</p>
        </div>
        <div className="circles3" id="circles3">
          <p>3</p>
        </div>
      </div>
      <div className="Enseignant_steps">
        <div className="step2">
          <p>STEP 1</p>
          <span className="SpanE1">Personnal Information</span>
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
        <div className="affichEns2">
          <div className="stepInfo" id="stepInfo">
            <div>
              <h2> Academic Background </h2>
            </div>

            <label>University Name</label>
            <div>
              <select value={university} onChange={(e) => setUniversity(e.target.value)} className={universityError}>
                <option value="">Select University</option>
                <option value="esi">ESI</option>
                <option value="estin">ESTIN</option>
                {/* Add your university options here */}
              </select>
            </div>

            <label>Degree Earned</label>
            <div>
              <select value={degree} onChange={(e) => setDegree(e.target.value)} className={degreeError}>
                <option value="">Select Degree</option>
                <option value="doctorat">Doctorat</option>
                <option value="master">Master</option>
              </select>
            </div>

            <label>Field of Study</label>
            <div>
              <select value={fieldOfStudy} onChange={(e) => setFieldOfStudy(e.target.value)} className={fieldOfStudyError}>
                <option value="">Select Field of Study</option>
                <option value="informatique"> Informatique </option>
                <option value="mathematique">mathematic </option>
              </select>
            </div>

            <label>Previous Project</label>
            <div>
              <input
                type="text"
                value={previousProject}
                onChange={(e) => setPreviousProject(e.target.value)}
              />
            </div>

            <label>Github Link</label>
            <div>
              <input
                type="text"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                placeholder="https://github.com/username"
                className={githubError}
              />
            </div>

            <label>LinkedIn Link</label>
            <div>
              <input
                type="text"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="https://www.linkedin.com/in/username"
                className={linkedinError}
              />
            </div>

            <div className="buttonContainerEns2">
              <button onClick={onBack} className="goBack">
                Go back
              </button>
              <button onClick={handleNext} className="nextStep">
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEns2;
