import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Importez l'icône X

const Register = () => {
  const [showRegister, setShowRegister] = useState(true);
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour traiter les données d'inscription
    console.log('Role:', role);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    // Fermez le formulaire après la soumission
    setShowRegister(false);
  };

  const handleCancel = () => {
    // Ajoutez ici la logique pour annuler l'inscription
    setShowRegister(false);
  };

  return (
    <div className="flex justify-center items-center">
      {/* Formulaire d'inscription comme pop-up (modal) */}
      {showRegister && (
        <div className="fixed top-0 left-0 w-full  flex justify-center items-center">
          <div className="absolute top-0 left-0 w-full  bg-black opacity-50" onClick={() => setShowRegister(false)}></div>
          <div className="w-96 p-6 bg-gray-100 rounded shadow-md z-10 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={handleCancel}
            >
              <FaTimes />
            </button>
            <h2 className="text-2xl font-semibold mb-4">Inscription</h2>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
              <select
                className="w-full border p-2 rounded"
                value={role}
                onChange={handleRoleChange}
                required
              >
                <option value="">select a role</option>
                <option value="student">Student</option>
                <option value="company">Company</option>
                <option value="teacher">Professor</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">user name</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">E-mail</label>
              <input
                type="email"
                className="w-full border p-2 rounded"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">passeword</label>
              <input
                type="password"
                className="w-full border p-2 rounded"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mr-2"
                onClick={handleSubmit}
              >
                Add
              </button>
              <button
                className="bg-gray-300 text-gray-700 p-2 rounded hover:bg-gray-400"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
