import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/download.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Logged out successfully!"))
      .catch((err) => console.error(err));
  };

  const publicLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              isActive ? "bg-white/20 text-white font-bold shadow-lg" : "text-white/90 hover:bg-white/10"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="all-issues"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              isActive ? "bg-white/20 text-white font-bold shadow-lg" : "text-white/90 hover:bg-white/10"
            }`
          }
        >
          All Issues
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              isActive ? "bg-white/20 text-white font-bold shadow-lg" : "text-white/90 hover:bg-white/10"
            }`
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/faq"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              isActive ? "bg-white/20 text-white font-bold shadow-lg" : "text-white/90 hover:bg-white/10"
            }`
          }
        >
          FAQ
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              isActive ? "bg-white/20 text-white font-bold shadow-lg" : "text-white/90 hover:bg-white/10"
            }`
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  const privateLinks = (
    <>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              isActive ? "bg-white/20 text-white font-bold" : "text-white/90 hover:bg-white/10"
            }`
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 text-white shadow-xl sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-white/95 dark:bg-gray-900 rounded-box w-64 gap-2"
          >
            {publicLinks}
            {user && privateLinks}
            <div className="divider"></div>
            <li className="flex items-center justify-between">
              <span>Dark Mode</span>
              <button onClick={toggleTheme} className="btn btn-sm btn-circle">
                {theme === "dark" ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-gray-700" />}
              </button>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-white ring-offset-2 ring-offset-transparent transition-all group-hover:ring-offset-teal-400">
              <img src={logo} alt="CleanConnect Logo" />
            </div>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              CleanConnect
            </span>
          </h1>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {publicLinks}
          {user && privateLinks}
        </ul>
      </div>

      <div className="navbar-end gap-4">
        <button
          onClick={toggleTheme}
          className="btn btn-circle btn-ghost hidden md:flex hover:bg-white/20 transition"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <FiSun className="text-2xl text-yellow-300" />
          ) : (
            <FiMoon className="text-2xl text-gray-100" />
          )}
        </button>

        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-12 rounded-full ring-2 ring-white ring-offset-2 ring-offset-transparent hover:ring-offset-cyan-300 transition-all">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="User" referrerPolicy="no-referrer" />
                ) : (
                  <FaUserCircle className="w-full h-full text-white/80" />
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 z-[1] p-4 shadow-lg bg-white/95 dark:bg-gray-900 rounded-box w-56"
            >
              <li className="text-center py-2 font-medium text-gray-800 dark:text-white">
                {user.displayName || user.email}
              </li>
              <div className="divider my-2"></div>
              <li>
                <NavLink to="/dashboard/my-profile" className="justify-center text-black">
                  My Profile
                </NavLink>
              </li>
              <li>
                <button onClick={handleLogout} className="btn btn-sm btn-error mt-3 w-full">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-3">
            <NavLink to="/login" className="btn btn-outline btn-white hover:bg-white hover:text-teal-600">
              Login
            </NavLink>
            <NavLink to="/register" className="btn bg-white text-teal-600 hover:bg-cyan-100 hidden md:inline-flex">
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
