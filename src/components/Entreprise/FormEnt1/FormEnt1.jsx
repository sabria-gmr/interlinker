import React, { useState, useEffect } from 'react';
import image from '../../../images/imgs.png';
import './entreprise1.css';

const FormEnt1 = ({ onNext, data }) => {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [wilaya, setWilaya] = useState('');
  const [website, setWebsite] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [companyNameError, setCompanyNameError] = useState('');
  const [streetError, setStreetError] = useState('');
  const [cityError, setCityError] = useState('');
  const [wilayaError, setWilayaError] = useState('');
  const [websiteError, setWebsiteError] = useState('');

  useEffect(() => {
    if (data) {
      setCompanyName(data.companyName || '');
      setEmail(data.email || '');
      setPhoneNumber(data.phoneNumber || '');
      setCity(data.city || '');
      setStreet(data.street || '');
      setWilaya(data.wilaya || '');
      setWebsite(data.website || '');
    }
  }, [data]);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]{8,10}$/;
    return phoneRegex.test(phoneNumber);
  };
  const isValidUrl = (url) => {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(url);
  };

  const handleNext = () => {
    setCompanyNameError('');
    setWebsiteError('');
    setEmailError('');
    setPhoneNumberError('');
    setCityError('');
    setStreetError('');
    setWilayaError('');


    // Vérifie que tous les champs obligatoires sont renseignés
    if (
      companyName.trim() === '' ||
      website.trim() === '' ||
      email.trim() === '' ||
      phoneNumber.trim() === '' ||
      city.trim() === '' ||
      street.trim() === '' ||
      wilaya.trim() === ''

    ) {
      // Set error classes for missing fields
      setCompanyNameError(companyName.trim() === '' ? 'error' : '');
      setEmailError(!isValidEmail(email) ? 'error' : '');
      setPhoneNumberError(!isValidPhoneNumber(phoneNumber) ? 'error' : '');
      setCityError(city.trim() === '' ? 'error' : '');
      setStreetError(street.trim() === '' ? 'error' : '');
      setWilayaError(wilaya.trim() === '' ? 'error' : '');
      setWebsiteError(website.trim() === '' ? 'error' : '');

      // Display an alert for missing fields
      setError(' Tous les champs sont  obligatoires ');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('error');
      setError('Veuillez entrer une adresse email valide.');
      return;
    }

    if (isNaN(phoneNumber) || !(phoneNumber.startsWith('06') || phoneNumber.startsWith('05') || phoneNumber.startsWith('07')) || phoneNumber.length !== 10) {
      // Définis la classe d'erreur pour le champ de numéro de téléphone
      setPhoneNumberError('error');
      setError('Le numéro de téléphone doit être un numéro algérien valide.');
      return;
    }
    // Check if the Company Website is a valid URL
    if (website.trim() !== '' && !isValidUrl(website.trim())) {
      // Set error class for an invalid URL
      setWebsiteError('error');
      setError('Veuillez fournir un lien valide pour le site Web de l\'entreprise.');
      return;
    }

    setError('');

    onNext({
      companyName,
      website,
      email,
      phoneNumber,
      city,
      street,
      wilaya,
    });
    alert('Step One completed successfully!');
  };

  return (
    <div className="container1" id="container">
      <div className="cv-image">
        <img src={image} alt="Signup" className="displayStep" />
      </div>
      <div className="circle_entreprise">
        <div className="circle1" id="circle1">
          <p>1</p>
        </div>
        <div className="circle2" id="circle2">
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
          <span className='Span2_entreprise'>Company Details </span>
        </div>
      </div>
      <div className="stepContainers" id="stepContainers">
        <div className="affichStep_entreprise">
          <div className="stepInfo_entreprise" id="stepInfo_entreprise">
            <div><h2>Personal Information</h2></div>

            <label>Company name</label>
            <div>
              <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className={companyNameError} />
            </div>
            <label>Company Website </label>
            <div>
              <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} className={websiteError
              } />
            </div>
            <label>Email Address</label>
            <div>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={emailError} />
            </div>

            <label>Phone Number</label>
            <div>
              <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className={phoneNumberError} />
            </div>
            <label>Street</label>
            <div>
              <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} className={streetError} />
            </div>
            <label>City</label>
            <div>
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className={cityError} />
            </div>

            <label>Wilaya</label>
            <div>
              <input type="text" value={wilaya} onChange={(e) => setWilaya(e.target.value)} className={wilayaError} />
            </div>
            <div className="buttonContainerEnt1">
              <button onClick={handleNext} className="nextStepEnt1">Next Step</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormEnt1;



