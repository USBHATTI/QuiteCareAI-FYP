import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '15px', background: '#333', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <h2>QuietCare AI</h2>
      <div style={{ display: 'flex', gap: '15px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/signin" style={{ color: 'white', textDecoration: 'none' }}>Sign In</Link>
        <Link to="/signup" style={{ color: 'white', textDecoration: 'none' }}>Sign Up</Link>
        <Link to="/chat" style={{ color: '#aaa', textDecoration: 'none' }}>Main Chat (Dev)</Link>
      </div>
    </nav>
  );
};

export default Navbar;