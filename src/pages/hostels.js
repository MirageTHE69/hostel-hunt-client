// AdminHostels.js
import React, { useEffect, useState } from 'react';
import HostelService from '../services/hostelService';
import AdminNavbar from '../components/AdminNavBar';

const AdminHostels = () => {
  const [hostels, setHostels] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await HostelService.getAllHostels();
        setHostels(response.data.hostels); // Access the 'hostels' array from the response data
      } catch (error) {
        console.error('Error fetching hostels:', error.message);
        setError('Failed to fetch hostels');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <AdminNavbar/>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Hostel List</h1>
        {error && <p className="text-red-500">{error}</p>}
        <table className="border-collapse w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 border border-gray-300">Hostel Name</th>
              <th className="p-3 border border-gray-300">Location</th>
              <th className="p-3 border border-gray-300">Contact Number</th>
              <th className="p-3 border border-gray-300">City</th>
            </tr>
          </thead>
          <tbody>
            {hostels.map(hostel => (
              <tr key={hostel._id} className="bg-white">
                <td className="p-3 border border-gray-300">{hostel.name}</td>
                <td className="p-3 border border-gray-300">{hostel.address}</td>
                <td className="p-3 border border-gray-300">{hostel.contactNumber}</td>
                <td className="p-3 border border-gray-300">{hostel.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHostels;
