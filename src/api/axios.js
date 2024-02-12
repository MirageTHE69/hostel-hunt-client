import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api', // Set base URL to 'http://localhost:3000/'
  headers: {
    'Content-Type': 'application/json',
    // Add more headers if needed
  },
});

// Request interceptor for adding token to requests
API.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token'); // Retrieve token from storage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling global response errors
API.interceptors.response.use(
  (response) => {
    // Handle global response actions if needed
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access, e.g., redirect to login or refresh token
    }
    // Handle other global API errors
    return Promise.reject(error);
  }
);

export default API;
