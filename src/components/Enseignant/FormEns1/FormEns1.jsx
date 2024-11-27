import React, { useState, useEffect } from 'react';
import image from '../../../images/imgs.png';
import './form1.css';

const FormEns1 = ({ onNext, data }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [sex, setSex] = useState('male');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [wilaya, setWilaya] = useState('');
  const [birthday, setBirthday] = useState('');
  const [error, setError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [birthdayError, setBirthdayError] = useState('');
  const [streetError, setStreetError] = useState('');
  const [cityError, setCityError] = useState('');
  const [wilayaError, setWilayaError] = useState('');

  useEffect(() => {
    // Update the state when the data prop changes
    if (data) {
      setFirstName(data.firstName || '');
      setLastName(data.lastName || '');
      setEmail(data.email || '');
      setSex(data.sex || 'male');
      setPhoneNumber(data.phoneNumber || '');
      setStreet(data.street || '');
      setCity(data.city || '');
      setWilaya(data.wilaya || '');
      setBirthday(data.birthday || '');
    }
  }, [data]);

  const handleNext = () => {
    // Réinitialise les classes d'erreur et les alertes
    setFirstNameError('');
    setLastNameError('');
    setEmailError('');
    setPhoneNumberError('');
    setCityError('');
    setBirthdayError('');
    setStreetError('');
    setWilayaError('');
    setError('');

    // Vérifie que tous les champs obligatoires sont renseignés
    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      email.trim() === '' ||
      phoneNumber.trim() === '' ||
      street.trim() === '' ||
      city.trim() === '' ||
      wilaya.trim() === '' ||
      birthday.trim() === ''
    ) {
      // Définis les classes d'erreur pour les champs manquants
      setFirstNameError(firstName.trim() === '' ? 'error' : '');
      setLastNameError(lastName.trim() === '' ? 'error' : '');
      setEmailError(email.trim() === '' ? 'error' : '');
      setPhoneNumberError(phoneNumber.trim() === '' ? 'error' : '');
      setBirthdayError(birthday.trim() === '' ? 'error' : '');
      setStreetError(street.trim() === '' ? 'error' : '');
      setCityError(city.trim() === '' ? 'error' : '');
      setWilayaError(wilaya.trim() === '' ? 'error' : '');

      // Affiche un message d'erreur global
      setError('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    // Vérifie que le champ "Email" est une adresse email valide
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      // Définis la classe d'erreur pour le champ d'email
      setEmailError('error');

      // Affiche un message d'erreur global
      setError('Veuillez entrer une adresse email valide.');
      return;
    }

    // Vérifie que le champ "Phone number" est de type numérique
    if (
      isNaN(phoneNumber) ||
      !(phoneNumber.startsWith('06') || phoneNumber.startsWith('05') || phoneNumber.startsWith('07')) ||
      phoneNumber.length !== 10
    ) {
      // Définis la classe d'erreur pour le champ de numéro de téléphone
      setPhoneNumberError('error');
      setError('Le numéro de téléphone doit être un numéro algérien valide.');
      return;
    }

    // Réinitialise le message d'erreur s'il était précédemment affiché
    setError('');

    // Call the onNext function and pass the data to the parent component
    onNext({
      firstName,
      lastName,
      email,
      sex,
      phoneNumber,
      birthday,
      street,
      city,
      wilaya,
    });


    alert('Step One completed successfully!');

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
            <label>Street</label>
            <div>
              <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} className={streetError} />
            </div>

            <div >
            <label>City</label>
            <div>
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className={cityError} />
            </div>
            <label>Wilaya </label>
            <div>
              <input type="text" value={wilaya} onChange={(e) => setWilaya(e.target.value)} className={wilayaError} />
            </div>
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
