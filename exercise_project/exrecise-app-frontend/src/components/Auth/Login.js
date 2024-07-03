import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import authService from '../../services/authService';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.login(username, password);
      console.log('Login successful', response.data);
      navigate('/dashboard');
    } catch (error)
     {
      console.error('Login failed', error);
      setAlertMessage('Login failed. Please check your username and password.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Login</button>

      {alertMessage && <div style={{ color: 'red' }}>{alertMessage}</div>}
    </form>

  );
};

export default Login;
