import React, { useState } from 'react';
import image from '../../../images/imgs.png';
import { Link, useNavigate } from 'react-router-dom';
import './Interests.css';

const InterestsPage = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const interestsList = [
    'Artificial Intelligence ',
    'Data Science',
    'Cyber security',
    'Cloud computing',
    'Network',
    'Graphic Design',
    'Information System',
    'Databases ',
    'Software Engineering',
  ];

  const navigate = useNavigate();

  const handleInterestChange = (interest) => {
    // Toggle the selection of interests
    if (selectedInterests.includes(interest)) {
      setSelectedInterests((prevInterests) =>
        prevInterests.filter((item) => item !== interest)
      );
    } else {
      setSelectedInterests((prevInterests) => [...prevInterests, interest]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the selected interests here (e.g., send them to the server)
    console.log('Selected Interests:', selectedInterests);

    // Redirect programmatically to '/pageAcceuil'
    navigate('/pageAcceuil');
  };

  const isButtonDisabled = selectedInterests.length < 3;
  return (
    <div className="containers7" >
      <div className="cv-image">
        <img src={image} alt="Signup" className="displayStep" />
      </div>
      <div className="circle_interests">
        <div className="circle6" id="circle1">
          <p>1</p>
        </div>
        <div className="circle2" id="circle2">
          <p>2</p>
        </div>
        <div className="circle3" id="circle3">
          <p>3</p>
        </div>
        <div className="circle4" id="circle4">
          <p>4</p>
        </div>
        <div className="circle5" id="circle5">
          <p>5</p>
        </div>
        <div className="circle6" id="circle6">
          <p>6</p>
        </div>
      </div>
      <div className="steps_interests">
        <div className="step1">
          <p>STEP 1</p>
          <span className="Span11">Personal Information</span>
        </div>
        <div className="step1">
          <p>STEP 2</p>
          <span className="Span222">Trainings and Diplomas</span>
        </div>
        <div className="step1">
          <p>STEP 3</p>
          <span className="Span333">Professional Experience</span>
        </div>
        <div className="step1">
          <p>STEP 4</p>
          <span className="Span444">Skills & Languages</span>
        </div>
        <div className="step1">
          <p>STEP 5</p>
          <span className="Span555">Projects</span>
        </div>
        <div className="step1">
          <p>STEP 6</p>
          <span className="Span666">Rewards</span>
        </div>
      </div>

      <div className="affichSteps_thank">
        <div className='StepThankYouu'>


          <h2> Congratulation! Your account has been successfully created </h2>
          <p>  "Explore all platform features, refine your search criteria,
            and use our tools to enhance your chances of finding the perfect internship."
          </p>

          <h3>Choose Your Areas of Interest :</h3>
        </div>
        <div className='choix'>
          <form onSubmit={handleSubmit}>
            {interestsList.map((interest) => (
              <div key={interest}>
                <input
                  type="checkbox"
                  id={interest}
                  value={interest}
                  checked={selectedInterests.includes(interest)}
                  onChange={() => handleInterestChange(interest)}
                />
                <label htmlFor={interest}>{interest}</label>
              </div>
            ))}

          </form>
          <div className='thank_but'>
            <Link to='/page'>
              <button type="submit" disabled={isButtonDisabled} className='button_thank'>
                Submit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default InterestsPage;
