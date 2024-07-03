import React, { useState } from 'react';
import authService from '../../services/authService';

const ChangePassword = () => {
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.changePassword(email, oldPassword, newPassword, confirmPassword);
      console.log('Password changed successfully', response.data);
      setAlertMessage('Password changed successfully.');
    } catch (error) {
      console.error('Password change failed', error);
      setAlertMessage(error.response.data.error || 'Password change failed. Please check your inputs and try again.');
    }
  };

  return (
    <form onSubmit={handleChangePassword}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Old Password:</label>
        <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
      </div>
      <div>
        <label>New Password:</label>
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </div>
      <div>
        <label>Confirm New Password:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      <button type="submit">Change Password</button>
      {alertMessage && <div style={{ color: alertMessage.includes('successfully') ? 'green' : 'red' }}>{alertMessage}</div>}
    </form>
  );
};

export default ChangePassword;
