// import React from 'react';
// import { Outlet } from 'react-router';

// const DashboardLayouts = () => {
//     return (
//        <div className="drawer lg:drawer-open">
//   <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
//   <div className="drawer-content">
//     {/* Navbar */}
//     <nav className="navbar w-full bg-base-300">
//       <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
//         {/* Sidebar toggle icon */}
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
//       </label>
//       <div className="px-4">Navbar Title</div>
//     </nav>
//     {/* Page content here */}
//     <Outlet></Outlet>
//     <div className="p-4">Page Content</div>
//   </div>

//   <div className="drawer-side is-drawer-close:overflow-visible">
//     <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
//     <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
//       {/* Sidebar content here */}
//       <ul className="menu w-full grow">
//         {/* List item */}
//         <li>
//           <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
//             {/* Home icon */}
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
//             <span className="is-drawer-close:hidden">Homepage</span>
//           </button>
//         </li>

//         {/* List item */}
//         <li>
//           <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
//             {/* Settings icon */}
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
//             <span className="is-drawer-close:hidden">Settings</span>
//           </button>
//         </li>
//       </ul>
//     </div>
//   </div>
// </div>
//     );
// };

// export default DashboardLayouts;


import React, { useContext, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { FaUserCircle } from "react-icons/fa";

const DashboardLayout = () => {
  const { user, logOut, isAdmin } = useContext(AuthContext); // assume isAdmin from backend or context
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => logOut();

  const userLinks = (
    <>
      <li><NavLink to="/dashboard" end className="hover:bg-emerald-700 rounded-lg">Overview</NavLink></li>
      <li><NavLink to="/dashboard/my-issues" className="hover:bg-emerald-700 rounded-lg">My Issues</NavLink></li>
      <li><NavLink to="/dashboard/add-issue" className="hover:bg-emerald-700 rounded-lg">Report New Issue</NavLink></li>
      <li><NavLink to="/dashboard/my-contributions" className="hover:bg-emerald-700 rounded-lg">My Contributions</NavLink></li>
      <li><NavLink to="/dashboard/my-profile" className="hover:bg-emerald-700 rounded-lg">My Profile</NavLink></li>
    </>
  );

  const adminLinks = (
    <>
      <li className="border-t border-white/20 pt-4 mt-4">Admin Panel</li>
      <li><NavLink to="/dashboard/manage-issues" className="hover:bg-red-700 rounded-lg">Manage All Issues</NavLink></li>
      <li><NavLink to="/dashboard/manage-contributions" className="hover:bg-red-700 rounded-lg">Manage Contributions</NavLink></li>
    </>
  );

  return (
    <div className="drawer lg:drawer-open min-h-screen bg-gray-100 dark:bg-gray-900">
      <input id="dash-drawer" type="checkbox" className="drawer-toggle" checked={isSidebarOpen} onChange={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="drawer-content flex flex-col">
        {/* Top Bar */}
        <div className="navbar bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-xl">
          <div className="flex-none lg:hidden">
            <label htmlFor="dash-drawer" className="btn btn-square btn-ghost">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"/></svg>
            </label>
          </div>
          <div className="flex-1"><h1 className="text-2xl font-bold px-4">CommunityFix Dashboard</h1></div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring ring-white">
                {user?.photoURL ? <img src={user.photoURL} /> : <FaUserCircle className="w-full h-full" />}
              </div>
            </label>
            <ul tabIndex={0} className="menu dropdown-content mt-3 z-10 p-4 shadow bg-white dark:bg-gray-800 rounded-box w-52">
              <li className="font-medium text-center">{user?.displayName || user?.email}</li>
              <li><Link to="/dashboard/my-profile">My Profile</Link></li>
              <li><button onClick={handleLogout} className="btn btn-error btn-sm mt-2">Logout</button></li>
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-10"><Outlet /></div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="dash-drawer" className="drawer-overlay"></label>
        <ul className="menu p-6 w-80 h-full bg-gradient-to-b from-emerald-800 to-teal-900 text-white">
          <h2 className="text-3xl font-bold text-center mb-10">CommunityFix</h2>
          <p className="text-center mb-6">Welcome, {user?.displayName?.split(" ")[0]}</p>
          {userLinks}
          {isAdmin && adminLinks}
          <button onClick={handleLogout} className="btn btn-outline btn-error mt-auto">Logout</button>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;