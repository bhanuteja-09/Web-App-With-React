import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Counter from './components/Counter';
import RichTextEditor from './components/RichTextEditor';
import UserDataForm from './components/UserDataForm';
import Footer from './components/Footer';
import SecondRowComponent from './components/SecondRowComponent';
import SmoothAnimation from './components/SmoothAnimation';
import FluidAnimation from './components/FluidAnimation';
import BezierCurveAnimation from './components/BezierCurveAnimation';
import ReactSpringAnimation from './components/ReactSpringAnimation';
import './App.css';

const App = () => {
  return (
    <Router> {/* Wrap the entire app with BrowserRouter */}
      <div className="container">
        <div className="counter-box">
          <Counter />
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
          {/* <Footer /> */}
        </div>
      </div>
    </Router>
  );
};

export default App;
