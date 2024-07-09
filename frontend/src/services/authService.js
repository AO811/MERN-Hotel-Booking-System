import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/userRoute/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error while registering:', error);
    throw error; 
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/userRoute/login`, userData);
    return response.data;
  } catch (error) {
    console.error('Error while logging in:', error);
    throw error; 
  }
};
