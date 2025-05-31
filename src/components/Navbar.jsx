import React from "react";
import logo from "../assets/icon.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <nav className="w-11/12 mx-auto flex items-center justify-between py-4 bg-white">
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
        {/* Center - Nav Links (hidden on small devices) */}
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
        <div>
          <button>Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
