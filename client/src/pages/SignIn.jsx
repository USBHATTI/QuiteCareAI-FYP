import React from 'react';
import Navbar from '../components/Navbar';

const SignIn = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1>Sign In Page</h1>
        <p>[Sign In Form Here]</p>
        <p>Buttons: Google Sign In | GitHub Sign In (Local Only - Not Hosted)</p>
      </div>
    </div>
  );
};

export default SignIn;