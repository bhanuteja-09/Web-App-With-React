import React, { useState } from 'react';
import UserDataForm from './UserDataForm';

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
      <div className="col-6">
        <h3>User Information</h3>
        <p>Username: {username}</p>
        <p>Name: <input type="text" value={name} onChange={handleNameChange} /></p>
        <p>ID: {id}</p>
        <button onClick={saveData}>Save</button>
      </div>
      <div className="col-6">
        {/* Form Component */}
        {/* <UserDataForm /> */}
      </div>
    </div>
  );
};

export default SecondRowComponent;
