import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
  const { signIn, signInWithGoogleFunc, sendPasswordResetEmailFunc } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const saveUserToDB = async (user) => {
    const userInfo = {
      email: user.email,
      name: user.displayName || "User",
      photoURL: user.photoURL || "",
    };

    try {
      await fetch("https://clean-connect-project.vercel.app/save-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInfo),
      });
    } catch (err) {
      console.error("Failed to save user to DB:", err);
       toast.warning("Logged in, but sync with database failed");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value;

    try {
      const result = await signIn(email, password);
      await saveUserToDB(result.user);
      toast.success("Login Successful!");
      navigate(location.state || "/");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
      toast.error("Login failed! Please check your credentials.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogleFunc();
      await saveUserToDB(result.user);
      toast.success("Google Login Successful!");
      navigate(location.state || "/");
    } catch (err) {
      console.log(err)
      toast.error("Google Login Failed");
    }
  };

  // Demo Credentials 
  const demoCredentials = [
    { label: "Demo User", email: "user@communityfix.com", pass: "User123" },
    { label: "Demo Admin", email: "admin@communityfix.com", pass: "Admin123" },
  ];

  const autoFill = (email, pass) => {
    const emailInput = document.querySelector("input[name='email']");
    const passInput = document.querySelector("input[name='password']");

    if (emailInput && passInput) {
      emailInput.value = email;
      passInput.value = pass;
      setEmail(email);
      toast.info(`Auto-filled: ${email} – Just click Login!`, { autoClose: 3000 });
    }
  };

  const handleForgotPassword = () => {
    if (!email) {
      toast.error("Please enter your email first!");
      return;
    }
    sendPasswordResetEmailFunc(email)
      .then(() => toast.success("Password reset email sent! Check your inbox."))
      .catch(() => toast.error("Failed to send reset email"));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 py-10 text-center">
          <h1 className="text-4xl font-bold text-white">Welcome Back!</h1>
          <p className="text-teal-100 mt-2 text-lg">Login to CommunityFix</p>
        </div>

        <div className="p-8">
          {/* Demo Login Buttons */}
          <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {demoCredentials.map((cred) => (
              <button
                key={cred.email}
                onClick={() => autoFill(cred.email, cred.pass)}
                className="btn btn-outline border-emerald-500 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900 transition"
              >
                {cred.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div>
              <label className="label font-semibold text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="your@email.com"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="label font-semibold text-gray-700 dark:text-gray-300">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input input-bordered w-full pr-12 focus:ring-2 focus:ring-emerald-500"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-10 text-xl text-gray-600 dark:text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="link link-hover text-sm font-medium text-emerald-600 hover:text-emerald-800"
              >
                Forgot Password?
              </button>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-center font-medium">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-block bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold"
            >
              Login
            </button>
          </form>

          <div className="divider my-8 text-gray-500">OR</div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="btn btn-block btn-outline border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-center gap-4 text-lg"
          >
            <FaGoogle className="text-2xl text-red-500" />
            Continue with Google
          </button>

          {/* Register Link */}
          <p className="text-center mt-8 text-gray-600 dark:text-gray-400">
            New to CommunityFix?{" "}
            <Link to="/register" className="font-bold text-emerald-600 hover:underline">
              Create an Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;