import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero__inner ui-container">
          <div className="hero__copy">
            <p className="eyebrow"><span className="eyebrow__dot" />A more thoughtful kind of stay</p>
            <h1>Find your place to <em>pause.</em></h1>
            <p className="hero__description">
              Make space for a change of scene. Discover a stay that feels easy,
              welcoming, and a little more like you.
            </p>
            <div className="button-row">
              <Link className="button button--primary" to="/rooms">Explore stays <span aria-hidden="true">↗</span></Link>
              <Link className="button button--secondary" to="/add-room">Plan a stay</Link>
            </div>
            <div className="hero__notes" aria-label="Booking highlights">
              <span className="hero__note"><span className="hero__note-mark" aria-hidden="true">✓</span>Simple booking</span>
              <span className="hero__note"><span className="hero__note-mark" aria-hidden="true">✓</span>Room for every trip</span>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__scene">
              <span className="hero__scene-label">A change of scenery</span>
            </div>
            <div className="hero__floating-card">
              <span>Make time for you</span>
              <strong>Your next chapter starts here.</strong>
              <small>Choose dates. Pick a room. Take a breath.</small>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="ui-container">
          <div className="section-heading">
            <p className="eyebrow"><span className="eyebrow__dot" />Travel, made personal</p>
            <h2>Good stays make room for good moments.</h2>
            <p>
              Whether it is a quick reset or a long-awaited escape, getting away
              should feel refreshingly straightforward.
            </p>
          </div>
          <div className="intro-grid">
            <article className="intro-card">
              <span className="intro-card__index">01</span>
              <h3>Find your fit</h3>
              <p>Browse room options and choose the kind of stay that suits your trip.</p>
            </article>
            <article className="intro-card">
              <span className="intro-card__index">02</span>
              <h3>Make it yours</h3>
              <p>Share your details and dates in a simple, guided booking flow.</p>
            </article>
            <article className="intro-card">
              <span className="intro-card__index">03</span>
              <h3>Look forward</h3>
              <p>Keep your stay details together so planning feels a little lighter.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
