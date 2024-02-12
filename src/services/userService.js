import API from '../api/axios.js'; // Make sure the path is correct

const UserService = {
  // Example function to fetch all users
  getAllUsers: async () => {
    try {
      const response = await API.get('user/users');
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Failed to fetch users');
    }
  },


  
    registerUser: async (userData) => {
      try {
        const response = await API.post('/users/register', userData);
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.message || 'Failed to register user');
      }
    }
  
  

  // Add more functions for other API requests as needed
};

export default UserService;
