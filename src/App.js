import React, { useState } from 'react';
import Counter from './components/Counter'; // Import the Counter component
import RichTextEditor from './components/RichTextEditor';
import UserDataForm from './components/UserDataForm'; // Import the UserDataForm component
import Footer from './components/Footer'; // Import the Footer component
import './App.css'; // Import the CSS file
import SecondRowComponent from './components/SecondRowComponent';
import FluidAnimation from './components/FluidAnimation';
import BezierCurveAnimation from './components/BezierCurveAnimation';
import ReactSpringAnimation from './components/ReactSpringAnimation';
import SmoothAnimation from './components/SmoothAnimation';

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
      <div className="user-box">
          <SecondRowComponent />
        </div>
        
      </div>
      <div className="form-box">
          <UserDataForm />
        </div>
      
      {/* <Footer /> */}

      <div className="footer-container">
  <div className="animation-row">
    <div className="smooth-animation">
      <SmoothAnimation />
    </div>
  </div>
  <div className="animation-row">
    <div className="fluid-animation">
      <FluidAnimation />
    </div>
  </div>
  <div className="animation-row">
    <div className="bezier-curve-animation">
      <BezierCurveAnimation />
    </div>
  </div>
  <div className="animation-row">
    <div className="react-spring-animation">
      <ReactSpringAnimation />
    </div>
  </div>
</div>





    </div>
  );
};

export default App;
