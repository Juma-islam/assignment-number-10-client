import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { FaUserCircle, FaHome, FaExclamationCircle, FaPlusCircle, FaDonate, FaTools } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthContext";

const DashboardLayouts = () => {
  const { user, logOut, isAdmin } = useContext(AuthContext);

  const handleLogout = async () => {
    await logOut();
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-4 px-6 py-4 rounded-xl text-lg font-medium transition-all duration-200 ${
      isActive
        ? "bg-white text-emerald-700 shadow-xl scale-105"
        : "hover:bg-white/20 hover:scale-105"
    }`;

  return (
    <div className="drawer lg:drawer-open min-h-screen bg-gray-200">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content flex flex-col">
        {/* Top Navbar */}
        <div className="navbar bg-gradient-to-r from-emerald-700 to-teal-600 text-white shadow-2xl">
          <div className="flex-none lg:hidden">
            <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
          </div>
          <div className="flex-1 px-6">
            <Link to="/" className="text-3xl font-extrabold tracking-tight">
              CommunityFix
            </Link>
            <span className="ml-4 text-lg opacity-90">Dashboard</span>
          </div>

          {/* Profile Dropdown */}
          <div className="dropdown dropdown-end mr-6">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-12 rounded-full ring-4 ring-white hover:ring-offset-4 hover:ring-offset-teal-500 transition">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="Profile" referrerPolicy="no-referrer" />
                ) : (
                  <FaUserCircle className="w-full h-full text-white/90" />
                )}
              </div>
            </label>
            <ul tabIndex={0} className="menu dropdown-content mt-4 z-50 p-6 shadow-2xl bg-white dark:bg-gray-800 rounded-2xl w-72">
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
        <div className="menu w-80 min-h-full bg-gradient-to-b from-emerald-900 to-teal-900 text-white p-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold mb-4">CommunityFix</h1>
            <p className="text-xl opacity-90">Welcome,</p>
            <p className="text-3xl font-bold mt-2">{user?.displayName?.split(" ")[0] || "User"}</p>
            <span className={`badge badge-lg mt-6 py-5 px-10 text-2xl font-bold ${isAdmin ? "badge-error" : "badge-success"}`}>
              {isAdmin ? "ADMIN" : "USER"}
            </span>
          </div>

          {/* USER MENU - শুধু User দেখবে */}
          {!isAdmin && (
            <ul className="space-y-4">
              <li>
                <NavLink to="/dashboard" end className={linkClass}>
                  <FaHome className="text-2xl" /> Overview
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-issues" className={linkClass}>
                  <FaExclamationCircle className="text-2xl" /> My Issues
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-issue" className={linkClass}>
                  <FaPlusCircle className="text-2xl" /> Report New Issue
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-contributions" className={linkClass}>
                  <FaDonate className="text-2xl" /> My Contributions
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-profile" className={linkClass}>
                  <FaUserCircle className="text-2xl" /> My Profile
                </NavLink>
              </li>
            </ul>
          )}

          {/* ADMIN MENU - শুধু Admin দেখবে */}
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
            </ul>
          )}

          {/* Logout Button */}
          <div className="mt-auto pt-12">
            <button onClick={handleLogout} className="btn btn-outline btn-error btn-block text-white border-2 border-white hover:bg-red-600 hover:border-red-600 text-xl py-5 font-bold">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayouts;


// import React, { useContext } from "react";
// import { Link, NavLink, Outlet } from "react-router";
// import {
//   FaUserCircle,
//   FaHome,
//   FaExclamationCircle,
//   FaPlusCircle,
//   FaDonate,
//   FaTools,
// } from "react-icons/fa";
// import { AuthContext } from "../Provider/AuthContext";

// const DashboardLayouts = () => {
//   const { user, logOut, isAdmin } = useContext(AuthContext);

//   const handleLogout = async () => {
//     await logOut();
//   };

//   const linkClass = ({ isActive }) =>
//     `flex items-center gap-3 px-5 py-3 rounded-lg text-base font-medium transition-all
//     ${
//       isActive
//         ? "bg-emerald-600 text-white shadow-md"
//         : "text-white/90 hover:bg-white/10"
//     }`;

//   return (
//     <div className="drawer lg:drawer-open min-h-screen bg-gray-100 dark:bg-gray-900">
//       <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

//       {/* ================= CONTENT ================= */}
//       <div className="drawer-content flex flex-col">
//         {/* Top Navbar */}
//         <div className="navbar bg-white dark:bg-gray-800 border-b shadow-sm px-6">
//           <div className="flex-none lg:hidden">
//             <label htmlFor="dashboard-drawer" className="btn btn-ghost">
//               ☰
//             </label>
//           </div>

//           <div className="flex-1">
//             <Link to="/" className="text-2xl font-bold text-emerald-600">
//               CommunityFix
//             </Link>
//             <span className="ml-3 text-gray-500 dark:text-gray-400">
//               Dashboard
//             </span>
//           </div>

//           {/* Profile */}
//           <div className="dropdown dropdown-end">
//             <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//               <div className="w-10 rounded-full ring-2 ring-emerald-500">
//                 {user?.photoURL ? (
//                   <img src={user.photoURL} referrerPolicy="no-referrer" />
//                 ) : (
//                   <FaUserCircle className="w-full h-full text-gray-500" />
//                 )}
//               </div>
//             </label>
//             <ul className="menu dropdown-content mt-3 p-4 shadow bg-white dark:bg-gray-800 rounded-box w-56">
//               <li className="text-center font-semibold">
//                 {user?.displayName || "User"}
//               </li>
//               <li className="text-sm text-center text-gray-500">
//                 {user?.email}
//               </li>
//               <li className="mt-3">
//                 <NavLink to="/dashboard/my-profile">My Profile</NavLink>
//               </li>
//               <li>
//                 <button
//                   onClick={handleLogout}
//                   className="btn btn-error btn-sm mt-2"
//                 >
//                   Logout
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Page Content */}
//         <div className="p-6 lg:p-10">
//           <Outlet />
//         </div>
//       </div>

//       {/* ================= SIDEBAR ================= */}
//       <div className="drawer-side">
//         <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

//         <aside className="w-72 min-h-full bg-emerald-700 text-white p-6 flex flex-col">
//           {/* Sidebar Header */}
//           <div className="mb-10 text-center">
//             <h2 className="text-2xl font-bold">Dashboard</h2>
//             <p className="mt-2 text-sm opacity-80">
//               {user?.displayName?.split(" ")[0] || "User"}
//             </p>
//             <span
//               className={`badge mt-3 ${
//                 isAdmin ? "badge-error" : "badge-success"
//               }`}
//             >
//               {isAdmin ? "ADMIN" : "USER"}
//             </span>
//           </div>

//           {/* USER MENU */}
//           {!isAdmin && (
//             <ul className="space-y-2">
//               <NavLink to="/dashboard" end className={linkClass}>
//                 <FaHome /> Overview
//               </NavLink>
//               <NavLink to="/dashboard/my-issues" className={linkClass}>
//                 <FaExclamationCircle /> My Issues
//               </NavLink>
//               <NavLink to="/dashboard/add-issue" className={linkClass}>
//                 <FaPlusCircle /> Report Issue
//               </NavLink>
//               <NavLink
//                 to="/dashboard/my-contributions"
//                 className={linkClass}
//               >
//                 <FaDonate /> My Contributions
//               </NavLink>
//               <NavLink to="/dashboard/my-profile" className={linkClass}>
//                 <FaUserCircle /> My Profile
//               </NavLink>
//             </ul>
//           )}

//           {/* ADMIN MENU */}
//           {isAdmin && (
//             <ul className="space-y-2">
//               <p className="uppercase text-xs tracking-widest opacity-80 mb-2">
//                 Admin Panel
//               </p>
//               <NavLink to="/dashboard/manage-issues" className={linkClass}>
//                 <FaTools /> Manage Issues
//               </NavLink>
//               <NavLink
//                 to="/dashboard/manage-contributions"
//                 className={linkClass}
//               >
//                 <FaDonate /> Manage Contributions
//               </NavLink>
//             </ul>
//           )}

//           {/* Logout */}
//           <button
//             onClick={handleLogout}
//             className="btn btn-outline btn-error mt-auto"
//           >
//             Logout
//           </button>
//         </aside>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayouts;
