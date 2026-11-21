import api from '../api';

export const createRoom = async (roomData) => {
  const response = await api.post('/bookings/rooms', roomData);
  return response.data;
};

export const deleteRoom = async (roomId) => {
  const response = await api.delete(`/bookings/rooms/${roomId}`);
  return response.data;
};

export const getAllRooms = async () => {
  const response = await api.get('/bookings/rooms');
  return response.data;
};

export const getRoomById = async (roomId) => {
  const response = await api.get(`/bookings/rooms/${roomId}`);
  return response.data;
};

export const updateRoom = async (roomId, roomData) => {
  const response = await api.put(`/bookings/rooms/${roomId}`, roomData);
  return response.data;
};
