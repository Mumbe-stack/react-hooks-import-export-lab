import React from 'react';
import { image } from '../data/user';  // Named import

const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <img src={image} alt="Portfolio" />
    </div>
  );
};

export default About;
