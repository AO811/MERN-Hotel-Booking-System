import React from 'react';

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to our Hotel Booking App</h1>
        <p className="lead">Your premier destination for booking rooms online.</p>
        <hr className="my-4" />
        <p>Explore our rooms and start planning your stay with us today!</p>
        <a className="btn btn-primary btn-lg" href="/rooms" role="button">View Rooms</a>
      </div>
    </div>
  );
};

export default Home;
