// import React, { use, useEffect, useState } from "react";
// import { AiOutlineIssuesClose } from "react-icons/ai";
// import { FcAbout } from "react-icons/fc";
// import { IoMdContact } from "react-icons/io";
// import { Link, NavLink } from "react-router";
// import { AuthContext } from "../Provider/AuthContext";
// import { toast } from "react-toastify";
// import logo from "../assets/download.png";
// import { FaHome } from "react-icons/fa";

// const Navbar = () => {
//   const { user, logOut } = use(AuthContext);
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

//   useEffect(() => {
//     const html = document.querySelector("html");
//     html.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {
//         toast.success("Log-out successful.");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleTheme = (checked) => {
//     setTheme(checked ? "dark" : "light");
//   };
//   const links = (
//     <>
//       <li className="font-semibold hover:text-white">
//         <NavLink to="/">
//           <span>
//             <FaHome />
//           </span>
//           Home
//         </NavLink>
//       </li>
//       <li className="font-semibold  hover:text-white">
//         <NavLink to="/all-issues">
//           <span>
//             <AiOutlineIssuesClose />
//           </span>
//           All Issues
//         </NavLink>
//       </li>
//       <li className="font-semibold  hover:text-white">
//         <NavLink to="/about">
//           <span className="text-black">
//             <FcAbout />
//           </span>
//           About Us
//         </NavLink>
//       </li>
//       <li className="font-semibold  hover:text-white">
//         <NavLink to="/contact">
//           <span>
//             <IoMdContact />
//           </span>
//           Contact
//         </NavLink>
//       </li>
//     </>
//   );
//   return (
//     <div className="navbar text-black dark:text-white bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400 shadow-md sticky z-50 top-0 px-4 md:px-10">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//             </svg>
//           </div>
//           <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow-md">
//             {links}
//             {user && (
//               <>
//                 <li className="font-semibold hover:text-white dark:text-black">
//                   <NavLink to="/add-issues">Add Issues</NavLink>
//                 </li>
//                 <li className="font-semibold hover:text-white dark:text-black">
//                   <NavLink to="/my-issues">My Issues</NavLink>
//                 </li>
//                 <li className="font-semibold hover:text-white dark:text-black">
//                   <NavLink to="/my-contributions">My Contributions</NavLink>
//                 </li>
//                 <li className="font-semibold hover:text-white dark:text-black">
//                   <NavLink to="/my-profile">My Profile</NavLink>
//                 </li>
//                  <input
//                   onChange={(e) => handleTheme(e.target.checked)}
//                   checked={theme === "dark"}
//                   type="checkbox"
//                   className="toggle"
//                 />
//               </>
//             )}
//             <div className="flex flex-col gap-2 mt-3 lg:hidden">
//               {!user && (
//                 <NavLink to="/Register" className="btn  hover:text-white">
//                   Register
//                 </NavLink>
//               )}
//               {user ? (
//                 <button onClick={handleLogOut} className="btn hover:text-white">
//                   Log Out
//                 </button>
//               ) : (
//                 <input
//                   onChange={(e) => handleTheme(e.target.checked)}
//                   checked={theme === "dark"}
//                   type="checkbox"
//                   className="toggle"
//                 />
//               )}
//             </div>
//           </ul>
//         </div>
//         <Link to="/" className="flex gap-2 items-center text-green-600 font-bold  text-xl md:text-2xl">
//           <img className="w-14 rounded-full" src={logo} alt="" />
//           <span className="bg-gradient-to-r from-black via-gray-800 to-green-800 bg-clip-text text-transparent font-extrabold tracking-wide drop-shadow-md">
//             Clean Connect
//           </span>
//         </Link>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 gap-3">
//           {links}
//           {user && (
//             <>
//               <li className="font-semibold hover:text-white">
//                 <NavLink to="/add-issues">Add Issues</NavLink>
//               </li>
//               <li className="font-semibold hover:text-white">
//                 <NavLink to="/my-issues">My Issues</NavLink>
//               </li>
//               <li className="font-semibold hover:text-white">
//                 <NavLink to="/my-contributions">My Contributions</NavLink>
//               </li>
//               <li className="font-semibold hover:text-white">
//                 <NavLink to="/my-profile">My Profile</NavLink>
//               </li>
//             </>
//           )}
//         </ul>
//       </div>

//       <div className="navbar-end gap-3 hidden:lg-flex">
//         {user && user.photoURL ? (
//           <div className="dropdown dropdown-end">
//             <div tabIndex={0} rule="button" className="btn btn-ghost btn-circle avatar">
//               <div className="w-10 rounded-full border-2 border-green-400">
//                 <img referrerpolicy="no-referrer" src={user.photoURL} alt="" />
//               </div>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//             >
//               <li className="text-center font-semibold hover:text-white">{user.displayName || "user"}</li>
//               <li>
//                 <button
//                   onClick={handleLogOut}
//                   className="btn btn-sm bg-green-200 border-none text-green-700 hover:bg-green-300 mt-2"
//                 >
//                   Logout
//                 </button>
//               </li>
//             </ul>
//           </div>
//         ) : (
//           <div className="flex gap-3">
//             <ul>
//               <NavLink to="/login" className="btn bg-green-200 border-none text-green-700 hover:bg-green-300">
//                 Login
//               </NavLink>
//             </ul>
//             <ul className="flex justify-center items-center">
//               {" "}
//               <NavLink
//                 to="/register"
//                 className="py-2 px-4 rounded-md hidden md:inline  bg-green-200 border-none  text-green-700 hover:bg-green-300 "
//               >
//                 Register
//               </NavLink>
//             </ul>
//           </div>
//         )}
//         {/* theme  */}
//         <div className="hidden md:inline">
//           <input
//             onChange={(e) => handleTheme(e.target.checked)}
//             checked={theme === "dark"}
//             type="checkbox"
//             className="toggle"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

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
              isActive
                ? "bg-white/20 text-white font-bold shadow-lg"
                : "text-white/90 hover:bg-white/10"
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
              isActive
                ? "bg-white/20 text-white font-bold shadow-lg"
                : "text-white/90 hover:bg-white/10"
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
              isActive
                ? "bg-white/20 text-white font-bold shadow-lg"
                : "text-white/90 hover:bg-white/10"
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
              isActive
                ? "bg-white/20 text-white font-bold shadow-lg"
                : "text-white/90 hover:bg-white/10"
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
              isActive
                ? "bg-white/20 text-white font-bold shadow-lg"
                : "text-white/90 hover:bg-white/10"
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
      <li>
        <NavLink
          to="/my-bookings"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              isActive ? "bg-white/20 text-white font-bold" : "text-white/90 hover:bg-white/10"
            }`
          }
        >
          My Bookings
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/become-cleaner"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              isActive ? "bg-white/20 text-white font-bold" : "text-white/90 hover:bg-white/10"
            }`
          }
        >
          Become a Cleaner
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 text-white shadow-xl sticky top-0 z-50">
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-white/95 dark:bg-gray-900 rounded-box w-64 gap-2">
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

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {publicLinks}
          {user && privateLinks}
        </ul>
      </div>

      {/* Right Side - Theme + Auth */}
      <div className="navbar-end gap-4">
        {/* Theme Toggle - Desktop */}
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

        {/* User Menu */}
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
            <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-4 shadow-lg bg-white/95 dark:bg-gray-900 rounded-box w-56">
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





// import React, { useContext, useEffect, useState } from "react";
// import { Link, NavLink } from "react-router";
// import { AuthContext } from "../Provider/AuthContext";
// import { toast } from "react-toastify";
// import logo from "../assets/download.png";
// import {
//   FaHome,
//   FaUserCircle,
//   FaPlusCircle,
//   FaListAlt,
//   FaHandsHelping,
//   FaMoon,
//   FaSun,
// } from "react-icons/fa";
// import { AiOutlineIssuesClose } from "react-icons/ai";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const handleLogout = () => {
//     logOut()
//       .then(() => toast.success("Logged out successfully"))
//       .catch(console.error);
//   };

//   const navLinkClass = ({ isActive }) =>
//     `flex items-center gap-2 px-3 py-2 rounded-md font-medium transition
//      ${isActive ? "bg-green-600 text-white" : "hover:bg-green-100 dark:hover:bg-gray-700"}`;

//   return (
//     <div className="sticky top-0 z-50 bg-gradient-to-r from-green-500 via-emerald-500 to-lime-400 shadow-md">
//       <div className="navbar max-w-7xl mx-auto px-4 text-black dark:text-white">

//         {/* Left */}
//         <div className="navbar-start">
//           <div className="dropdown lg:hidden">
//             <label tabIndex={0} className="btn btn-ghost">
//               ☰
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56"
//             >
//               <NavLink to="/" className={navLinkClass}>
//                 <FaHome /> Home
//               </NavLink>
//               <NavLink to="/all-issues" className={navLinkClass}>
//                 <AiOutlineIssuesClose /> All Issues
//               </NavLink>

//               {user && (
//                 <>
//                   <NavLink to="/add-issues" className={navLinkClass}>
//                     <FaPlusCircle /> Add Issue
//                   </NavLink>
//                   <NavLink to="/my-issues" className={navLinkClass}>
//                     <FaListAlt /> My Issues
//                   </NavLink>
//                   <NavLink to="/my-contributions" className={navLinkClass}>
//                     <FaHandsHelping /> Contributions
//                   </NavLink>
//                 </>
//               )}
//             </ul>
//           </div>

//           <Link to="/" className="flex items-center gap-2">
//             <img src={logo} alt="logo" className="w-12 rounded-full" />
//             <span className="text-xl font-extrabold tracking-wide text-green-900 dark:text-white">
//               Clean Connect
//             </span>
//           </Link>
//         </div>

//         {/* Center */}
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal gap-2">
//             <NavLink to="/" className={navLinkClass}>
//               <FaHome /> Home
//             </NavLink>
//             <NavLink to="/all-issues" className={navLinkClass}>
//               <AiOutlineIssuesClose /> All Issues
//             </NavLink>

//             {user && (
//               <>
//                 <NavLink to="/add-issues" className={navLinkClass}>
//                   <FaPlusCircle /> Add Issue
//                 </NavLink>
//                 <NavLink to="/my-issues" className={navLinkClass}>
//                   <FaListAlt /> My Issues
//                 </NavLink>
//                 <NavLink to="/my-contributions" className={navLinkClass}>
//                   <FaHandsHelping /> Contributions
//                 </NavLink>
//               </>
//             )}
//           </ul>
//         </div>

//         {/* Right */}
//         <div className="navbar-end gap-3">

//           {/* Theme Toggle */}
//           <button
//             onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//             className="btn btn-ghost text-xl"
//           >
//             {theme === "dark" ? <FaSun /> : <FaMoon />}
//           </button>

//           {/* Auth */}
//           {user ? (
//             <div className="dropdown dropdown-end">
//               <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//                 <div className="w-10 rounded-full border-2 border-green-500">
//                   <img src={user.photoURL || ""} alt="profile" />
//                 </div>
//               </label>
//               <ul
//                 tabIndex={0}
//                 className="menu dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-52"
//               >
//                 <li className="text-center font-semibold">
//                   {user.displayName || "User"}
//                 </li>
//                 <NavLink to="/my-profile" className="btn btn-sm mt-2">
//                   <FaUserCircle /> Profile
//                 </NavLink>
//                 <button
//                   onClick={handleLogout}
//                   className="btn btn-sm bg-red-100 text-red-600 mt-2"
//                 >
//                   Logout
//                 </button>
//               </ul>
//             </div>
//           ) : (
//             <>
//               <NavLink to="/login" className="btn btn-sm bg-green-100 text-green-700">
//                 Login
//               </NavLink>
//               <NavLink to="/register" className="btn btn-sm bg-green-600 text-white hidden md:inline">
//                 Register
//               </NavLink>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
