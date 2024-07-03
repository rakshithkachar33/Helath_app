import React, { useState } from 'react';
import authService from '../../services/authService';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.sendOtp(email);
      console.log('OTP sent successfully', response.data);
    } catch (error) {
      console.error('OTP send failed', error);
    }
  };

  return (
    <form onSubmit={handleForgetPassword}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type="submit">Send OTP</button>
    </form>
  );
};

export default ForgetPassword;
