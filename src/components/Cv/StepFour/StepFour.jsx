import React, { useState, useEffect } from 'react';
import './step4.css';
import image from '../../../images/imgs.png';
import Select from 'react-select';

const StepFour = ({ data, onNext, onBack }) => {
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [interests, setInterests] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [languageLevel, setLanguageLevel] = useState('');

  useEffect(() => {
    // Update the state when the data prop changes
    if (data) {
      setSkills(data.skills || '');
      setExperience(data.experience || '');
      setInterests(data.interests || '');
      setSelectedLanguages(data.languages || []);
      setLanguageLevel(data.languageLevel || '');
    }
  }, [data]);

  // Save selectedLanguages whenever it changes
  useEffect(() => {
    // You can save the selectedLanguages to your desired storage or state
    // For now, let's just log it to the console
    console.log('Selected Languages:', selectedLanguages);
  }, [selectedLanguages]);

  const checkStepFourFields = () => {
    return (
      skills.trim() !== '' &&
      experience.trim() !== '' &&
      interests.trim() !== '' &&
      selectedLanguages.length > 0 &&
      languageLevel !== ''
    );
  };

  const handleNext = () => {
    const isStepFourValid = checkStepFourFields();

    if (isStepFourValid) {
      onNext({
        ...data,
        skills,
        experience,
        interests,
        languages: selectedLanguages,
        languageLevel,
      });
    }
  };

  const languageOptions = [
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'french', label: 'French' },
    { value: 'german', label: 'German' },
    { value: 'chinese', label: 'Chinese' },
  ];

  const handleSelectChange = (selectedOptions) => {
    setSelectedLanguages(selectedOptions);
  };

  const handleBack = () => {
    onBack();
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: '100%', // Set the width as needed
      border: state.isFocused ? '1px solid rgba(44, 52, 132, 1)' : '1px solid #f4f8f7', // Border color when focused or not
      boxShadow: 'none', // Remove default box shadow
      backgroundColor: '#f4f8f7',
      borderRadius: '8px', // Add border radius
      cursor: 'pointer', // Change cursor on hover
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: 'rgba(44, 52, 132, 1)', // Background color for selected items
      color: '#fff', // Text color for selected items
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: '#fff', // Text color for selected item labels
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: '#fff', // Text color for the "x" button to remove selected items
      cursor: 'pointer', // Change cursor on hover
      ':hover': {
        backgroundColor: '#2980b9', // Background color on hover for the "x" button
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#3498db' : 'white', // Background color for selected option
      color: state.isSelected ? '#fff' : '#333', // Text color for selected option
      cursor: 'pointer', // Change cursor on hover
    }),
  };
  return (
    <div className="containers" id="container">
      <div className="cv-image">
        <img src={image} alt="Signup" className="displayStep" />
      </div>
      <div className="circle">
        <div className="circle4" id="circle1">
          <p>1</p>
        </div>
        <div className="circle2" id="circle2">
          <p>2</p>
        </div>
        <div className="circle3" id="circle3">
          <p>3</p>
        </div>
        <div className="circle1" id="circle4">
          <p>4</p>
        </div>
        <div className="circle5" id="circle5">
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
      <div className="affichStep4">
        <div className="stepInfo">
          <div><h2>Skills & Languages</h2></div>

          <label>Skills:</label>
          <div >
            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>

          <label>Experience:</label>
          <div >
            <input
              type="text"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>

          
          <label>Languages </label>
          <div>
            <Select
              options={languageOptions} // Options for the dropdown
              value={selectedLanguages} // Selected values
              onChange={handleSelectChange}
              isMulti={true}
              styles={customStyles}
              placeholder =""
            
            />
          </div>
        
          <label>Language Level:</label>
                  <div className="cv">
                    <select
                      value={languageLevel}
                      onChange={(e) => setLanguageLevel(e.target.value)}
                    >
                      <option value="">Select Level</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
          </div>
          <label>Interests:</label>
          <div className="cv">
            <textarea
              value={interests}
              onChange={(e) => setInterests(e.target.value)}/>
       
      
              
          </div>
        
        
          <div className="buttonContainerStepFour">
          <button onClick={handleBack} className="goBack">Go back</button>
           <button onClick={handleNext} className="nextStep">Next Step</button>
          </div>
        </div>
      </div>
    </div>
 );
};
        
export default StepFour;
        