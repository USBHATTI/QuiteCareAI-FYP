import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1>Home Page</h1>
        <p>Introduction Content (Welcome to QuietCare AI...)</p>
      </div>
    </div>
  );
};

export default Home;