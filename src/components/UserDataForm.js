import React, { useState } from 'react';
import './UserDataForm.css'; // Import CSS file for styling

const UserDataForm = () => {
  const [userData, setUserData] = useState({
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
    const userId = generateUserId();
    saveUserData(userId);
    clearFormData();
  };

  const generateUserId = () => {
    // Implement your logic for generating unique user ID
    return 'userId'; // Example: You can use UUID library or timestamp
  };

  const saveUserData = (userId) => {
    localStorage.setItem(userId, JSON.stringify(userData));
  };

  const clearFormData = () => {
    setUserData({
      name: '',
      address: '',
      email: '',
      phone: '',
    });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>Add New User</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={userData.address}
          onChange={handleChange}
          placeholder="Enter your address"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />
      </div>
      <button type="submit" className="submit-btn">Add User</button>
    </form>
  );
};

export default UserDataForm;
