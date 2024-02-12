import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const HostelService = {
  fetchHostelById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/hostel/${id}`);
      return response.data; // Assuming the response contains hostel details
    } catch (error) {
      throw new Error(`Error fetching hostel details: ${error.message}`);
    }
  },

  getAllHostels: async () => {
    try {
      const response = await axios.get(`${API_URL}/hostel`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch hostels');
    }
  },
};

export default HostelService;
