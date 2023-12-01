// EnseignantForm.js

import React, { useState } from 'react';
import FormEns1 from './FormEns1/FormEns1';  // Assuming the correct path
import FormEns2 from './FormEns2/FormEns2';  // Assuming the correct path
import FormEns3 from './FormEns3/FormEns3';  // Assuming the correct path
import Thank from './Thank/Thank';  // Assuming the correct path


const EnseignantForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(Array(4).fill({})); // Updated to accommodate the new step

  const handleNext = (data) => {
    console.log('Handling Next:', data);
    setFormData((prevData) => {
      const newData = [...prevData];
      newData[currentStep - 1] = data;
      return newData;
    });

    if (currentStep < 5) { // Updated to the total number of steps (4 + 1)
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
        return <FormEns1 onNext={handleNext} data={formData[0]} />;
      case 2:
        return <FormEns2 onNext={handleNext} onBack={handleBack} data={formData[1]} />;
      case 3:
        return <FormEns3 onNext={handleNext} onBack={handleBack} data={formData[2]} />;
      case 4:
        return <Thank onBack={handleBack} />;
      default:
        return null;
    }
  };

  console.log('Rendering Enseignant Form:', currentStep);

  return <div>{renderCurrentStep()}</div>;
};

export default EnseignantForm;
