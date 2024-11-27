import React, { useState } from 'react';
import StepOne from '../Cv/StepOne/StepOne';
import StepTwo from '../Cv/StepTwo/StepTwo';
import StepThree from '../Cv/StepThree/StepThree';
import StepFour from '../Cv/StepFour/StepFour';
import StepFive from './StepFive/StepFive';
import StepSix from './StepSix/StepSix';
import InterestsPage from './InterestsPage/InterestsPage';



const Cv = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(Array(6).fill({})); // Array to store data for each step

  const handleNext = (data) => {
    console.log('Handling Next:', data);
    setFormData((prevData) => {
      const newData = [...prevData];
      newData[currentStep - 1] = data; // Store data for the current step
      return newData;
    });

    if (currentStep < 8) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      console.log('Form submitted:', formData);
      // Handle form submission logic here
    }
  };

  const handleBack = () => {
    console.log('Handling Back');
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne onNext={handleNext} data={formData[0]} />;
      case 2:
        return <StepTwo onNext={handleNext} onBack={handleBack} data={formData[1]} />;
      case 3:
        return <StepThree onNext={handleNext} onBack={handleBack} data={formData[2]} />;
      case 4:
        return <StepFour onNext={handleNext} onBack={handleBack} data={formData[3]} />;
      case 5:
        return <StepFive onNext={handleNext} onBack={handleBack} data={formData[4]} />;
      case 6:
        return <StepSix onNext={handleNext} onBack={handleBack} data={formData[5]} />;
      case 7:
        return <InterestsPage />;

      default:
        return null;
    }
  };

  console.log('Rendering Cv:', currentStep);

  return <div>{renderCurrentStep()}</div>;
};

export default Cv;

