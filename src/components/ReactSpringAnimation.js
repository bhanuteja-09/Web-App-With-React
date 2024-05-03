// ReactSpringAnimation.js

import React from 'react';
import { useSpring, animated } from 'react-spring';

const ReactSpringAnimation = () => {
  const props = useSpring({
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    from: { opacity: 0, transform: 'translate3d(0,-50px,0)' },
    config: { tension: 100, friction: 20 }, // Adjust tension and friction for desired effect
  });

  return (
    <animated.div style={props}>
      <h2>This is a React Spring animation!</h2>
    </animated.div>
  );
};

export default ReactSpringAnimation;
