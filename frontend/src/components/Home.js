import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to our Hotel Booking App</h1>
        <p className="lead">Your premier destination for booking rooms online.</p>
        <hr className="my-4" />
        <p>Explore our rooms and start planning your stay with us today!</p>
        <Link className="btn btn-primary btn-lg" to="/rooms" role="button">View Rooms</Link>
      </div>
    </div>
  );
};

export default Home;
