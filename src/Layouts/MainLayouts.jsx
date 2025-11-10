import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayouts = () => {
    return (
     <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className="flex-1 py-10"><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;


