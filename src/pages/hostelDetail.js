import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const HostelDetailPage = () => {
  const [hostelId, setHostelId] = useState(null);
  const [hostelData, setHostelData] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [feedbackIndex, setFeedbackIndex] = useState(0);

  useEffect(() => {
    // Function to get URL query parameters
    const getQueryParams = () => {
      const queryParams = new URLSearchParams(window.location.search);
      return queryParams.get("id");
    };

    // Retrieve the hostel ID from the URL query parameters
    const id = getQueryParams();
    setHostelId(id);

    // Fetch hostel details based on the retrieved ID
    const fetchHostelDetails = async () => {
      try {
        // Make an API call to fetch hostel details by ID
        const response = await axios.get(`http://localhost:3000/api/hostel/${id}`);
        setHostelData(response.data.data.hostel);
        console.log("Fetched hostel details:", response.data.data.hostel);
      } catch (error) {
        console.error("Error fetching hostel details:", error.message);
      }
    };

    // Fetch hostel details when component mounts
    if (id) {
      fetchHostelDetails();
    }
  }, [hostelId]);

  useEffect(() => {
    // Automatically switch feedback every 2 seconds
    if (hostelData && hostelData.feedback && hostelData.feedback.length > 0) {
      const interval = setInterval(() => {
        setFeedbackIndex((prevIndex) => (prevIndex + 1) % hostelData.feedback.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [hostelData]);

  const toggleFullscreenImage = (image) => {
    if (fullscreenImage === image) {
      setFullscreenImage(null);
    } else {
      setFullscreenImage(image);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        {hostelData && (
          <div className="bg-white rounded-lg shadow-lg">
            <div className="h-96 rounded-t-lg overflow-hidden relative">
              <img
                src={hostelData.images[0]}
                alt={hostelData.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">{hostelData.name}</h2>
              <p className="text-gray-600 text-lg mb-4">
                Location: {hostelData.city}, {hostelData.address}
              </p>
              <p className="text-gray-600 text-lg mb-4">{hostelData.description}</p>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Amenities:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {hostelData.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {hostelData.images.slice(1).map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md">
                    <img
                      src={image}
                      alt={`Hostel Image ${index}`}
                      className="w-full h-48 object-cover cursor-pointer"
                      onClick={() => toggleFullscreenImage(image)}
                    />
                    {fullscreenImage === image && (
                      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center" onClick={() => toggleFullscreenImage(image)}>
                        <img src={image} alt={`Hostel Image ${index}`} className="max-h-full max-w-full" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* Feedback Section */}
              <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-4">Feedback</h2>
                {hostelData.feedback && hostelData.feedback.length > 0 ? (
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <p className="text-gray-800">{hostelData.feedback[feedbackIndex]}</p>
                  </div>
                ) : (
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <p className="text-gray-800">No feedback available</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HostelDetailPage;
