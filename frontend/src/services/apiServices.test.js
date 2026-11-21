import api from '../api';
import { login, register } from './authService';
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
} from './roomService';

jest.mock('../api', () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

test('auth services use the backend auth routes', async () => {
  api.post.mockResolvedValue({ data: { message: 'ok' } });
  const credentials = { email: 'guest@example.com', password: 'secret' };

  await register({ ...credentials, name: 'Guest' });
  await login(credentials);

  expect(api.post).toHaveBeenNthCalledWith(1, '/auth/register', {
    ...credentials,
    name: 'Guest',
  });
  expect(api.post).toHaveBeenNthCalledWith(2, '/auth/login', credentials);
});

test('room services use the backend booking routes', async () => {
  api.get.mockResolvedValue({ data: [] });
  api.post.mockResolvedValue({ data: { id: 'room-1' } });
  api.put.mockResolvedValue({ data: { id: 'room-1' } });
  api.delete.mockResolvedValue({ data: { message: 'deleted' } });

  await createRoom({ name: 'Guest' });
  await getAllRooms();
  await getRoomById('room-1');
  await updateRoom('room-1', { name: 'Updated guest' });
  await deleteRoom('room-1');

  expect(api.post).toHaveBeenCalledWith('/bookings/rooms', { name: 'Guest' });
  expect(api.get).toHaveBeenNthCalledWith(1, '/bookings/rooms');
  expect(api.get).toHaveBeenNthCalledWith(2, '/bookings/rooms/room-1');
  expect(api.put).toHaveBeenCalledWith('/bookings/rooms/room-1', { name: 'Updated guest' });
  expect(api.delete).toHaveBeenCalledWith('/bookings/rooms/room-1');
});
