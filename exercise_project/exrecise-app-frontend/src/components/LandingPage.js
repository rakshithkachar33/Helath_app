import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div>
    <h1>Welcome to the Exercise App</h1>
    <div style={{ float: 'right' }}>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  </div>
);

export default LandingPage;
