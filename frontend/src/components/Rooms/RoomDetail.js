import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRoomById } from '../../services/roomService';

const RoomDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        setRoom(await getRoomById(id));
      } catch (error) {
        setError(error.response?.data?.message || 'Unable to load this room. Please try again.');
      }
    };

    fetchRoom();
  }, [id]);

  if (error) return <p className="container mt-4" role="alert">{error}</p>;
  if (!room) return <div>Loading...</div>;

  return (
    <div>
      <h2>{room.name}</h2>
      <p>Email: {room.email}</p>
      <p>Phone: {room.phone}</p>
      <p>Room Type: {room.roomtype}</p>
      <p>Check-in Date: {room.checkindate}</p>
      <p>Check-out Date: {room.checkoutdate}</p>
      <p>Adhaar: {room.adhaar}</p>
      <Link to={`/update-room/${room._id}`}>Update Room</Link>
    </div>
  );
};

export default RoomDetail;
