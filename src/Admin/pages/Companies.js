import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Register from './Register';
import { FaTrash, FaEdit, FaUserPlus } from 'react-icons/fa';
import './Admin.css';

const userData = [
  {
    id: '1',
    user_id: '23143',
    user_name: 'Shirley A. Lape',
    company_name: 'ABC Company',
    email: 'shirley@example.com',
    posted_offers: '55',
  },
  {
    id: '2',
    user_id: '23143',
    user_name: 'Ryan Carroll',
    company_name: 'XYZ Corporation',
    email: 'ryan@example.com',
    posted_offers: '8',
  },
  {
    id: '3',
    user_id: '23143',
    user_name: 'Shirley A. Lape',
    company_name: 'ABC Company',
    email: 'shirley@example.com',
    posted_offers: '34',
  },
  {
    id: '4',
    user_id: '23143',
    user_name: 'Ryan Carroll',
    company_name: 'XYZ Corporation',
    email: 'ryan@example.com',
    posted_offers: '78',
  },
  {
    id: '5',
    user_id: '23143',
    user_name: 'Shirley A. Lape',
    company_name: 'ABC Company',
    email: 'shirley@example.com',
    posted_offers: '12',
  },
  {
    id: '6',
    user_id: '23143',
    user_name: 'Ryan Carroll',
    company_name: 'XYZ Corporation',
    email: 'ryan@example.com',
    posted_offers: '56',
  },
  // Add more users as needed
];

const Companies = ({ handleDelete, handleEdit }) => {
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
        <strong className="text-indigo-900 font-bold"> All Companies </strong>
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
              <th>User ID</th>
              <th>User Name</th>
              <th>Company Name</th>
              <th>Email</th>
              <th>Posted Offers</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <Link to={`/companies/${user.user_id}`}>#{user.user_id}</Link>
                </td>
                <td>{user.user_name}</td>
                <td>{user.company_name}</td>
                <td>{user.email}</td>
                <td>{user.posted_offers}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    <FaTrash />
                  </button>
                  <button
                    onClick={() => handleEdit(user.id)}
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

export default Companies;
