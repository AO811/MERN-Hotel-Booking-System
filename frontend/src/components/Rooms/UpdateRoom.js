import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
  const [message, setMessage] = useState(null);
  const [loadError, setLoadError] = useState('');
  const [loading, setLoading] = useState(true);

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
        setLoadError(error.response?.data?.message || 'Unable to load this booking. Please try again.');
      } finally {
        setLoading(false);
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
      setMessage({ type: 'success', text: 'Your booking has been updated.' });
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.response?.data?.message || 'Unable to update the booking. Please try again.',
      });
    }
  };

  return (
    <main className="form-page">
      <Link className="stay-card__action" to={`/room/${id}`}>← Back to booking</Link>
      <header className="form-heading">
        <p className="eyebrow"><span className="eyebrow__dot" />Keep the details up to date</p>
        <h1>Edit your booking</h1>
        <p>Make changes to the guest or stay information below.</p>
      </header>

      {loading && <div className="message-panel" role="status">Loading booking details…</div>}
      {!loading && loadError && (
        <div className="message-panel message-panel--error" role="alert">{loadError}</div>
      )}
      {!loading && !loadError && (
        <section className="form-card">
          {message && (
            <div
              className={`message-panel message-panel--${message.type}`}
              role={message.type === 'error' ? 'alert' : 'status'}
            >
              {message.text}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="name">Guest name</label>
                <input id="name" type="text" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email address</label>
                <input id="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Phone number</label>
                <input id="phone" type="tel" autoComplete="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="form-field">
                <label htmlFor="roomtype">Room type</label>
                <select id="roomtype" required value={roomtype} onChange={(e) => setRoomtype(e.target.value)}>
                  <option value="">Choose a room</option>
                  <option value="Single">Single</option>
                  <option value="Double">Double</option>
                  <option value="Suite">Suite</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="checkindate">Check-in</label>
                <input id="checkindate" type="date" required value={checkindate} onChange={(e) => setCheckindate(e.target.value)} />
              </div>
              <div className="form-field">
                <label htmlFor="checkoutdate">Check-out</label>
                <input id="checkoutdate" type="date" min={checkindate || undefined} required value={checkoutdate} onChange={(e) => setCheckoutdate(e.target.value)} />
              </div>
              <div className="form-field form-field--wide">
                <label htmlFor="adhaar">Aadhaar number</label>
                <input id="adhaar" type="text" autoComplete="off" required value={adhaar} onChange={(e) => setAdhaar(e.target.value)} />
              </div>
            </div>
            <div className="form-card__footer">
              <span className="form-card__hint">Double-check your dates before saving.</span>
              <button type="submit" className="button button--primary">Save changes <span aria-hidden="true">→</span></button>
            </div>
          </form>
        </section>
      )}
    </main>
  );
};

export default UpdateRoom;
