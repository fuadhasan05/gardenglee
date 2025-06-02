import React, { useContext, useState } from "react";
import logo from "../assets/icon.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import userIcon from "../assets/userIcon.png";
import { FaBars } from "react-icons/fa";
import { toast } from "react-toastify";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  // Handle logout functionality
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("You have successfully logged out!");
        setShowLogout(false);
      })
      .catch((error) => {
        toast.error(`Logout failed: ${error.message}`);
        console.log(error);
      });
  };

  return (
    <div>
      <nav className="w-11/12 mx-auto flex items-center justify-between py-4 bg-white relative">
        {/* Left - Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 border-4 border-green-600"
          />
          <Link to="/" className="text-3xl font-bold">
            GardenGlee
          </Link>
        </div>
        {/* Hamburger for small screens */}
        <button
          className="md:hidden flex flex-col justify-center items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-green-700 mb-1"></span>
          <span className="block w-6 h-0.5 bg-green-700 mb-1"></span>
          <span className="block w-6 h-0.5 bg-green-700"></span>
        </button>
        {/* Center - Nav Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "hover:text-primary"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/explore-gardeners"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "hover:text-primary"
            }
          >
            Explore Gardeners
          </NavLink>
          <NavLink
            to="/browse-tips"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "hover:text-primary"
            }
          >
            Browse Tips
          </NavLink>
          <NavLink
            to="/share-tip"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "hover:text-primary"
            }
          >
            Share a Garden Tip
          </NavLink>
          <NavLink
            to="/my-tips"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "hover:text-primary"
            }
          >
            My Tips
          </NavLink>
        </div>

        {/* Right - User Profile and Dropdown */}
        <div className="flex items-center gap-3">
          {/* User Profile with Tooltip and Logout */}
          {user && (
            <div className="relative group">
              <img
                className="w-10 h-10 rounded-full cursor-pointer bg-blue-100"
                src={user.photoURL || userIcon}
                alt="User Profile"
                onClick={() => setShowLogout((prev) => !prev)}
                style={{ border: showLogout ? "2px solid #16a34a" : "none" }}
              />
              {/* Show user's name on hover */}
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-gray-800 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                {user.displayName}
              </div>
              {showLogout && (
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 shadow-lg px-4 py-2 rounded z-50">
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 btn btn-primary w-full"
                  >
                    LogOut
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Login Link Button (if not logged in) */}
          {!user && (
            <div className="hidden md:block lg:block">
              <Link to="/auth/login" className="px-8 py-2 btn btn-primary">
                Login
              </Link>
            </div>
          )}

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-green-50 shadow-md flex flex-col items-center space-y-4 py-4 md:hidden z-50">
            <NavLink
              to="/"
              className="text-gray-700 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/explore-gardeners"
              className="text-gray-700 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Explore Gardeners
            </NavLink>
            <NavLink
              to="/browse-tips"
              className="text-gray-700 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Browse Tips
            </NavLink>
            <NavLink
              to="/share-tip"
              className="text-gray-700 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Share a Garden Tip
            </NavLink>
            <NavLink
              to="/my-tips"
              className="text-gray-700 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              My Tips
            </NavLink>
            {user ? "" : (
              <Link
                to="/auth/login"
                className="px-8 py-2 btn btn-primary"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
