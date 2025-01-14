// import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const LoginPage = () => {
  const { login } = useAuth();

  const handleLogin = (role) => {
    login({ id: '1', name: 'User', role });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => handleLogin('admin')}>Login as Admin</button>
      <button onClick={() => handleLogin('client')}>Login as Client</button>
      <button onClick={() => handleLogin('staff')}>Login as Staff</button>
    </div>
  );
};

export default LoginPage;
