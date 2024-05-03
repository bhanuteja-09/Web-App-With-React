import React, { useState } from 'react';
import bezier from 'bezier-easing'; // Import the default export
import './Counter.css'; // Import your CSS file

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1); // Allow negative values
  };

  const reset = () => {
    setCount(0); // Reset the count to 0
  };

  const calculateBackgroundColor = () => {
    // Define a bezier curve for the color change
    const easing = bezier(0.25, 0.1, 0.25, 1);
    // Calculate color value along the bezier curve based on the count value
    const progress = easing(count / 10); // Divide count by 10 to adjust the speed of color change
    // Interpolate color between start and end values (e.g., white to blue)
    const red = Math.floor(255 * progress);
    const green = Math.floor(255 * progress);
    const blue = Math.floor(255 * (1 - progress));
    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <div className="counter-container" style={{width: '100%',height: '100%',backgroundColor: calculateBackgroundColor() }}>
      <div className="counter-content" >
        <h3>{count}</h3>
        <h2>Count</h2>
        <div className="buttons">
          <button onClick={increment}>+</button>
          <button onClick={reset}>Reset</button>
          <button onClick={decrement}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
