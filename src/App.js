import React, { useState } from 'react';
import Counter from './components/Counter'; // Import the Counter component
import RichTextEditor from './components/RichTextEditor';
import './App.css'; // Import the CSS file

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container" > {/* Container for the layout */}
      <div className="counter-box" style={{ width: '60%' }}> {/* Directly apply the width */}
        {/* <div className="counter-background" style={{ height: `${count * 10}px`, width: '100%' }}> */}
          <Counter count={count} setCount={setCount} />
        {/* </div> */}
      </div>
      <div className="editor-box" style={{ width: '40%' }}> {/* Directly apply the width */}
        <RichTextEditor />
      </div>
    </div>
  );
};

export default App;
