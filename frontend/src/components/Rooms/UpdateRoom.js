import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateRoom = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [roomtype, setRoomtype] = useState('');
  const [checkindate, setCheckindate] = useState('');
  const [checkoutdate, setCheckoutdate] = useState('');
  const [adhaar, setAdhaar] = useState('');

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/bookingRoute/UpdateRoom/${id}`);
        const room = response.data;
        setName(room.name);
        setEmail(room.email);
        setPhone(room.phone);
        setRoomtype(room.roomtype);
        setCheckindate(room.checkindate);
        setCheckoutdate(room.checkoutdate);
        setAdhaar(room.adhaar);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRoom();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:4000/bookingRoute/${id}`, {
        name,
        email,
        phone,
        roomtype,
        checkindate,
        checkoutdate,
        adhaar,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Update Room</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Room Type"
          value={roomtype}
          onChange={(e) => setRoomtype(e.target.value)}
        />
        <input
          type="date"
          placeholder="Check-in Date"
          value={checkindate}
          onChange={(e) => setCheckindate(e.target.value)}
        />
        <input
          type="date"
          placeholder="Check-out Date"
          value={checkoutdate}
          onChange={(e) => setCheckoutdate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Adhaar"
          value={adhaar}
          onChange={(e) => setAdhaar(e.target.value)}
        />
        <button type="submit">Update Room</button>
      </form>
    </div>
  );
};

export default UpdateRoom;
