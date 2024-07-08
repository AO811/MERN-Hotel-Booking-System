import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const createRoom = async (roomData) => {
  try {
    const response = await axios.post(`${API_URL}/bookingRoute`, roomData);
    return response.data;
  } catch (error) {
    console.error('Error while creating room:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

export const deleteRoom = async (roomId) => {
  try {
    const response = await axios.delete(`${API_URL}/bookingRoute/${roomId}`);
    return response.data;
  } catch (error) {
    console.error('Error while deleting room:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

export const getAllRooms = async () => {
  try {
    const response = await axios.get(`${API_URL}/bookingRoute`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching rooms:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

export const getRoomById = async (roomId) => {
  try {
    const response = await axios.get(`${API_URL}/bookingRoute/${roomId}`);
    return response.data;
  } catch (error) {
    console.error(`Error while fetching room with ID ${roomId}:`, error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

export const updateRoom = async (roomId, roomData) => {
  try {
    const response = await axios.put(`${API_URL}/bookingRoute/${roomId}`, roomData);
    return response.data;
  } catch (error) {
    console.error(`Error while updating room with ID ${roomId}:`, error);
    throw error; // Re-throw the error to be handled by the caller
  }
};
