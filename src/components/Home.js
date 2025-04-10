import React from 'react';
import { username, city } from '../data/user';  

const Home = () => {
  return (
    <div>
      <h1>{username}</h1>
      <p>{city}</p>
    </div>
  );
};

export default Home;