import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/signup/Signup';

import Cv from './components/Cv/Cv';
import EnseignantForm from './components/Enseignant/EnseignantForm';
import EnterpriseForm from './components/Entreprise/EntrepriseForm';
import PageAcceuil from './Pages/PageAcceuil';

import Login from './components/login/Login'

import InterestsPage from './components/Cv/InterestsPage/InterestsPage';

import './Styles/Style.css'

// import NavBar from './components/Acceuil/NavBar';
// import StepOne from './components/Cv/StepOne/StepOne';
// import StepTwo from './components/Cv/StepTwo/StepTwo';
// import FormEns1 from './components/Enseignant/FormEns1/FormEns1';
// import FormEnt1 from './components/Entreprise/FormEnt1/FormEnt1';
// import FormEnt2 from './components/Entreprise/FormEnt2/FormEnt2';
// import Thank from './components/Entreprise/ThankEnt/ThankEnt';


const App = () => {
  return (
    <Router>

      <Routes>

        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student-cv" element={<Cv />} />
        <Route path="/professor-form" element={<EnseignantForm />} />
        <Route path="/company-form" element={<EnterpriseForm />} />
        <Route path="/interests-page" element={<InterestsPage />} />
        <Route path="/page" element={<PageAcceuil />} />
        
      </Routes>

    </Router>
  );
};
export default App
