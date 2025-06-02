import React, { useContext, useState } from "react";
import logo from "../assets/icon.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import userIcon from "../assets/userIcon.png";
import { FaBars } from "react-icons/fa";
import { toast } from "react-toastify";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  // Handle logout functionality
  const handleLogout = () => {
    logOut()
      .then(() => {
        // Show success toast notification
        toast.success("You have successfully logged out!");
      })
      .catch((error) => {
        // Show error toast notification
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
          {/* User Profile */}
          <div
            className="relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <img
              className="w-10 h-10 rounded-full cursor-pointer bg-blue-100"
              src={user?.photoURL || userIcon}
              alt="User Profile"
            />
            {/* Tooltip for username */}
            {showTooltip && user?.displayName && (
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-600 text-white text-sm px-3 py-1 rounded">
                {user.displayName}
              </div>
            )}
          </div>

          {/* Login Link Button */}
          <div className="hidden md:block lg:block ">
            {user ? (
              <button
                onClick={handleLogout}
                className="px-8 py-2 btn btn-primary"
              >
                LogOut
              </button>
            ) : (
              <Link to="/auth/login" className="px-8 py-2 btn btn-primary">
                Login
              </Link>
            )}
          </div>

          {/* Hamburger Menu for Small Devices */}
          <div className="md:hidden">
            <FaBars
              className="text-gray-600 text-2xl cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)} // Toggle dropdown menu
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden z-50">
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
            {user ? (
              <button
                // onClick={handleLogout}
                className="px-8 py-2 btn btn-primary"
                onClick={() => setMenuOpen(false)}
              >
                LogOut
              </button>
            ) : (
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
