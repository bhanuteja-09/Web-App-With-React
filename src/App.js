// App.js

import React, { useState } from 'react';
import Counter from './components/Counter'; // Import the Counter component
import RichTextEditor from './components/RichTextEditor';
import UserDataForm from './components/UserDataForm'; // Import the UserDataForm component
import './App.css'; // Import the CSS file
import SecondRowComponent from './components/SecondRowComponent';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="counter-box">
        <Counter count={count} setCount={setCount} />
      </div>
      <div className="editor-box">
        <RichTextEditor />
      </div>
      <div className="form-container">
        <div className="form-box">
        <UserDataForm />
        </div>
        <div className="user-box">
        <SecondRowComponent />
        </div>
      </div>
    </div>
  );
};

export default App;
