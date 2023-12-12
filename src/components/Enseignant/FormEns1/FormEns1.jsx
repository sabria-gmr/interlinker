import React, { useState, useEffect } from 'react';
import image from '../../../images/imgs.png';
import './form1.css';

const FormEns1 = ({ onNext, data }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [sex, setSex] = useState('male');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [region, setRegion] = useState('');
  const [birthday, setBirthday] = useState('');
  const [error, setError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [regionError, setRegionError] = useState('');
  const [birthdayError, setBirthdayError] = useState('');

  useEffect(() => {
    // Update the state when the data prop changes
    if (data) {
      setFirstName(data.firstName || '');
      setLastName(data.lastName || '');
      setEmail(data.email || '');
      setSex(data.sex || 'male');
      setPhoneNumber(data.phoneNumber || '');
      setRegion(data.region || '');
      setBirthday(data.birthday || '');
    }
  }, [data]);

  const isValidEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNext = () => {
    // Reset error classes
    setFirstNameError('');
    setLastNameError('');
    setEmailError('');
    setPhoneNumberError('');
    setRegionError('');
    setBirthdayError('');
  
    // Check if all required fields are filled
    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      email.trim() === '' ||
      phoneNumber.trim() === '' ||
      region.trim() === '' ||
      birthday.trim() === ''
    ) {
      alert('Please fill in all required fields.');
      // Set error classes for missing fields
      setFirstNameError(firstName.trim() === '' ? 'error' : '');
      setLastNameError(lastName.trim() === '' ? 'error' : '');
      setEmailError(email.trim() === '' ? 'error' : '');
      setPhoneNumberError(phoneNumber.trim() === '' ? 'error' : '');
      setRegionError(region.trim() === '' ? 'error' : '');
      setBirthdayError(birthday.trim() === '' ? 'error' : '');
      return;
    }
  
    // Check email validity
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      // Set error class for the email field
      setEmailError('error');
      return;
    }
  
    // Check if the "Phone number" field is numeric
    if (
      isNaN(phoneNumber) ||
      !(phoneNumber.startsWith('06') || phoneNumber.startsWith('05') || phoneNumber.startsWith('07')) ||
      phoneNumber.length !== 10
    ) {
      alert('The phone number must be a valid Algerian number.');
      // Set error class for the phone number field
      setPhoneNumberError('error');
      return;
    }
  
    // Reset the error message if it was previously displayed
    setError('');
  
    // Call the onNext function and pass the data to the parent component
    onNext({
      firstName,
      lastName,
      email,
      sex,
      phoneNumber,
      birthday,
      region,
    });
  };
  return (
    <div className="container1" id="container">
      <div className="cv-image">
        <img src={image} alt="Signup" className="displayStep" />
      </div>
      <div className="circles_enseignant">
        <div className="circles1" id="circles1">
          <p>1</p>
        </div>
        <div className="circles2" id="circles2">
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
        <div className="affichEns1">
          <div className="stepInfo" id="stepInfo">
            <div>
              {' '}
              <h2> Personal Information </h2>
            </div>
            <label>First name</label>
            <div>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={firstNameError}
              />
            </div>
            <label>Last name</label>
            <div>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={lastNameError}
              />
            </div>
            <label>Email Address</label>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={emailError}
              />
            </div>
            <label>Sex</label>
            <div className="sex">
              <div>
                <label className="radio-label">
                  <input
                    type="radio"
                    value="male"
                    checked={sex === 'male'}
                    onChange={() => setSex('male')}
                    className="radio-input"
                  />
                  <span>Male</span>
                </label>
              </div>
              <div>
                <label className="radio-label">
                  <input
                    type="radio"
                    value="female"
                    checked={sex === 'female'}
                    onChange={() => setSex('female')}
                    className="radio-input"
                  />
                  <span>Female</span>
                </label>
              </div>
            </div>
            <label>Phone number</label>
            <div>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={phoneNumberError}
              />
            </div>
            <label>Birthday date</label>
            <div>
              <input
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                className={birthdayError}
              />
            </div>
            <label>Region</label>
            <div>
              <input
                type="text"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className={regionError}
              />
            </div>
            <div className="buttonContainerEns1">
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

export default FormEns1;
