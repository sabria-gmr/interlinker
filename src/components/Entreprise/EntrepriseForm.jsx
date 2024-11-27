// EnterpriseForm.js

import React, { useState } from 'react';
import FormEnt1 from './FormEnt1/FormEnt1';  // Assuming the correct path
import FormEnt2 from './FormEnt2/FormEnt2';  // Assuming the correct path
import ThankEnt from './ThankEnt/ThankEnt';  // Assuming the correct path

const EnterpriseForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(Array(2).fill({}));

  const handleNext = (data) => {
    console.log('Handling Next:', data);
    setFormData((prevData) => {
      const newData = [...prevData];
      newData[currentStep - 1] = data;
      return newData;
    });

    if (currentStep < 3) {
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
        return <FormEnt1 onNext={handleNext} data={formData[0]} />;
      case 2:
        return <FormEnt2 onNext={handleNext} onBack={handleBack} data={formData[1]} />;
      case 3:
        return <ThankEnt />;
      default:
        return null;
    }
  };

  console.log('Rendering Enterprise Form:', currentStep);

  return <div>{renderCurrentStep()}</div>;
};

export default EnterpriseForm;
