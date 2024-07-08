import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:4000/bookingRoute');
        setRooms(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div>
      <h2>Room List</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room._id}>
            <Link to={`/room/${room._id}`}>
              {room.name} - {room.roomtype}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomList;
