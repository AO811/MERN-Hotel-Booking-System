import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const AddRoom = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [roomtype, setRoomtype] = useState('');
  const [checkindate, setCheckindate] = useState('');
  const [checkoutdate, setCheckoutdate] = useState('');
  const [adhaar, setAdhaar] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/bookingRoute/createRoom/', {
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="roomtype">Room Type</label>
                  <input
                    type="text"
                    id="roomtype"
                    className="form-control"
                    placeholder="Enter room type"
                    value={roomtype}
                    onChange={(e) => setRoomtype(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="checkindate">Check-in Date</label>
                  <input
                    type="date"
                    id="checkindate"
                    className="form-control"
                    placeholder="Enter check-in date"
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
                    value={adhaar}
                    onChange={(e) => setAdhaar(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-3">
                  Add Room
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
