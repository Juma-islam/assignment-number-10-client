import React, { use, useEffect, useState } from "react";
import { PiPottedPlantFill } from "react-icons/pi";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import logo from "../assets/download.png";
// import userIcon from "../assets/user.png";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log-out successful.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };
  const links = (
    <>
      <li className="font-semibold hover:text-green-500">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-semibold  hover:text-green-500">
        <NavLink to="/all-issues">All Issues</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar text-black dark:text-indigo-500 bg-green-100 shadow-md sticky z-50 top-0 px-4 md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow-md">
            {links}
            {user && (
              <>
                <li className="font-semibold hover:text-green-500">
                  <NavLink to="/add-issues">Add Issues</NavLink>
                </li>
                <li className="font-semibold hover:text-green-500">
                  <NavLink to="/my-issues">My Issues</NavLink>
                </li>
                <li className="font-semibold hover:text-green-500">
                  <NavLink to="/my-contributions">My Contribution</NavLink>
                </li>
                <li className="font-semibold hover:text-green-500">
                  <NavLink to="/my-profile">My Profile</NavLink>
                </li>
                <input
            onChange={(e) => handleTheme(e.target.checked)}
            checked={theme === "dark"}
            type="checkbox"
            className="toggle"
          />
              </>
            )}
            <div className="flex flex-col gap-2 mt-3 lg:hidden">
              {!user && (
                <NavLink to="/Register" className="btn  hover:text-green-500">
                  Register
                </NavLink>
              )}
              {user ? (
                <button onClick={handleLogOut} className="btn hover:text-green-500">
                  Log Out
                </button>
              ) : (
                <NavLink to="/login" className="btn hover:text-green-500">
                  Login
                </NavLink>
              )}
            </div>
          </ul>
        </div>
        <Link to="/" className="flex gap-2 items-center text-green-600 font-bold  text-xl md:text-2xl">
          <img className="w-14 rounded-full" src={logo} alt="" />
          CleanConnect
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          {links}
          {user && (
            <>
              <li className="font-semibold hover:text-green-500">
                <NavLink to="/add-issues">Add Issues</NavLink>
              </li>
              <li className="font-semibold hover:text-green-500">
                <NavLink to="/my-issues">My Issues</NavLink>
              </li>
              <li className="font-semibold hover:text-green-500">
                <NavLink to="/my-contributions">My Contributions</NavLink>
              </li>
              <li className="font-semibold hover:text-green-500">
                <NavLink to="/my-profile">My Profile</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="navbar-end gap-3 hidden:lg-flex">
        {user && user.photoURL ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} rule="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full border-2 border-green-400">
                <img referrerpolicy="no-referrer" src={user.photoURL} alt="" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-center font-semibold text-green-700">{user.displayName || "user"}</li>
              <li>
                <button
                  onClick={handleLogOut}
                  className="btn btn-sm bg-green-200 border-none text-green-700 hover:bg-green-300 mt-2"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-3">
            <ul>
              <NavLink to="/login" className="btn bg-green-200 border-none text-green-700 hover:bg-green-300">
                Login
              </NavLink>
            </ul>
            <ul className="flex justify-center items-center">
              {" "}
              <NavLink
                to="/register"
                className="py-2 px-4 rounded-md hidden md:inline  bg-green-200 border-none  text-green-700 hover:bg-green-300 "
              >
                Register
              </NavLink>
            </ul>
          </div>
        )}
        {/* theme  */}
        <div className="hidden md:inline">
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            checked={theme === "dark"}
            type="checkbox"
            className="toggle"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
