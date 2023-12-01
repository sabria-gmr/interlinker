import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cv from './components/Cv/Cv';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import EnseignantForm from './components/Enseignant/EnseignantForm';
import EnterpriseForm from './components/Entreprise/EntrepriseForm';

const App = () => {
  return (
    <div className="App">
      <header className='App-header'>
        <h1>interlinker</h1>

        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={Signup} /> 
            <Route path="/student-cv" component={Cv}/>
            <Route path="/professor-form" component={EnseignantForm} />
            <Route path="/company-form" component={EnterpriseForm} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;






// import React from 'react';

// import './App.css'; // Assurez-vous de spécifier le bon chemin vers le fichier CSS
// import StepOne from './components/Cv/StepOne/StepOne'
//  import StepTwo from './components/Cv/StepTwo/StepTwo'
// import Login from './components/login/Login'
//  import StepThree from './components/Cv/StepThree/StepThree';
//  import StepFour from './components/Cv/StepFour/StepFour';
//  import StepFive from './components/Cv/StepFive/StepFive'
//  import StepSix from './components/Cv/StepSix/StepSix'
//  import FormEns1 from './components/Enseignant/FormEns1/FormEns1';
//  import FormEns2 from './components/Enseignant/FormEns2/FormEns2';
//  import FormEns3 from './components/Enseignant/FormEns3/FormEns3';
//  import Cv from './components/Cv/Cv';
//  import FormEnt1 from './components/Entreprise/FormEnt1/FormEnt1';
//  import FormEnt2 from './components/Entreprise/FormEnt2/FormEnt2';
// import EnterpriseForm from './components/Entreprise/EntrepriseForm';
// import EnseignantForm from './components/Enseignant/EnseignantForm'
// import Thank from './components/Enseignant/Thank/Thank';
// import ThankEnt from './components/Entreprise/ThankEnt/ThankEnt';


//  function App() {
//    return (
//      <div className="App">
//        <div className="container">
//        <EnterpriseForm/>
//        </div>
//      </div>
//    );
//  }

//  export default App;






























