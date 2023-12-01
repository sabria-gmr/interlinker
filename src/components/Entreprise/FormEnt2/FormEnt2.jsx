import React, { useState, useEffect } from 'react';
import image from '../../../images/imgs.png';
import './entreprise2.css';

const FormEnt2 = ({ onNext, data, onBack }) => {
  const [size, setSize] = useState('');
  const [domain, setDomain] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [error, setError] = useState('');
  const [sizeError, setSizeError] = useState('');
  const [domainError, setDomainError] = useState('');
  const [locationError, setLocationError] = useState('');
  const [websiteError, setWebsiteError] = useState('');

  useEffect(() => {
    // Met à jour l'état lorsque la propriété data change
    if (data) {
      setSize(data.size || '');
      setDomain(data.domain || '');
      setLocation(data.location || '');
      setWebsite(data.website || '');
      setCompanyDescription(data.companyDescription || '');
    }
  }, [data]);

  const handleNext = () => {
    // Réinitialise les classes d'erreur
    setSizeError('');
    setDomainError('');
    setLocationError('');
    setWebsiteError('');

    // Vérifie que tous les champs obligatoires sont renseignés
    if (
      size.trim() === '' ||
      domain.trim() === '' ||
      location.trim() === '' ||
      website.trim() === '' ||
      companyDescription.trim() === ''
    ) {
      // Définis les classes d'erreur pour les champs manquants
      setSizeError(size.trim() === '' ? 'error' : '');
      setDomainError(domain.trim() === '' ? 'error' : '');
      setLocationError(location.trim() === '' ? 'error' : '');
      setWebsiteError(website.trim() === '' ? 'error' : '');
      // Affiche un message d'erreur global
      setError('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    // Réinitialise le message d'erreur s'il était précédemment affiché
    setError('');

    // Appelle la fonction onNext et transmet les données au composant parent
    onNext({
      size,
      domain,
      location,
      website,
      companyDescription,
    });
  };

  const handleBack = () => {
    onBack();
  };
  return (
    <div className="containers" id="container">
      <div className="cv-image">
        <img src={image} alt="Signup" className="displaySteps" />
      </div>
      <div className="circle_entreprise2">
        <div className="circle12" id="circle12">
          <p>1</p>
        </div>
        <div className="circle22" id="circle22">
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
        <div className="affichStep_entreprise2">
          <div className="stepInfo_entreprise2" id="stepInfo_entreprise2">
            <div><h2>Company details</h2></div>

            <label>Size of Company</label>
            <div>
              <input type="number" value={size} onChange={(e) => setSize(e.target.value)} className={sizeError} />
            </div>

            <label>Domain</label>
            <div>
              <select value={domain} onChange={(e) => setDomain(e.target.value)} className={domainError}>
                <option value="">Select...</option>
                <option value="developement">Developpment</option>
                <option value="reseaux">reseaux
                </option>
              </select>
            </div>

            <label>Company Location </label>
            <div>
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className={locationError
            } />
            </div>

            <label>Company Website </label>
            <div>
              <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} className={websiteError
            } />
            </div>

            <label>Company Description </label>
          <div className="cv">
            <textarea
              value={companyDescription}
              onChange={(e) => setCompanyDescription(e.target.value)}
              className="textarea-styled"
            />
          </div>
          <div className="buttonContainerEnt2">
          <button onClick={handleBack} className="goBack">Go back</button>
           <button onClick={handleNext} className="nextStep">Next Step</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormEnt2;



