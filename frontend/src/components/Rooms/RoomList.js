import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllRooms } from '../../services/roomService';
import 'bootstrap/dist/css/bootstrap.min.css';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setRooms(await getAllRooms());
      } catch (error) {
        setError(error.response?.data?.message || 'Unable to load rooms. Please try again.');
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
              {error && <p role="alert">{error}</p>}
              <ul className="list-group list-group-flush">
                {rooms.map((room) => (
                  <li key={room._id} className="list-group-item">
                    <Link to={`/room/${room._id}`} className="text-decoration-none text-primary">
                      {room.name} - {room.roomtype}
                    </Link>
                  </li>
                ))}
              </ul>
              {!error && rooms.length === 0 && <p className="mt-3">No rooms are available.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomList;
