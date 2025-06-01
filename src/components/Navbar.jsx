import React, { useState } from "react";
import logo from "../assets/icon.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <div className="hidden md:block">
          <button>Login</button>
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
            <button onClick={() => setMenuOpen(false)}>Login</button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
