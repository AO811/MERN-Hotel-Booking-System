import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateRoom = () => {
  const { id } = useParams();
  const [roomData, setRoomData] = useState({
    name: '',
    email: '',
    phone: '',
    roomtype: '',
    checkindate: '',
    checkoutdate: '',
    adhaar: ''
  });

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res = await axios.get(`/api/rooms/${id}`);
        setRoomData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRoom();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomData({ ...roomData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/api/rooms/${id}`, roomData);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Update Room</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(roomData).map((key) => (
          <div key={key}>
            <label>{key}</label>
            <input
              type="text"
              name={key}
              value={roomData[key]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit">Update Room</button>
      </form>
    </div>
  );
};

export default UpdateRoom;
