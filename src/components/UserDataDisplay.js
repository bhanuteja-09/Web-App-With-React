import React, { useState, useEffect } from 'react';

const UserDataDisplay = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const userDataFromStorage = JSON.parse(localStorage.getItem('userData'));
    if (userDataFromStorage) {
      setUserData(prevUserData => ({
        ...prevUserData,
        ...userDataFromStorage
      }));
    }
  }, []);

  return (
    <div>
      <h2>User Data</h2>
      <p>Name: {userData.name}</p>
      <p>Address: {userData.address}</p>
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>
    </div>
  );
};

export default UserDataDisplay;
