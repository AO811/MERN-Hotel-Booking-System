import React, { useState } from 'react';
import { createRoom } from '../../services/roomService';

const AddRoom = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [roomtype, setRoomtype] = useState('');
  const [checkindate, setCheckindate] = useState('');
  const [checkoutdate, setCheckoutdate] = useState('');
  const [adhaar, setAdhaar] = useState('');
  const [message, setMessage] = useState(null);

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
      setMessage({ type: 'success', text: 'Your booking has been created.' });
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.response?.data?.message || 'Unable to create the booking. Please try again.',
      });
    }
  };

  return (
    <main className="form-page">
      <header className="form-heading">
        <p className="eyebrow"><span className="eyebrow__dot" />A few details, then you’re set</p>
        <h1>Plan your stay</h1>
        <p>Tell us who is travelling and when you would like to arrive.</p>
      </header>

      <section className="form-card">
        {message && (
          <div className={`message-panel message-panel--${message.type}`} role={message.type === 'error' ? 'alert' : 'status'}>
            {message.text}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="name">Guest name</label>
              <input
                type="text"
                id="name"
                autoComplete="name"
                placeholder="Your full name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone number</label>
              <input
                type="tel"
                id="phone"
                autoComplete="tel"
                placeholder="Your contact number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="roomtype">Room type</label>
              <select
                id="roomtype"
                required
                value={roomtype}
                onChange={(e) => setRoomtype(e.target.value)}
              >
                <option value="">Choose a room</option>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                <option value="Suite">Suite</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="checkindate">Check-in</label>
              <input
                type="date"
                id="checkindate"
                required
                value={checkindate}
                onChange={(e) => setCheckindate(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="checkoutdate">Check-out</label>
              <input
                type="date"
                id="checkoutdate"
                min={checkindate || undefined}
                required
                value={checkoutdate}
                onChange={(e) => setCheckoutdate(e.target.value)}
              />
            </div>
            <div className="form-field form-field--wide">
              <label htmlFor="adhaar">Aadhaar number</label>
              <input
                type="text"
                id="adhaar"
                autoComplete="off"
                placeholder="Enter your Aadhaar number"
                required
                value={adhaar}
                onChange={(e) => setAdhaar(e.target.value)}
              />
            </div>
          </div>
          <div className="form-card__footer">
            <span className="form-card__hint">Your details are used to manage this booking.</span>
            <button type="submit" className="button button--primary">Create booking <span aria-hidden="true">→</span></button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default AddRoom;
