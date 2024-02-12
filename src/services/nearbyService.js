import API from '../api/axios.js'; // Make sure the path is correct

const HostelService = {
  getNearbyHostels: async (latitude, longitude) => {
    try {
      const response = await API.get(`/hostel/nearby?lat=${latitude}&lng=${longitude}`);
      console.log(response.data); // Log the response data
      return response.data;
    } catch (error) {
      console.error('Error fetching nearby hostels:', error.message);
      throw new Error('Failed to fetch nearby hostels');
    }
  },
};

export default HostelService;  
