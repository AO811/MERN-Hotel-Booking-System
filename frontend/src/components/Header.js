import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active-link">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register" activeClassName="active-link">Register</NavLink>
          </li>
          <li>
            <NavLink to="/rooms" activeClassName="active-link">Room List</NavLink>
          </li>
          <li>
            <NavLink to="/add-room" activeClassName="active-link">Add Room</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
