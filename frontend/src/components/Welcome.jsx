import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    const user = {
      id: '1',
      name: role === 'admin' ? 'Admin' : 'User',
      role,
    };
    login(user);
    navigate(`/${user.name}`);
  };

  return (
    <div>
      <h1>Welcome to the App</h1>
      <button onClick={() => handleLogin('admin')}>Login as Admin</button>
      <button onClick={() => handleLogin('user')}>Login as User</button>
    </div>
  );
};

export default Welcome;
