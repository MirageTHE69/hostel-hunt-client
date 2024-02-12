import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../images/Hero.jpg";
import HostelService from "../services/nearbyService.js";

const Dashboard = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [nearbyHostels, setNearbyHostels] = useState([]);
  const [selectedHostel, setSelectedHostel] = useState(null);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setLatitude(lat);
        setLongitude(lng);
        fetchNearbyHostels(lat, lng);
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );
  };

  const fetchNearbyHostels = async (lat, lng) => {
    try {
      const response = await HostelService.getNearbyHostels(lat, lng);
      setNearbyHostels(response.data.hostels);
    } catch (error) {
      console.error("Error fetching nearby hostels:", error.message);
    }
  };

  const handleHostelClick = (hostel) => {
    setSelectedHostel(hostel);
  };

  const handleCloseDialog = () => {
    setSelectedHostel(null);
  };

  const handleShowDetailPage = (id) => {
    // Redirect to the hostel detail page with the specific hostel ID in the URL
    window.location.href = `/hostelDetail?id=${id}`;
  };

  return (
    <div className="h-screen w-screen bg-gray-100">
      <Navbar />
      <div className="h-[60%] w-screen p-5">
        <img src={Hero} alt="Hero" className="h-full w-full object-cover " />
      </div>

      <div className="h-[8%] w-screen  p-2">
        <div className="flex justify-between px-5">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="mr-4 rounded-md border border-gray-300 px-4 py-2"
            />
            <select className="mr-4 rounded-md border border-gray-300 px-4 py-2">
              <option value="1">Person 1</option>
              <option value="2">Person 2</option>
              <option value="3">Person 3</option>
            </select>
            <button
              className="rounded-md bg-blue-400 px-4 py-2 text-white"
              onClick={getLocation}
            >
              Get Location
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen p-5">
        <div className="grid grid-cols-3 gap-4">
          {nearbyHostels.map((hostel) => (
            <div
              key={hostel._id}
              className="bg-white p-4 cursor-pointer rounded-lg shadow-md transition duration-300 hover:shadow-lg"
              onClick={() => handleHostelClick(hostel)}
            >
              <div className="h-48 bg-gray-300 rounded-md" style={{backgroundImage: `url(${hostel.images[0]})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
              <div className="p-4">
                <h5 className="text-xl font-bold mb-2">{hostel.name}</h5>
                <p className="text-gray-600">
                  Location: {hostel.city}, {hostel.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedHostel && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              {selectedHostel.name}
            </h2>
            <p className="mb-4">
              Location: {selectedHostel.city}, {selectedHostel.address}
            </p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={() => handleShowDetailPage(selectedHostel._id)}
            >
              Go to Hostel Detail Page
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 ml-4 rounded-lg"
              onClick={handleCloseDialog}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
