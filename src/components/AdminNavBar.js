// AdminNavbar.js
import React from 'react';
import { Link } from 'gatsby';

const AdminNavbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center bg-white shadow-lg">
      <div className="text-black text-lg font-semibold">Admin Panel</div>
      <div className="flex">
        <Link to="/admin" className="text-black mr-4 hover:text-gray-300">Users</Link>
        <Link to="/hostels" className="text-black mr-4 hover:text-gray-300">Hostels</Link>
      </div>
      <button className="border-2 border-black text-black px-4 py-2 rounded hover:bg-blue-500 hover:text-white">Logout</button>
    </nav>
  );
};

export default AdminNavbar;
