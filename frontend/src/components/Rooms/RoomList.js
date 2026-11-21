import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllRooms } from '../../services/roomService';

const formatDate = (value) => new Date(value).toLocaleDateString(undefined, {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

const RoomList = () => {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setRooms(await getAllRooms());
      } catch (requestError) {
        setError(requestError.response?.data?.message || 'Unable to load your stays. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  return (
    <main className="page-shell">
      <header className="page-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow__dot" />Your travel plans</p>
          <h1>Your stays</h1>
          <p>All your booking details, gathered in one place.</p>
        </div>
        <Link className="button button--primary" to="/add-room">＋ New booking</Link>
      </header>

      {loading && <div className="message-panel" role="status">Loading your stays…</div>}
      {!loading && error && <div className="message-panel message-panel--error" role="alert">{error}</div>}
      {!loading && !error && rooms.length === 0 && (
        <section className="empty-state">
          <p className="eyebrow"><span className="eyebrow__dot" />Nothing booked yet</p>
          <h2>Your next getaway starts with a plan.</h2>
          <p>Create a booking and your stay details will appear here.</p>
          <Link className="button button--primary" to="/add-room">Plan a stay</Link>
        </section>
      )}
      {!loading && !error && rooms.length > 0 && (
        <div className="stay-grid">
          {rooms.map((room) => (
            <article className="stay-card" key={room._id}>
              <div className="stay-card__top">
                <span className="stay-card__type">{room.roomtype}</span>
                <span className="stay-card__reference">
                  STAY · {String(room._id).slice(-6).toUpperCase()}
                </span>
              </div>
              <h2>{room.name}</h2>
              <p className="stay-card__email">{room.email}</p>
              <div className="stay-card__details">
                <div>
                  <span className="detail-label">Check in</span>
                  <span className="detail-value">{formatDate(room.checkindate)}</span>
                </div>
                <div>
                  <span className="detail-label">Check out</span>
                  <span className="detail-value">{formatDate(room.checkoutdate)}</span>
                </div>
              </div>
              <Link className="stay-card__action" to={`/room/${room._id}`}>
                View stay details <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  );
};

export default RoomList;
