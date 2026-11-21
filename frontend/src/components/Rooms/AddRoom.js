import React, { useState } from 'react';
import { createRoom } from '../../services/roomService';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddRoom = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [roomtype, setRoomtype] = useState('');
  const [checkindate, setCheckindate] = useState('');
  const [checkoutdate, setCheckoutdate] = useState('');
  const [adhaar, setAdhaar] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createRoom({
        name,
        email,
        phone,
        roomtype,
        checkindate,
        checkoutdate,
        adhaar,
      });
      setMessage('Room booking created successfully.');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Unable to create the booking. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Add Room</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-control"
                    placeholder="Enter your phone number"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-group">
          <label htmlFor="roomtype">Room Type</label>
          <select
            id="roomtype"
            className="form-control"
            required
            value={roomtype}
            onChange={(e) => setRoomtype(e.target.value)}
          >
            <option value="">Select room type</option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Suite">Suite</option>
          </select>
        </div>
                <div className="form-group">
                  <label htmlFor="checkindate">Check-in Date</label>
                  <input
                    type="date"
                    id="checkindate"
                    className="form-control"
                    placeholder="Enter check-in date"
                    required
                    value={checkindate}
                    onChange={(e) => setCheckindate(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="checkoutdate">Check-out Date</label>
                  <input
                    type="date"
                    id="checkoutdate"
                    className="form-control"
                    placeholder="Enter check-out date"
                    required
                    value={checkoutdate}
                    onChange={(e) => setCheckoutdate(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="adhaar">Adhaar</label>
                  <input
                    type="text"
                    id="adhaar"
                    className="form-control"
                    placeholder="Enter Adhaar number"
                    required
                    value={adhaar}
                    onChange={(e) => setAdhaar(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-3">
                  Add Room
                </button>
                {message && <p className="mt-3" role="status">{message}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
