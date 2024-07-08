import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const RoomDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/bookingRoute/${id}`);
        setRoom(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRoom();
  }, [id]);

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
