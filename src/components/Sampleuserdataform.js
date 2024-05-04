import React, { useState } from 'react';
import './UserDataForm.css'; // Import CSS file for styling

const UserDataForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
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

    // Clear validation error when user starts typing again
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    let isValid = true;
    const newErrors = {
      name: '',
      address: '',
      email: '',
      phone: '',
    };

    if (!userData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!userData.address.trim()) {
      newErrors.address = 'Address is required';
      isValid = false;
    }

    if (!userData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(userData.email.trim())) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!userData.phone.trim()) {
      newErrors.phone = 'Phone is required';
      isValid = false;
    } else if (!isValidPhone(userData.phone.trim())) {
      newErrors.phone = 'Invalid phone number format';
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    // Form is valid, handle form submission
    const userId = generateUserId();
    saveUserData(userId);
    clearFormData();
  };

  const isValidEmail = (email) => {
    // Simple email format validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    // Simple phone number format validation using regex
    const phoneRegex = /^\d{10}$/; // Assumes 10 digit phone number
    return phoneRegex.test(phone);
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
        {errors.name && <p className="error-message">{errors.name}</p>}
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
        {errors.address && <p className="error-message">{errors.address}</p>}
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
        {errors.email && <p className="error-message">{errors.email}</p>}
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
        {errors.phone && <p className="error-message">{errors.phone}</p>}
      </div>
      <button type="submit" className="submit-btn">
        Add User
      </button>
    </form>
  );
};

export default UserDataForm;
