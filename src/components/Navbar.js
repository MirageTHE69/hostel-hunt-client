import React from 'react';
import { Link, navigate } from 'gatsby';

const Navbar = () => {
  const handleLogout = () => {
    // Perform any logout logic here (e.g., clear user session, etc.)
    
    // Redirect to the login page
    navigate("/");
  };

  return (
    <nav className="p-4 flex justify-between items-center bg-white shadow-lg">
      <Link to="/dashboard" className="text-black text-lg font-semibold">Hostel Hunt</Link>
      <div className="flex">
        <Link to="/dashboard" className="text-black mr-4 hover:text-gray-300">Dashboard</Link>
        <Link to="/contact" className="text-black mr-4 hover:text-gray-300">Contact Us</Link>
        <Link to="/about" className="text-black mr-4 hover:text-gray-300">About Us</Link>
      </div>
      <button 
        className="border-2 border-black text-black px-4 py-2 rounded hover:bg-blue-500 hover:text-white" 
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
