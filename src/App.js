// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Layout from './component/shared/Layout'
// import Register from './pages/Register'
// import Dashboard from './pages/Dashboard'
// import Products from './pages/Products'
// import './App.css'
// import './index.css'

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Layout />}>
//                     <Route index element={<Dashboard />} />
//                     <Route path="users" element={<Products />} />
//                 </Route>
//                 <Route path="/register" element={<Register />} />
//             </Routes>
//         </Router>
//     )
// }

// export default App











import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from  './component/DashboardStatsGrid'
import ForgotPassword from './components/login/ForgotPassord';


function App() {



  return (
    <Router>
      <div className='grid-container'>
        <ForgotPassword/>
      </div>
    </Router>
  );
}

export default App;

// import React from 'react';
// import Cv from './components/Cv/Cv';
// import Signup from './components/signup/Signup';
// import Login from './components/login/Login';
// import EnseignantForm from './components/Enseignant/EnseignantForm';
// import EnterpriseForm from './components/Entreprise/EntrepriseForm';
// import './App.css';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import StepFour from './components/Cv/StepFour/StepFour';
// import StepOne from './components/Cv/StepOne/StepOne';
// import StepTwo from './components/Cv/StepTwo/StepTwo';
// import StepThree from './components/Cv/StepThree/StepThree';


// const App = () => {
//   return (
//     <div className="App">
//       <header className='App-header'>
//         <Router>
//           <Routes>
//             <Route path="/" element={<StepFour />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/student-cv" element={<Cv />} />
//             <Route path="/professor-form" element={<EnseignantForm />} />
//             <Route path="/company-form" element={<EnterpriseForm />} />
//           </Routes>
//         </Router>
//       </header>
//     </div>
//   );
// }
// export default App;







// import axios from 'axios';
// import React from 'react';

// class App extends React.Component {

//   state ={ details: [],}

//  componentDidMount(){
//   let data ;
//   axios.get('http://localhost:8000')
//   .then(res => {
//     data =res.data ;
//     this.setState({
//       details : data
//     });
//   })
//   .catch(err => { })
//  }


//  render (){
//   return (
//     <div>
//       <header>Data generated from django</header>
//       <hr></hr>
//       {this.state.details.map((output  , id) => (
//         <div key={id}>
//           <div>
//           <h2>{output.name}</h2>
//           </div>
//         </div>
//       ))}
//     </div>

//   )
//  }
// }

// export default App;
