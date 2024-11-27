import React, { useState, useEffect } from 'react';
import './step4.css';
import image from '../../../images/imgs.png';
import Select from 'react-select';

const StepFour = ({ data, onNext, onBack }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [experience, setExperience] = useState('');
  const [interests, setInterests] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [languageLevel, setLanguageLevel] = useState('');

  useEffect(() => {
    // Update the state when the data prop changes
    if (data) {
      setSelectedSkills(data.skills || []);
      setExperience(data.experience || '');
      setInterests(data.interests || '');
      setSelectedLanguages(data.languages || []);
      setLanguageLevel(data.languageLevel || '');
    }
  }, [data]);

  // Save selectedLanguages whenever it changes
  useEffect(() => {
    console.log('Selected Languages:', selectedLanguages);
  }, [selectedLanguages]);


  useEffect(() => {
    console.log('Selected Skills:', selectedSkills);
  }, [selectedSkills]);


  const checkStepFourFields = () => {
    return (
      selectedSkills.length > 0 &&
      experience.trim() !== '' &&
      interests.trim() !== '' &&
      selectedLanguages.length > 0 &&
      languageLevel !== ''
    );
  };

  const handleNext = () => {
    const isStepFourValid = checkStepFourFields();

    if (isStepFourValid) {
      // Additional validation logic can be added here if needed
      onNext({
        ...data,
        skills: selectedSkills,
        experience,
        interests,
        languages: selectedLanguages,
        languageLevel,
      });
      alert('Step Four completed successfully!');
    } else {
      alert('Please fill in all the required fields.');
    }
  };



  const skillsOptions = [
    { value: 'Java', label: 'Java' },
    { value: 'Python', label: 'Python' },
    { value: 'C++', label: 'C++' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'HTML', label: 'HTML' },
    { value: 'CSS', label: 'CSS' },
    { value: 'React', label: 'React' },
    { value: 'Angular', label: 'Angular' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Django', label: 'Django' },
    { value: 'SQL', label: 'SQL' },
    { value: 'MongoDB', label: 'MongoDB' },
    { value: 'Linux/Unix', label: 'Linux/Unix' },
    { value: 'Windows Server', label: 'Windows Server' },
    { value: 'TCP/IP', label: 'TCP/IP' },
    { value: 'Routage', label: 'Routage' },
    { value: 'Commutation', label: 'Commutation' },
    { value: 'Firewalls', label: 'Firewalls' },
    { value: 'VPN', label: 'VPN' },
    { value: 'IDS/IPS', label: 'IDS/IPS' },
    { value: 'Cryptographie', label: 'Cryptographie' },
    { value: 'Tests d\'intrusion', label: 'Tests d\'intrusion' },
    { value: 'Gestion des vulnérabilités', label: 'Gestion des vulnérabilités' },
    { value: 'ISO 27001', label: 'ISO 27001' },
    { value: 'PCI DSS', label: 'PCI DSS' },
    { value: 'AWS', label: 'AWS' },
    { value: 'Azure', label: 'Azure' },
    { value: 'GCP', label: 'GCP' },
    { value: 'Conception d\'architectures cloud', label: 'Conception d\'architectures cloud' },
    { value: 'Gestion des ressources cloud', label: 'Gestion des ressources cloud' },
    { value: 'Hadoop', label: 'Hadoop' },
    { value: 'Spark', label: 'Spark' },
    { value: 'NoSQL (MongoDB, Cassandra)', label: 'NoSQL (MongoDB, Cassandra)' },
    { value: 'TensorFlow', label: 'TensorFlow' },
    { value: 'PyTorch', label: 'PyTorch' },
    { value: 'Algorithmes d\'apprentissage automatique', label: 'Algorithmes d\'apprentissage automatique' },
    { value: 'NLP', label: 'NLP' },
    { value: 'Vision par ordinateur', label: 'Vision par ordinateur' },
    { value: 'CI/CD', label: 'CI/CD' },
    { value: 'Jenkins', label: 'Jenkins' },
    { value: 'Docker', label: 'Docker' },
    { value: 'Kubernetes', label: 'Kubernetes' },
    { value: 'Ansible', label: 'Ansible' },
    { value: 'Puppet', label: 'Puppet' },
    { value: 'Chef', label: 'Chef' },
    { value: 'Shell scripting (Bash, PowerShell)', label: 'Shell scripting (Bash, PowerShell)' },
    { value: 'Automatisation de tâches', label: 'Automatisation de tâches' },
    { value: 'Conception de bases de données relationnelles', label: 'Conception de bases de données relationnelles' },
    { value: 'Langage SQL', label: 'Langage SQL' },
    { value: 'PHP', label: 'PHP' },
    { value: 'Swift', label: 'Swift' },
    { value: 'Kotlin', label: 'Kotlin' },
    { value: 'Go', label: 'Go' },
    { value: 'Rust', label: 'Rust' },
  ];

  const languageOptions = [
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'french', label: 'French' },
    { value: 'german', label: 'German' },
    { value: 'chinese', label: 'Chinese' },
  ];


  const handleSkillsChange = (selectedOptions) => {
    setSelectedSkills(selectedOptions);
  };

  const handleLanguagesChange = (selectedOptions) => {
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
    <div className="container1" >
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
      <div className="Steps">
        <div className="step1">
          <p>STEP 1</p>
          <span className="span2">Personal Information</span>
        </div>
        <div className="step1">
          <p>STEP 2</p>
          <span className="span2">Trainings and Diplomas</span>
        </div>
        <div className="step1">
          <p>STEP 3</p>
          <span className="span2">Professional Experience</span>
        </div>
        <div className="step1">
          <p>STEP 4</p>
          <span className="span2">Skills & Languages</span>
        </div>
        <div className="step1">
          <p>STEP 5</p>
          <span className="span2">Projects</span>
        </div>
        <div className="step1">
          <p>STEP 6</p>
          <span className="span2">Rewards</span>
        </div>
      </div>
      <div className="affichStep4">
        <div className="stepInfo">

          <div><h2>Skills & Languages</h2></div>

          <label>Skills:</label>
          <div>
            <Select
              options={skillsOptions}
              value={selectedSkills}
              onChange={handleSkillsChange}
              isMulti={true}
              styles={customStyles}
              placeholder=""
            />
          </div>



          <label>Experience:</label>
          <div>
            <input
              type="text"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>
          <label>Languages:</label>
          <div>
            <Select
              options={languageOptions}
              value={selectedLanguages}
              onChange={handleLanguagesChange}
              isMulti={true}
              styles={customStyles}
              placeholder=""
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
              onChange={(e) => setInterests(e.target.value)} />



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
