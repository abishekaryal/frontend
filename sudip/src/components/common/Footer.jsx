import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="container header-container py-8">
        <div className="footer-content">
          <div>
            <h3 className="footer-section-title">NoteShare</h3>
            <p className="footer-text-gray-400">The best place to share and discover study notes.</p>
          </div>
          <div>
            <h3 className="footer-section-title">Quick Links</h3>
            <ul className="footer-links-list">
              <li><Link to="/" className="footer-text-gray-400 footer-link">Home</Link></li>
              <li><Link to="/notes" className="footer-text-gray-400 footer-link">Notes</Link></li>
              <li><Link to="/about" className="footer-text-gray-400 footer-link">About</Link></li>
              <li><Link to="/contact" className="footer-text-gray-400 footer-link">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-section-title">Follow Us</h3>
            <div className="footer-social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-text-gray-400 footer-social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-text-gray-400 footer-social-link"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-text-gray-400 footer-social-link"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom-text">
          <p>&copy; 2025 NoteShare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
