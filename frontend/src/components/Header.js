import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container-fluid">
          <ul className="navbar-nav mr-auto" style={{ display: 'flex', gap: '10px' }}>
            <li className="nav-item">
              <NavLink 
                end
                to="/" 
                className={({ isActive }) => `nav-link text-primary${isActive ? ' active-link' : ''}`}
                style={{ backgroundColor: '#e3f2fd', borderRadius: '5px', padding: '10px' }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/login" 
                className={({ isActive }) => `nav-link text-success${isActive ? ' active-link' : ''}`}
                style={{ backgroundColor: '#d4edda', borderRadius: '5px', padding: '10px' }}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/register" 
                className={({ isActive }) => `nav-link text-warning${isActive ? ' active-link' : ''}`}
                style={{ backgroundColor: '#fff3cd', borderRadius: '5px', padding: '10px' }}
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/rooms" 
                className={({ isActive }) => `nav-link text-info${isActive ? ' active-link' : ''}`}
                style={{ backgroundColor: '#d1ecf1', borderRadius: '5px', padding: '10px' }}
              >
                Room List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/add-room" 
                className={({ isActive }) => `nav-link text-danger${isActive ? ' active-link' : ''}`}
                style={{ backgroundColor: '#f8d7da', borderRadius: '5px', padding: '10px' }}
              >
                Add Room
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
