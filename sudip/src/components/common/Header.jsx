import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header-main">
      <div className="header-container">
        <div className="header-content">
          <div className="flex-shrink-0">
            <Link to="/" className="header-logo">NoteShare</Link>
          </div>
          <div className="nav-desktop">
            <div className="nav-list">
              <Link to="/" className="nav-item">Home</Link>
              <Link to="/notes" className="nav-item">Notes</Link>
              <Link to="/dashboard" className="nav-item">Dashboard</Link>
            </div>
          </div>
          <div className="search-desktop">
            <SearchBar />
          </div>
          <div className="auth-buttons-desktop">
            <div className="auth-buttons-group">
              <Link to="/login" className="login-button">Login</Link>
              <Link to="/signup" className="signup-button">Sign up</Link>
            </div>
          </div>
          <div className="mobile-menu-toggle">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="mobile-menu-button" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="mobile-menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="mobile-menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu-panel open" id="mobile-menu">
          <div className="mobile-nav-links">
            <Link to="/" className="mobile-nav-item">Home</Link>
            <Link to="/notes" className="mobile-nav-item">Notes</Link>
            <Link to="/dashboard" className="mobile-nav-item">Dashboard</Link>
            <div className="mobile-search-bar-wrapper">
              <SearchBar />
            </div>
          </div>
          <div className="mobile-auth-buttons">
            <div className="mobile-auth-buttons-inner">
              <div className="mobile-login-button-wrapper">
                <Link to="/login" className="mobile-login-button">Login</Link>
              </div>
              <div className="mobile-signup-button-wrapper">
                <Link to="/signup" className="mobile-signup-button">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
