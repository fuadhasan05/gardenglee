import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { ToastContainer } from 'react-toastify';

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      {/* Toast container for notifications */}
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        {/* Page title */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Create an Account
        </h2>

        {/* Registration form */}
        <form  className="space-y-4">
          {/* Name input */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email input */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Photo URL input */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Photo URL
            </label>
            <input
              name="photo"
              type="text"
              required
              placeholder="Link to your profile picture"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password input */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              placeholder="Create a password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password error message */}
          {/* {passwordError && (
            <p className="text-xs text-red-600">{passwordError}</p>
          )} */}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-green-700 transition duration-300 cursor-pointer"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="my-4 flex items-center justify-center">
          <span className="text-gray-500">OR</span>
        </div>

        {/* Google login button */}
        <button
          
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-green-100 transition duration-300 cursor-pointer"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        {/* Redirect to login page */}
        <p className="text-sm text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-primary hover:underline cursor-pointer"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
    );
};

export default Register;