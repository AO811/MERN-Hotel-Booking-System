import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRoomById } from '../../services/roomService';

const formatDate = (value) => new Date(value).toLocaleDateString(undefined, {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

const RoomDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        setRoom(await getRoomById(id));
      } catch (requestError) {
        setError(requestError.response?.data?.message || 'Unable to load this stay. Please try again.');
      }
    };

    fetchRoom();
  }, [id]);

  return (
    <main className="page-shell">
      <Link className="stay-card__action" to="/rooms">← Back to your stays</Link>
      {error && <div className="message-panel message-panel--error" role="alert">{error}</div>}
      {!room && !error && <div className="message-panel" role="status">Loading stay details…</div>}
      {room && (
        <article className="detail-card">
          <header className="detail-card__banner">
            <p className="eyebrow"><span className="eyebrow__dot" />Stay details</p>
            <h1>{room.roomtype}</h1>
            <p>Reserved for {room.name}</p>
          </header>
          <div className="detail-card__body">
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Guest</span>
                <span className="detail-value">{room.name}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Room type</span>
                <span className="detail-value">{room.roomtype}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Check in</span>
                <span className="detail-value">{formatDate(room.checkindate)}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Check out</span>
                <span className="detail-value">{formatDate(room.checkoutdate)}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <span className="detail-value">{room.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone</span>
                <span className="detail-value">{room.phone}</span>
              </div>
            </div>
            <Link className="button button--primary" to={`/update-room/${room._id}`}>
              Edit booking
            </Link>
          </div>
        </article>
      )}
    </main>
  );
};

export default RoomDetail;
