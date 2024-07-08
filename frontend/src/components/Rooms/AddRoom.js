import React, { useState } from 'react';
import axios from 'axios';

const AddRoom = () => {
  const [roomData, setRoomData] = useState({
    name: '',
    email: '',
    phone: '',
    roomtype: '',
    checkindate: '',
    checkoutdate: '',
    adhaar: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomData({ ...roomData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/rooms', roomData);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Room</h2>
      <form onSubmit={handleSubmit}>
        {/* Add form fields for each room attribute */}
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
        <button type="submit">Add Room</button>
      </form>
    </div>
  );
};

export default AddRoom;
