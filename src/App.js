// App.js

import React, { useState } from 'react';
import Counter from './components/Counter'; // Import the Counter component
import RichTextEditor from './components/RichTextEditor';
import UserDataForm from './components/UserDataForm'; // Import the UserDataForm component
import './App.css'; // Import the CSS file

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
        <UserDataForm />
      </div>
    </div>
  );
};

export default App;
