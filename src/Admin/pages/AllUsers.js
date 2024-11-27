import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Register from './Register';
import { FaTrash, FaEdit, FaUserPlus } from 'react-icons/fa'; // Importez les icônes
import './Admin.css';

const allUsersData = [
  { id: '1', user_id: '23143', name: 'Shirley A. Lape', email: 'shirley@example.com', telephone: '555-1234', offers_applied: '10% off', role: 'student' },
  { id: '2', user_id: '96453', name: 'Ryan Carroll', email: 'ryan@example.com', telephone: '555-5678', offers_applied: '15% off', role: 'teacher' },
  { id: '3', user_id: '65345', name: 'Mason Nash', email: 'mason@example.com', telephone: '555-9876', offers_applied: '20% off', role: 'student' },
  { id: '4', user_id: '87832', name: 'Luke Parkin', email: 'luke@example.com', telephone: '555-4321', offers_applied: '5% off', role: 'teacher' },
  { id: '5', user_id: '09832', name: 'Anthony Fry', email: 'anthony@example.com', telephone: '555-8765', offers_applied: '25% off', role: 'company' },
  { id: '6', user_id: '12345', name: 'Emma Thompson', email: 'emma@example.com', telephone: '555-1111', offers_applied: '12% off', role: 'student' },
  { id: '7', user_id: '67890', name: 'Oliver Wilson', email: 'oliver@example.com', telephone: '555-2222', offers_applied: '18% off', role: 'teacher' },
  { id: '8', user_id: '34567', name: 'Sophia Davis', email: 'sophia@example.com', telephone: '555-3333', offers_applied: '8% off', role: 'student' },
  { id: '9', user_id: '45678', name: 'Ethan Johnson', email: 'ethan@example.com', telephone: '555-4444', offers_applied: '22% off', role: 'teacher' },
  { id: '10', user_id: '56789', name: 'Ava Smith', email: 'ava@example.com', telephone: '555-5555', offers_applied: '14% off', role: 'company' },
];

const AllUsers = ({ handleDelete, handleEdit }) => {
  const [showRegister, setShowRegister] = useState(false);

  const handleToggleRegister = () => {
    setShowRegister(!showRegister);
  };

  const handleAddUser = () => {
    // Ajoutez la logique pour gérer l'ajout d'un nouvel utilisateur
    console.log('Add User clicked');
    handleToggleRegister(); // Fermez la fenêtre pop-up d'inscription après avoir implémenté la logique d'ajout d'utilisateur
  };

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <div className="flex justify-between items-center mb-3">
        <strong className="text-indigo-900 font-bold">All Users</strong>
        
          
         <button
          onClick={handleAddUser} // Utilisez handleAddUser pour afficher le formulaire
          className="bg-indigo-700 w-12 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded"
        >
          <FaUserPlus className=" mr-2 " />
        
        </button>
        </div>
   
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>ID</th>
              <th>ID utilisateur</th>
              <th>Nom d'utilisateur</th>
              <th>Email</th>
              <th>Numéro de téléphone</th>
              <th>Offres appliquées</th>
              <th>Rôle</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allUsersData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <Link to={`/users/${user.user_id}`}>#{user.user_id}</Link>
                </td>
                <td>
                  <Link to={`/users/${user.user_id}`}>{user.name}</Link>
                </td>
                <td>{user.email}</td>
                <td>{user.telephone}</td>
                <td>{user.offers_applied}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user.user_id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    <FaTrash />
                  </button>
                  <button
                    onClick={() => handleEdit(user.user_id)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    <FaEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Affiche le formulaire d'inscription en tant que pop-up */}
      {showRegister && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div
            className=" top-0 left-0 w-full h-full bg-black opacity-50"
            onClick={handleToggleRegister}
          ></div>
         
            <Register />
          
        </div>
      )}
    </div>
  );
};

export default AllUsers;
