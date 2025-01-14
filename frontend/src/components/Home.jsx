import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const { user } = useAuth();

  if (!user) return <h1>Please log in</h1>;

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome, {user.name}! You are logged in as a {user.role}.</p>
    </div>
  );
};

export default Home;
