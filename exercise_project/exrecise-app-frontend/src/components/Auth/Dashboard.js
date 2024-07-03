import React from 'react';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Dashboard</h1>
        <nav>
          <ul>
            <li><Link to="/profile">Profile</Link></li>
              <Link to="/change-password" style={{ marginLeft: '10px' }}>Forget Password?</Link>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Overview</h2>
          <p>This section contains an overview of your activities.</p>
        </section>
        <section>
          <h2>Details</h2>
          <p>This section contains detailed information about your activities.</p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
