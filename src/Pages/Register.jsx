import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUser, signInWithGoogleFunc } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = (name, email, photo, password) => {
    const newErrors = {};
    if (name.length < 3) newErrors.name = "Name must be at least 3 characters";
    if (!photo) newErrors.photo = "Photo URL is required";
    if (password.length < 6) newErrors.password = "Password must be 6+ characters";
    if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) newErrors.password = "Password needs uppercase & lowercase";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveUserToDB = async (user) => {
    const userInfo = {
      email: user.email,
      name: user.displayName,
      photoURL: user.photoURL,
    };

    try {
      const res = await fetch("https://clean-connect-project.vercel.app/save-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInfo),
      });
      if (!res.ok) throw new Error("Failed to save user");
    } catch (err) {
      console.error(err);
      toast.warning("User registered but not saved to database");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (!validateForm(name, email, photo, password)) return;

    try {
      const result = await createUser(email, password);
      await updateUser({ displayName: name, photoURL: photo });
      toast.success("Registration Successful!");

      // Save to MongoDB
      await saveUserToDB(result.user);

      navigate("/");
    } catch (err) {
      toast.error("Registration failed: " + err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      const result = await signInWithGoogleFunc();
      toast.success("Google Signup Successful!");

      // Save to MongoDB
      await saveUserToDB(result.user);

      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-teal-600 to-emerald-500 py-8 text-center">
          <h1 className="text-3xl font-bold text-white">Join CommunityFix</h1>
          <p className="text-teal-100 mt-2">Create your account today</p>
        </div>

        <div className="p-8">
          <form onSubmit={handleRegister} className="space-y-5">
            {/* name  */}
            <div>
              <label className="label font-medium">Full Name</label>
              <input type="text" name="name" className="input input-bordered w-full" placeholder="Your name" required />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            {/* photoURL */}
            <div>
              <label className="label font-medium">Photo URL</label>
              <input
                type="url"
                name="photo"
                className="input input-bordered w-full"
                placeholder="https://..."
                required
              />
              {errors.photo && <p className="text-red-500 text-xs mt-1">{errors.photo}</p>}
            </div>
            {/* email  */}
            <div>
              <label className="label font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="you@example.com"
                required
              />
            </div>
            {/* password */}
            <div className="relative">
              <label className="label font-medium">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input input-bordered w-full pr-12"
                placeholder="••••••••"
                required
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-10">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            <button type="submit" className="btn btn-block bg-teal-600 hover:bg-teal-700 text-white">
              Create Account
            </button>
          </form>

          <div className="divider my-6">OR</div>

          <button onClick={handleGoogle} className="btn btn-block btn-outline flex items-center justify-center gap-3">
            <FaGoogle className="text-red-500" /> Sign up with Google
          </button>

          <p className="text-center mt-6 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-teal-600 font-semibold hover:underline">
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
