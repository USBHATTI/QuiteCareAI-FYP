import React from 'react';
import Navbar from '../components/Navbar';

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1>Sign Up Page</h1>
        <p>[Sign Up Form Here]</p>
        <p>Buttons: Google Sign Up | GitHub Sign Up (Local Only - Not Hosted)</p>
      </div>
    </div>
  );
};

export default SignUp;