import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRoomById, updateRoom } from '../../services/roomService';

const UpdateRoom = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [roomtype, setRoomtype] = useState('');
  const [checkindate, setCheckindate] = useState('');
  const [checkoutdate, setCheckoutdate] = useState('');
  const [adhaar, setAdhaar] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const room = await getRoomById(id);
        setName(room.name);
        setEmail(room.email);
        setPhone(room.phone);
        setRoomtype(room.roomtype);
        setCheckindate(new Date(room.checkindate).toISOString().slice(0, 10));
        setCheckoutdate(new Date(room.checkoutdate).toISOString().slice(0, 10));
        setAdhaar(room.adhaar);
      } catch (error) {
        setMessage(error.response?.data?.message || 'Unable to load this room. Please try again.');
      }
    };

    fetchRoom();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateRoom(id, {
        name,
        email,
        phone,
        roomtype,
        checkindate,
        checkoutdate,
        adhaar,
      });
      setMessage('Room booking updated successfully.');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Unable to update the booking. Please try again.');
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
        <select
          aria-label="Room Type"
          value={roomtype}
          onChange={(e) => setRoomtype(e.target.value)}
        >
          <option value="">Select room type</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Suite">Suite</option>
        </select>
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
        {message && <p role="status">{message}</p>}
      </form>
    </div>
  );
};

export default UpdateRoom;
