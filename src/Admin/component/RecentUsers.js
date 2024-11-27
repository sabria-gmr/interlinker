import React from 'react'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'
import "tailwindcss/tailwind.css"
import '../pages/Admin.css'



const recentUsersData = [

		{ 
			id : '1',
			user_id: '23143',
			name: 'Shirley A. Lape',
		    email: 'shirley@example.com',
		    telephone: '555-1234', 
			offers_applied: '10% off'
		 },
		{ id : '2',user_id: '96453', name: 'Ryan Carroll', email: 'ryan@example.com', telephone: '555-5678', offers_applied: '15% off' },
		{ id : '3',user_id: '65345', name: 'Mason Nash', email: 'mason@example.com', telephone: '555-9876', offers_applied: '20% off' },
		{ id : '4',user_id: '87832', name: 'Luke Parkin', email: 'luke@example.com', telephone: '555-4321', offers_applied: '5% off' },
		{ id : '5',user_id: '09832', name: 'Anthony Fry', email: 'anthony@example.com', telephone: '555-8765', offers_applied: '25% off' },
	  
	  
]

export default function RecentUsers() {
	return (
	  <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
		<strong className="text-gray-700 font-medium">Recent Users</strong>
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
			  {recentUsersData.map((user) => (
				<tr key={user.id}>
				  <td>{user.id}</td>
				  <td>
					<Link to={`/customer/${user.user_id}`}>#{user.user_id}</Link>
				  </td>
				  <td>
					<Link to={`/customer/${user.user_id}`}>{user.name}</Link>
				  </td>
				  {/* <td>{format(new Date(user.order_date), 'dd MMM yyyy')}</td> */}
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