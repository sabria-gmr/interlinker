import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Register from './Register';
import { FaTrash, FaEdit, FaUserPlus } from 'react-icons/fa';
import './Admin.css';

const offerData = [
  {
    id: '1',
    offer_id: '234567',
    offer_domain: 'security',
    applied: '3',

  },
  {
    id: '2',
    offer_id: '234567',
    offer_domain: 'security',
    applied: '3',

  },
  {
    id: '3',
    offer_id: '234567',
    offer_domain: 'security',
    applied: '3',

  },
  {
    id: '4',
    offer_id: '234567',
    offer_domain: 'security',
    applied: '3',

  },
  {
    id: '5',
    offer_id: '234567',
    offer_domain: 'security',
    applied: '3',

  },
  {
    id: '6',
    offer_id: '234567',
    offer_domain: 'security',
    applied: '3',

  },
  {
    id: '7',
    offer_id: '234567',
    offer_domain: 'security',
    applied: '3',

  },
];

const Offers = ({ handleDelete, handleEdit }) => {
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
        <strong className="text-indigo-900 font-bold">All Offers</strong>
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
              <th>Offer ID</th>
              <th>Offer Domain</th>
              <th>Applied</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {offerData.map((offer) => (
              <tr key={offer.id}>
                <td>{offer.id}</td>
                <td>
                  <Link to={`/offers/${offer.offer_id}`}>#{offer.offer_id}</Link>
                </td>
                <td>{offer.offer_domain}</td>
                <td>{offer.applied}</td>
                <td>
                  <button
                    onClick={() => handleDelete(offer.offer_id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    <FaTrash />
                  </button>
                  <button
                    onClick={() => handleEdit(offer.offer_id)}
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

export default Offers;
