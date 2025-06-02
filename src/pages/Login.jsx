import React, { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { login, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  // Set dynamic title
  useEffect(() => {
    document.title = "GardenGlee - Login";
  }, []);

  // Handle form login
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        toast.success("Login successful!");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        toast.error(`Login failed: ${errorMessage}`);
      });
  };

  // Handle Google login
  const handleGoogleLogin = () => {
    toast.info("Attempting Google login...");
    googleLogin()
      .then((result) => {
        const user = result.user;
        // console.log(user);
        toast.success("Google login successful!");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        toast.error(`Google login failed: ${errorMessage}`);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      {/* Toast container for notifications */}
      <ToastContainer position="top-right" autoClose={1500} />

      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
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
          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              placeholder="Your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {error && <p className="text-red-600 text-xs">{error}</p>}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-green-700 transition duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>

        <div className="my-4 flex items-center justify-center">
          <span className="text-gray-500">OR</span>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-green-100 transition duration-300 cursor-pointer"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <p className="text-sm text-center mt-6">
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            className="text-primary hover:underline cursor-pointer"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
