// SmoothAnimation.js

import React from 'react';
import { useSpring, animated } from 'react-spring';

const SmoothAnimation = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }, // Adjust the duration as needed
  });

  return (
    <animated.div style={props}>
      <h2>This is a smooth animation!</h2>
    </animated.div>
  );
};

export default SmoothAnimation;
