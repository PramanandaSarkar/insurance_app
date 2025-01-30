import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import PropertyPage from './pages/PropertyPage';
import NotFoundPage from './pages/NotFoundPage';
import MessagePage from './pages/MessagePage';
import ContactUsPage from './pages/ContactUsPage';
import SignupPage from './pages/SignupPage';


// PrivateRoute Component for Role-Based Access
const PrivateRoute = ({ children, roles }) => {
  const { user } = useAuth();

  // Redirect to login if no user is logged in
  if (!user) return <Navigate to="/login" />;

  // Restrict access based on roles
  if (roles && !roles.includes(user.role)) return <Navigate to="/" />;

  return children;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="container mx-auto px-4 py-6">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/messages" element={< MessagePage/>} />
            <Route path="/property" element={< PropertyPage/>} />

            {/* Protected Routes */}
            <Route
              path="/:username"
              element={
                <PrivateRoute roles={['client', 'admin', 'staff']}>
                  <ProfilePage />
                </PrivateRoute>
              }
            />
            {/* <Route
              path="/properties"
              element={
                <PrivateRoute roles={['client']}>
                  <PropertyPage />
                </PrivateRoute>
              }
            /> */}
            <Route
              path="/messages"
              element={
                <PrivateRoute roles={['client', 'admin', 'staff']}>
                  <MessagePage />
                </PrivateRoute>
              }
            />

            {/* Catch-All Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
