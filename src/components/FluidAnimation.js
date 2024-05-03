// FluidAnimation.js

import React from 'react';
import { useSpring, animated } from 'react-spring';

const FluidAnimation = () => {
  const props = useSpring({
    from: { marginLeft: -1000 },
    to: { marginLeft: 0 },
    config: { tension: 20, friction: 5 }, // Adjust tension and friction for desired effect
  });

  return (
    <animated.div style={props}>
      <h2>This is a fluid animation!</h2>
    </animated.div>
  );
};

export default FluidAnimation;
