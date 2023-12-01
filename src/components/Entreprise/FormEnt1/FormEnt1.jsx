import React, { useState, useEffect } from 'react';
import image from '../../../images/imgs.png';
import './entreprise1.css';

const FormEnt1 = ({ onNext, data }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [yourJob, setYourJob] = useState('');
  const [yourRole, setYourRole] = useState('');
  const [error, setError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [yourJobError, setYourJobError] = useState('');
  const [yourRoleError, setYourRoleError] = useState('');
  const [companyNameError, setCompanyNameError] = useState('');

  useEffect(() => {
    // Met à jour l'état lorsque la propriété data change
    if (data) {
      setFirstName(data.firstName || '');
      setLastName(data.lastName || '');
      setCompanyName(data.companyName || '');
      setEmail(data.email || '');
      setPhoneNumber(data.phoneNumber || '');
      setYourJob(data.yourJob || '');
      setYourRole(data.yourRole || '');
      setCompanyName(data.companyName || '');
    }
  }, [data]);

  const handleNext = () => {
    // Réinitialise les classes d'erreur
    setFirstNameError('');
    setLastNameError('');
    setEmailError('');
    setPhoneNumberError('');
    setYourJobError('');
    setYourRoleError('');
    setCompanyNameError('');

    // Vérifie que tous les champs obligatoires sont renseignés
    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      email.trim() === '' ||
      phoneNumber.trim() === '' ||
      yourJob.trim() === '' ||
      yourRole.trim() === ''||
      companyName.trim() === '' 
    ) {
      // Définis les classes d'erreur pour les champs manquants
      setFirstNameError(firstName.trim() === '' ? 'error' : '');
      setLastNameError(lastName.trim() === '' ? 'error' : '');
      
      setEmailError(email.trim() === '' ? 'error' : '');
      setPhoneNumberError(phoneNumber.trim() === '' ? 'error' : '');
      setYourJobError(yourJob.trim() === '' ? 'error' : '');
      setYourRoleError(yourRole.trim() === '' ? 'error' : '');

      // Affiche un message d'erreur global
      setError('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    // Réinitialise le message d'erreur s'il était précédemment affiché
    setError('');

    // Appelle la fonction onNext et transmet les données au composant parent
    onNext({
      firstName,
      lastName,
      companyName,
      email,
      phoneNumber,
      yourJob,
      yourRole,
    });
  };
 
  
  return (
    <div className="containers" id="container">
      <div className="cv-image">
        <img src={image} alt="Signup" className="displaySteps" />
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
          <span className='Span2_entreprise'>Trainings and Diplomas </span>
        </div>
      </div>
      <div className="stepContainers" id="stepContainers">
        <div className="affichStep_entreprise">
          <div className="stepInfo_entreprise" id="stepInfo_entreprise">
            <div><h2>Personal Information</h2></div>

            <label>First name</label>
            <div>
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className={firstNameError} />
            </div>

            <label>Last name</label>
            <div>
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className={lastNameError} />
            </div>

            <label>Company name</label>
            <div>
              <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className={companyNameError} />
            </div>

            <label>Email Address</label>
            <div>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={emailError} />
            </div>

            <label>Phone Number</label>
            <div>
              <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className={phoneNumberError} />
            </div>

            <label>Your Job</label>
            <div>
              <select value={yourJob} onChange={(e) => setYourJob(e.target.value)} className={yourJobError}>
                <option value="">Select...</option>
                <option value="developer">Developer</option>
                <option value="hr">HR</option>
              </select>
            </div>

            <label>Your Role</label>
            <div>
              <select value={yourRole} onChange={(e) => setYourRole(e.target.value)} className={yourRoleError}>
                <option value="">Select Role</option>
                <option value="frontend-developer">Frontend Developer</option>
                <option value="service-manager">Service Manager</option>
              </select>
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



