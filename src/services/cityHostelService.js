import API from '../api/axios.js'; // Make sure the path is correct

const CityHostelService = {
  getCityHostels: async (cityName) => {
    try {
      const response = await API.get(`/hostel/city?city=${cityName}`);
      console.log(response.data); // Log the response data
      return response.data;
    } catch (error) {
      console.error('Error fetching city hostels:', error.message);
      throw new Error('Failed to fetch city hostels');
    }
  },
};

export default CityHostelService;
