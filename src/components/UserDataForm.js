import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDataForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const handleSubmit = event => {
    event.preventDefault();
    // Save form data to local storage or dispatch to Redux
    navigate('/');
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <input type="text" name="address" value={formData.address} onChange={handleChange} />
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserDataForm;
