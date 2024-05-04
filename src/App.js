import React, { useState } from 'react';
import Counter from './components/Counter'; // Import the Counter component
import RichTextEditor from './components/RichTextEditor';
import UserDataForm from './components/UserDataForm'; // Import the UserDataForm component
import Footer from './components/Footer'; // Import the Footer component
import './App.css'; // Import the CSS file
import SecondRowComponent from './components/SecondRowComponent';
import SmoothAnimation from './components/SmoothAnimation';
import FluidAnimation from './components/FluidAnimation';
import BezierCurveAnimation from './components/BezierCurveAnimation';
import ReactSpringAnimation from './components/ReactSpringAnimation';

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
      <div className="user-container">
        <div className="user-box">
          <SecondRowComponent /> 
        </div>
      </div>
      <div className="form-container">
        <div className="form-box">
          <UserDataForm />
        </div>
      </div>
      

    
      <div className="fixed-footer">
  <div className="box animation-box smooth-animation-box">
    <SmoothAnimation />
  </div>
  <div className="box animation-box fluid-animation-box">
    <FluidAnimation />
  </div>
  <div className="box animation-box bezier-animation-box">
    <BezierCurveAnimation />
  </div>
  <div className="box animation-box spring-animation-box">
    <ReactSpringAnimation />
  </div>
  </div>



  
    </div>
  );
};

export default App;
