import React, { useState, useEffect } from 'react';
import image from '../../../images/imgs.png';
import './entreprise2.css';

const FormEnt2 = ({ onNext, data, onBack }) => {
  const [size, setSize] = useState('');
  const [domain, setDomain] = useState('');
  const [sector, setSector] = useState('');
  const [type, setType] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [error, setError] = useState('');
  const [sizeError, setSizeError] = useState('');
  const [domainError, setDomainError] = useState('');
  const [sectorError, setSectorError] = useState('');
  const [typeError, setTypeError] = useState('');

  useEffect(() => {
    // Met à jour l'état lorsque la propriété data change
    if (data) {
      setSize(data.size || '');
      setDomain(data.domain || '');
      setSector(data.sector || '');
      setType(data.type || '');
      setCompanyDescription(data.companyDescription || '');
    }
  }, [data]);
  const handleNext = () => {
    // Reset error classes
    setSizeError('');
    setDomainError('');
    setTypeError('');
    setSectorError('');;

    // Check if all required fields are filled
    if (
      size.trim() === '' ||
      type.trim() === '' ||
      domain.trim() === '' ||
      sector.trim() === '' ||
      companyDescription.trim() === ''
    ) {
      // Set error classes for missing fields
      setSizeError(size.trim() === '' ? 'error' : '');
      setTypeError(type.trim() === '' ? 'error' : '');
      setDomainError(domain.trim() === '' ? 'error' : '');
      setSectorError(sector.trim() === '' ? 'error' : '');

      // Display an alert for missing fields
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    // Reset the error message if it was previously displayed
    setError('');

    // Call the onNext function and pass the data to the parent component
    onNext({
      size,
      domain,
      type,
      sector,
      companyDescription,
    });
  };



  const handleBack = () => {
    onBack();
  };
  return (
    <div className="container1" id="container">
      <div className="cv-image">
        <img src={image} alt="Signup" className="displayStep" />
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
          <span className='Span2_entreprise'> Company Details </span>
        </div>
      </div>
      <div className="stepContainers" id="stepContainers">
        <div className="affichStep_entreprise2">
          <div className="stepInfo_entreprise2" id="stepInfo_entreprise2">
            <div><h2> Company details </h2></div>

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

            <label>Sector </label>
            <div>
              <input type="text" value={sector} onChange={(e) => setSector(e.target.value)} className={sectorError} />
            </div>
            <label>Type </label>
            <div>
              <input type="text" placeholder='startup' value={type} onChange={(e) => setType(e.target.value)} className={typeError} />
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



