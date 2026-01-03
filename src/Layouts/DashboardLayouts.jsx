import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router";

import { FaUserCircle, FaTools, FaDonate } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthContext";

const DashboardLayouts = () => {
  const { user, logOut, isAdmin } = useContext(AuthContext);

  const handleLogout = async () => {
    await logOut();
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-4 px-6 py-4 rounded-xl text-lg font-medium transition-all ${
      isActive ? "bg-white text-teal-700 shadow-xl" : "hover:bg-white/20"
    }`;

  return (
    <div className="drawer lg:drawer-open min-h-screen bg-gradient-to-br from-gray-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

     
      <div className="drawer-content flex flex-col">
        {/* Top Navbar */}
        <div className="navbar bg-gradient-to-r from-teal-700 to-emerald-600 text-white shadow-2xl">
          <div className="flex-none lg:hidden">
            <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
          </div>
          <div className="flex-1 px-6">
            <Link to="/" className="text-3xl font-extrabold">CommunityFix</Link>
            <span className="ml-4 text-lg opacity-90">Dashboard</span>
          </div>

          {/* Profile Dropdown */}
          <div className="dropdown dropdown-end mr-6">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-12 rounded-full ring-4 ring-white">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="Profile" referrerPolicy="no-referrer" />
                ) : (
                  <FaUserCircle className="w-full h-full text-white/90" />
                )}
              </div>
            </label>
            <ul tabName={0} className="menu dropdown-content mt-4 z-50 p-6 shadow-2xl bg-white dark:bg-gray-800 rounded-2xl w-72">
              <div className="text-center pb-6 border-b border-gray-200 dark:border-gray-700">
                <p className="text-2xl font-bold">{user?.displayName || "User"}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{user?.email}</p>
                <span className={`badge badge-lg mt-4 py-4 px-8 text-lg font-bold ${isAdmin ? "badge-error" : "badge-success"}`}>
                  {isAdmin ? "ADMIN" : "USER"}
                </span>
              </div>
              <li className="mt-6">
                <NavLink to="/dashboard/my-profile" className="text-xl py-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">
                  My Profile
                </NavLink>
              </li>
              <li>
                <button onClick={handleLogout} className="btn btn-error btn-block mt-6 text-white text-xl font-bold py-4">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 p-8 lg:p-12">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <div className="menu w-80 min-h-full bg-gradient-to-b from-teal-900 to-emerald-900 text-white p-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold mb-4">CommunityFix</h1>
            <p className="text-xl opacity-90">Welcome,</p>
            <p className="text-3xl font-bold mt-2">{user?.displayName?.split(" ")[0] || "User"}</p>
            <span className={`badge badge-lg mt-6 py-5 px-10 text-2xl font-bold ${isAdmin ? "badge-error" : "badge-success"}`}>
              {isAdmin ? "ADMIN" : "USER"}
            </span>
          </div>

          {!isAdmin && (
            <ul className="space-y-4">
              <li><NavLink to="/dashboard" end className={linkClass}>Overview</NavLink></li>
              <li><NavLink to="/dashboard/my-issues" className={linkClass}>My Issues</NavLink></li>
              <li><NavLink to="/dashboard/add-issue" className={linkClass}>Report New Issue</NavLink></li>
              <li><NavLink to="/dashboard/my-contributions" className={linkClass}>My Contributions</NavLink></li>
              <li><NavLink to="/dashboard/my-profile" className={linkClass}>My Profile</NavLink></li>
            </ul>
          )}

          {isAdmin && (
            <ul className="space-y-4">
              <div className="divider text-white text-2xl font-bold my-8">ADMIN PANEL</div>
              <li>
                <NavLink to="/dashboard/manage-issues" className={linkClass}>
                  <FaTools className="text-2xl" /> Manage All Issues
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-contributions" className={linkClass}>
                  <FaDonate className="text-2xl" /> Manage Contributions
                </NavLink>
              </li>
              <li><NavLink to="/dashboard/my-profile" className={linkClass}>My Profile</NavLink></li>
            </ul>
          )}

          {/* Logout */}
          <div className="mt-auto pt-12">
            <button onClick={handleLogout} className="btn btn-outline btn-error btn-block text-white border-2 border-white hover:bg-red-600 text-xl py-5 font-bold">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayouts;

