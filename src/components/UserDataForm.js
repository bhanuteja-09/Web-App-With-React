// UserDataForm.js

import React, { useState } from 'react';

const UserDataForm = () => {
  const [userData, setUserData] = useState({
    id: '',
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = generateUserId(); // Implement your logic for generating user ID
    // Save data to local storage or Redux Toolkit
    localStorage.setItem(userId, JSON.stringify(userData));
    // Clear form data after submission
    setUserData({
      id: '',
      name: '',
      address: '',
      email: '',
      phone: '',
    });
  };

  const generateUserId = () => {
    // Implement your logic for generating unique user ID
    return 'userId'; // Example: You can use UUID library or timestamp
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={userData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="address"
        value={userData.address}
        onChange={handleChange}
        placeholder="Address"
      />
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="tel"
        name="phone"
        value={userData.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserDataForm;
