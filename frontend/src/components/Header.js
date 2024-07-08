import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/rooms">Room List</Link>
          </li>
          <li>
            <Link to="/add-room">Add Room</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
