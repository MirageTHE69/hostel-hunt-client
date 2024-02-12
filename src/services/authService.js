// authService.js

import API from '../api/axios.js'; // Make sure the path is correct

const login = async (email, password) => {
  try {
    console.log("email and password is here ");
    const response = await API.post('/user/login', { email, password });
    console.log("response performed ");
    const { token } = response.data;
    localStorage.setItem('token', token); // Store the token in local storage
    return true; // Return true on successful login
  } catch (error) {
    console.error('Login failed:', error);
    return false; // Return false if login fails
  }
};

export default login;
