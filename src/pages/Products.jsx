
import React from 'react';
import { Link } from 'react-router-dom';
import { getOrderStatus } from '../lib/helpers';
import '../Admin.css'
const allUsersData = [
	{ id: '1', user_id: '23143', name: 'Shirley A. Lape', email: 'shirley@example.com', telephone: '555-1234', offers_applied: '10% off' },
	{ id: '2', user_id: '96453', name: 'Ryan Carroll', email: 'ryan@example.com', telephone: '555-5678', offers_applied: '15% off' },
	{ id: '3', user_id: '65345', name: 'Mason Nash', email: 'mason@example.com', telephone: '555-9876', offers_applied: '20% off' },
	{ id: '4', user_id: '87832', name: 'Luke Parkin', email: 'luke@example.com', telephone: '555-4321', offers_applied: '5% off' },
	{ id: '5', user_id: '09832', name: 'Anthony Fry', email: 'anthony@example.com', telephone: '555-8765', offers_applied: '25% off' },
	// Add more users
	{ id: '6', user_id: '12345', name: 'Emma Thompson', email: 'emma@example.com', telephone: '555-1111', offers_applied: '12% off' },
	{ id: '7', user_id: '67890', name: 'Oliver Wilson', email: 'oliver@example.com', telephone: '555-2222', offers_applied: '18% off' },
	{ id: '8', user_id: '34567', name: 'Sophia Davis', email: 'sophia@example.com', telephone: '555-3333', offers_applied: '8% off' },
	{ id: '9', user_id: '45678', name: 'Ethan Johnson', email: 'ethan@example.com', telephone: '555-4444', offers_applied: '22% off' },
	{ id: '10', user_id: '56789', name: 'Ava Smith', email: 'ava@example.com', telephone: '555-5555', offers_applied: '14% off' },
	// Continue adding more users as needed
  ];
  

export default function AllUsers() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">All Users</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Offers Applied</th>
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
                <td>{getOrderStatus(user.offers_applied)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

