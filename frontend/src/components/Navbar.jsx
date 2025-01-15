// Import necessary libraries and hooks
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Branding */}
        <Link
          to="/"
          className="text-xl font-bold hover:text-blue-300 transition"
        >
          Insurance App
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {user ? (
            <>
              <Link
                to={`/${user.name}`}
                className="hover:text-blue-300 transition"
              >
                Profile
              </Link>

              {/* Show Properties only if user is "client" */}
              {user.role === 'user'  && (
                <Link
                  to="/properties"
                  className="hover:text-blue-300 transition"
                >
                  Properties
                </Link>
              )}

              <Link
                to="/messages"
                className="hover:text-blue-300 transition"
              >
                Messages
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded transition"
              >
                Logout
              </button>
            </>
          ) : (
            <div>
              <Link
              to="/login"
              className="hover:text-blue-300 mr-5 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="hover:text-blue-300 transition"
            >
              Signup
            </Link>
            </div>

            
          )}
          <Link
            to="/contact-us"
            className="hover:text-blue-300 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
