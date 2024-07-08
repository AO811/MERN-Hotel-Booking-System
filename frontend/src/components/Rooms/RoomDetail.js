import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RoomDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res = await axios.get(`/api/rooms/${id}`);
        setRoom(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRoom();
  }, [id]);

  return (
    <div>
      <h2>Room Detail</h2>
      {room ? (
        <div>
          <p>Name: {room.name}</p>
          <p>Email: {room.email}</p>
          <p>Phone: {room.phone}</p>
          <p>Room Type: {room.roomtype}</p>
          <p>Check-in Date: {room.checkindate}</p>
          <p>Check-out Date: {room.checkoutdate}</p>
          <p>Adhaar: {room.adhaar}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RoomDetail;
