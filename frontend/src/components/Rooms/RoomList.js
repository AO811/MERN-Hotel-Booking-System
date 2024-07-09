import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:4000/bookingRoute/');
        setRooms(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Room List</h2>
              <ul className="list-group list-group-flush">
                {rooms.map((room) => (
                  <li key={room._id} className="list-group-item">
                    <Link to={`/room/${room._id}`} className="text-decoration-none text-primary">
                      {room.name} - {room.roomtype}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomList;
