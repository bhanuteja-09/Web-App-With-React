// Footer.js

import React from 'react';
import { useSpring, animated } from 'react-spring';

const Footer = () => {
  const props = useSpring({
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: -50 },
    delay: 500, // Delay the animation by 500 milliseconds
  });

  return (
    <animated.div style={props} className="footer">
      <h3>This is the footer</h3>
    </animated.div>
  );
};

export default Footer;
