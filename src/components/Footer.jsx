// import React from "react";

// import logo from "../assets/download.png";
// import { Link } from "react-router";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white/80 py-10 mt-10 border-t border-green-200">
//       <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="flex flex-col items-center md:items-start text-center md:text-left">
//           <div className="flex items-center gap-2 mb-3">
//             <img src={logo} alt="logo" className="w-12 rounded-full" />
//             <h2 className="text-2xl font-bold ">CleanConnect</h2>
//           </div>
//           <p>
//             CleanConnect is a community-driven platform for reporting and solving cleanliness issues in your
//             neighborhood. Together, we build a cleaner future.
//           </p>
//         </div>
//         <div className="text-center md:text-left">
//           <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
//           <ul>
//             <li className="hover:underline">
//               <Link to="/">Home</Link>
//             </li>
//             <li className="hover:underline">
//               <Link to="/all-issues">All Issues</Link>
//             </li>
//             <li className="hover:underline">
//               <Link to="/add-issues">Add Issues</Link>
//             </li>
//             <li className="hover:underline">
//               <Link to="/contact">Contact Us</Link>
//             </li>
//           </ul>
//         </div>
//         <div className="flex flex-col justify-center items-center md:items-end">
//           <p className="text-sm mb-2"> © {new Date().getFullYear()} - All right reserved</p>
//           <nav className="flex gap-4">
//             <a>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="fill-current"
//               >
//                 <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
//               </svg>
//             </a>
//             <a>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="fill-current"
//               >
//                 <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//               </svg>
//             </a>
//             <a>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="fill-current"
//               >
//                 <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//               </svg>
//             </a>
//           </nav>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Link } from 'react-router';
import logo from "../assets/download.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img 
              src={logo}
              alt="CleanConnect Logo" 
              className="w-12 h-12 rounded-full"
            />
            <h3 className="text-2xl font-bold">CleanConnect</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Connecting you with trusted, professional cleaners for a spotless home. Eco-friendly and reliable service at your fingertips.
          </p>
          <div className="flex items-center space-x-2">
            <img 
              src="https://img.freepik.com/premium-vector/clean-natural-organic-nature-ingredient-stamp-label-badge-design-environment-friendly-eco-no-harm_537522-64.jpg" 
              alt="Eco Friendly" 
              className="w-16 h-16"
            />
            <span className="text-green-400 text-sm font-medium">100% Eco-Friendly</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition">Services</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            <li><Link to="/blog" className="hover:text-blue-400 transition">Blog</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Legal</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/privacy" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-blue-400 transition">Terms of Service</Link></li>
            <li><Link to="/faq" className="hover:text-blue-400 transition">FAQ</Link></li>
            <li><Link to="/help" className="hover:text-blue-400 transition">Help Center</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
          <ul className="space-y-3 text-gray-400 text-sm mb-8">
            <li className="flex items-center space-x-2">
             
              <a href="mailto:support@cleanconnect.com" className="hover:text-blue-400">support@cleanconnect.com</a>
            </li>
            <li className="flex items-center space-x-2">
         
              <span>+880 123 456 789</span>
            </li>
            <li className="flex items-center space-x-2">
          
              <span>Dhaka, Bangladesh</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src="https://thumbs.dreamstime.com/b/set-popular-social-media-logos-icons-black-instagram-facebook-twitter-youtube-whatsapp-linkedin-element-vector-white-146258388.jpg" alt="Facebook" className="w-10 h-10" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src="https://i.etsystatic.com/12388285/r/il/6e30e8/1358056790/il_570xN.1358056790_8bl9.jpg" alt="Instagram" className="w-10 h-10 rounded-full" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src="https://thumbs.dreamstime.com/b/social-media-icon-set-facebook-yelp-instagram-linkedin-youtube-pinterest-twitter-google-plus-also-skype-flickr-viber-vine-130603483.jpg" alt="Twitter" className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        <p>&copy; 2026 CleanConnect. All rights reserved. Made with Love for a cleaner world.</p>
      </div>
    </footer>
  );
};

export default Footer;