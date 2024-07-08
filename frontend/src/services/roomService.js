import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const createRoom = async (roomData) => {
  const response = await axios.post(`${API_URL}/bookingRoute`, roomData);
  return response.data;
};

export const deleteRoom = async (roomId) => {
  const response = await axios.delete(`${API_URL}/bookingRoute/${roomId}`);
  return response.data;
};

export const getAllRooms = async () => {
  const response = await axios.get(`${API_URL}/bookingRoute`);
  return response.data;
};

export const getRoomById = async (roomId) => {
  const response = await axios.get(`${API_URL}/bookingRoute/${roomId}`);
  return response.data;
};

export const updateRoom = async (roomId, roomData) => {
  const response = await axios.put(`${API_URL}/bookingRoute/${roomId}`, roomData);
  return response.data;
};
