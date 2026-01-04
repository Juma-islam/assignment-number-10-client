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
    `flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition
     ${isActive ? "bg-teal-50 text-teal-600 border-l-4 border-teal-500" : "text-gray-600 hover:bg-gray-100"}`;

  return (
    <div className="drawer lg:drawer-open min-h-screen bg-gray-50">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

 
      <div className="drawer-content flex flex-col">
        
        <div className="navbar bg-white border-b border-gray-200 px-6">
          <div className="flex-none lg:hidden">
            <label htmlFor="dashboard-drawer" className="btn btn-ghost btn-square">
              ☰
            </label>
          </div>

          <div className="flex-1">
            <Link to="/" className="text-xl font-semibold text-teal-600">
              CommunityFix
            </Link>
            <span className="ml-3 text-sm text-gray-500">Dashboard</span>
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-9 rounded-full bg-gray-100 flex items-center justify-center">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="profile" />
                ) : (
                  <FaUserCircle className="text-2xl text-gray-400" />
                )}
              </div>
            </label>

            <ul tabIndex={0} className="menu dropdown-content mt-3 p-4 bg-white border border-gray-200 rounded-md w-64">
              <div className="text-center border-b pb-4">
                <p className="font-semibold text-gray-700">{user?.displayName || "User"}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
                <span className={`badge mt-2 ${isAdmin ? "badge-error" : "badge-success"}`}>
                  {isAdmin ? "ADMIN" : "USER"}
                </span>
              </div>

              <li className="mt-3">
                <NavLink to="/dashboard/my-profile">My Profile</NavLink>
              </li>
              <li>
                <button onClick={handleLogout} className="btn btn-error btn-sm mt-3 text-white w-full">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1 p-6 lg:p-10">
          <Outlet />
        </div>
      </div>

    
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <div className="w-72 min-h-full bg-white border-r border-gray-200 p-6 flex flex-col">
     
          <div className="mb-8">
            <Link to="/dashboard" className="text-xl font-bold text-teal-600">
              CommunityFix
            </Link>
            <p className="text-xs text-gray-500 mt-1">Welcome, {user?.displayName?.split(" ")[0] || "User"}</p>
          </div>

          {!isAdmin && (
            <ul className="space-y-1">
              <li>
                <NavLink to="/dashboard" end className={linkClass}>
                  Overview
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-issues" className={linkClass}>
                  My Issues
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-issue" className={linkClass}>
                  Report Issue
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-contributions" className={linkClass}>
                  My Contributions
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-profile" className={linkClass}>
                  My Profile
                </NavLink>
              </li>
            </ul>
          )}

          {isAdmin && (
            <ul className="space-y-1">
              <p className="text-xs text-gray-400 uppercase mt-4 mb-2">Admin Panel</p>
              <li>
                <NavLink to="/dashboard/manage-issues" className={linkClass}>
                  <FaTools /> Manage Issues
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-contributions" className={linkClass}>
                  <FaDonate /> Contributions
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-profile" className={linkClass}>
                  My Profile
                </NavLink>
              </li>
            </ul>
          )}

          <div className="mt-auto pt-6">
            <button onClick={handleLogout} className="btn btn-outline btn-error w-full">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayouts;
