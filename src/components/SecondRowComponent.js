import React, { useState } from 'react';
import './SecondRowComponent.css';

const SecondRowComponent = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const saveData = () => {
    // Logic to save user data
  };

  return (
    <div className="row">
      <div className="col-6 user-info">
        <h3>User Information</h3>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <p>{username}</p>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <p>{id}</p>
        </div>
        <button className="btn" onClick={saveData}>Save</button>
      </div>
      <div className="col-6">
        {/* Form Component */}
        {/* <UserDataForm /> */}
      </div>
    </div>
  );
};

export default SecondRowComponent;
