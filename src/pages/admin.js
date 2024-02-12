import React, { useEffect, useState } from 'react';
import UserService from '../services/userService';
import AdminNavbar from '../components/AdminNavBar';

const AdminPortal = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserService.getAllUsers();
        setUsers(response.data.users); // Access the 'users' array from the response data
      } catch (error) {
        console.error('Error fetching users:', error.message);
        setError('Failed to fetch users');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <AdminNavbar/>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">User List</h1>
        {error && <p className="text-red-500">{error}</p>}
        <table className="border-collapse w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 border border-gray-300">Sr.</th>
              <th className="p-3 border border-gray-300">Email</th>
              <th className="p-3 border border-gray-300">Gender</th>
              <th className="p-3 border border-gray-300">Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="bg-white">
                <td className="p-3 border border-gray-300">{index + 1}</td>
                <td className="p-3 border border-gray-300">{user.email}</td>
                <td className="p-3 border border-gray-300">{user.gender}</td>
                <td className="p-3 border border-gray-300">{user.dateOfBirth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPortal;
