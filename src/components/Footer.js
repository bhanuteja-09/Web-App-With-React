import React from 'react';
import { useSpring, animated } from 'react-spring';

const Footer = () => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });

  return (
    <animated.footer style={props}>
      <div style={{ backgroundColor: 'lightgray', padding: '20px', textAlign: 'center' }}>
        <h2>Contact Us</h2>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@example.com</p>
      </div>
    </animated.footer>
  );
};

export default Footer;
