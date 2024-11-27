import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminSignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your authentication logic here
    if (username === 'admin' && password === 'admin123') {
      // Successful sign-in logic (you might want to redirect or set a state indicating admin is signed in)
      console.log('Admin signed in successfully');
      setError('');
    } else {
      // Display an error message for unsuccessful sign-in
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex justify-center items-center mt-40">
      <form className="w-96 h-full p-6 bg-indigo-50  rounded shadow-xl" onSubmit={handleSubmit}>
        <h2 className="text-2xl text-indigo-900 font-semibold mb-4">Admin Sign In</h2>

        {error && (
          <div className="mb-4 text-red-500">
            <p>{error}</p>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            className="w-full border p-2 rounded"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        <Link to="/dashboard">
          <button
            type="submit"
            className="w-full h-12 bg-indigo-900  text-white rounded hover:bg-blue-600"
          >
            Sign In
          </button>
        </Link>
      </form>
    </div>
  );
};

export default AdminSignIn;
