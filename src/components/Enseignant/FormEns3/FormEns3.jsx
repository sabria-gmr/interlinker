// FormEns3.js

import React, { useState, useEffect } from 'react';
import image from '../../../images/imgs.png';
import './form3.css'; // Make sure to import your CSS file

const FormEns3 = ({ onNext, onBack, data }) => {
  const [university, setUniversity] = useState('');
  const [department, setDepartment] = useState('');
  const [program, setProgram] = useState('');
  const [domain, setDomain] = useState('');

  const [universityError, setUniversityError] = useState('');
  const [departmentError, setDepartmentError] = useState('');
  const [programError, setProgramError] = useState('');
  const [domainError, setDomainError] = useState('');

  useEffect(() => {
    // Update the state when the data prop changes
    if (data) {
      setUniversity(data.university || '');
      setDepartment(data.department || '');
      setProgram(data.program || '');
      setDomain(data.domain || '');
    }
  }, [data]);

  const checkFields = () => {
    // Check if all fields are not empty
    const areFieldsValid =
      university.trim() !== '' &&
      department.trim() !== '' &&
      program.trim() !== '' &&
      domain.trim() !== '';

    // Update error states
    setUniversityError(areFieldsValid ? '' : 'error');
    setDepartmentError(areFieldsValid ? '' : 'error');
    setProgramError(areFieldsValid ? '' : 'error');
    setDomainError(areFieldsValid ? '' : 'error');

    return areFieldsValid;
  };

  const handleNext = () => {
    const isFormEns3Valid = checkFields();

    if (isFormEns3Valid) {
      onNext({ university, department, program, domain });
    }
  };

  return (
    <div className="containers" id="container">
      <div className="cv-image">
        <img src={image} alt="Signup" className="displayStep" />
      </div>

      <div className="circles_enseignant">
        <div className="circles3" id="circles1">
          <p>1</p>
        </div>
        <div className="circles2" id="circles2">
          <p>2</p>
        </div>
        <div className="circles1" id="circles3">
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
        <div className="affichEns3">
          <div className="stepInfo" id="stepInfo">
            <div>
              <h2> Professional Experience </h2>
            </div>

            <label>University</label>
            <div>
              <select
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                className={universityError}
              >
                <option value="">Select University</option>
                <option value="university1">University 1</option>
                <option value="university2">University 2</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <label>Department</label>
            <div>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className={departmentError}
              >
                <option value="">Select Department</option>
                <option value="department1">Department 1</option>
                <option value="department2">Department 2</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <label>Program</label>
            <div>
              <input
                type="text"
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                className={programError}
              />
            </div>

            <label>Domain</label>
            <div>
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className={domainError}
              />
            </div>

            <div className="buttonContainerEns3">
              <button onClick={onBack} className="goBack">
                Go back
              </button>
              <button onClick={handleNext} className="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEns3;
