import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const navClass = ({ isActive }) =>
    `site-nav__link${isActive ? ' is-active' : ''}`;

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <div className="site-nav__identity">
          <Link className="site-brand" to="/" onClick={closeMenu} aria-label="Haven Hotel home">
            <span className="site-brand__mark" aria-hidden="true">H</span>
            <span className="site-brand__text">
              <strong>Haven</strong>
              <small>HOTEL &amp; STAYS</small>
            </span>
          </Link>
          <button
            className="site-nav__toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <span />
          </button>
        </div>

        <div
          className={`site-nav__links${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
        >
          <NavLink className={navClass} end to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink className={navClass} to="/rooms" onClick={closeMenu}>My stays</NavLink>
          <NavLink className={navClass} to="/add-room" onClick={closeMenu}>New booking</NavLink>
          <NavLink className={navClass} to="/login" onClick={closeMenu}>Log in</NavLink>
          <NavLink
            className={({ isActive }) =>
              `site-nav__link site-nav__link--account${isActive ? ' is-active' : ''}`
            }
            to="/register"
            onClick={closeMenu}
          >
            Create account
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
