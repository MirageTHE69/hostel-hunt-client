import React from 'react';

const AdminPortal = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">User List</h1>
      <table className="border-collapse w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 border border-gray-300">User Name</th>
            <th className="p-3 border border-gray-300">Email</th>
            <th className="p-3 border border-gray-300">Gender</th>
            <th className="p-3 border border-gray-300">Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="p-3 border border-gray-300">Mirage</td>
            <td className="p-3 border border-gray-300 flex ">mthakore12@gmail.com</td>
            <td className="p-3 border border-gray-300">Male</td>
            <td className="p-3 border border-gray-300">20/11/2000</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPortal;
