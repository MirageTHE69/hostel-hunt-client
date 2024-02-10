// Navbar.js
import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <nav className=" p-4 flex justify-between items-center">
      <div className="text-black text-lg font-semibold">Hostel Hunt</div>
      <div className="flex">
        <Link to="/" className="text-blacl mr-4 hover:text-gray-300">Home</Link>
        <Link to="/contact" className="text-black mr-4 hover:text-gray-300">Contact Us</Link>
        <Link to="/about" className="text-black mr-4 hover:text-gray-300">About Us</Link>
      </div>
      <button className="border-2 border-black text-black    px-4 py-2 rounded hover:bg-blue-500 hover:text-white">Login</button>

    </nav>
  );
};

export default Navbar;
