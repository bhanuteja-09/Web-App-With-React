// BezierCurveAnimation.js

import React from 'react';
import { useSpring, animated } from 'react-spring';

const BezierCurveAnimation = () => {
  const props = useSpring({
    from: { marginLeft: -1000 },
    to: { marginLeft: 0 },
    config: { duration: 1000, easing: t => t * t }, // Bezier curve easing function
  });

  return (
    <animated.div style={props}>
      <h2>This is an animation with a bezier curve!</h2>
    </animated.div>
  );
};

export default BezierCurveAnimation;
