import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-content">
          <h1 className="hero-title">
            The Ultimate Platform for Note Sharing
          </h1>
          <p className="hero-subtitle">
            Join a community of learners and educators to share and discover high-quality study materials.
          </p>
          <div className="hero-buttons">
            <Link to="/signup" className="hero-button-primary">Get Started</Link>
            <Link to="/notes" className="hero-button-secondary">Browse Notes</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-header">
            <h2 className="features-title">Why NoteShare?</h2>
            <p className="features-subtitle">Everything you need to succeed in your courses.</p>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <i className="fas fa-upload feature-icon"></i>
              </div>
              <h3 className="feature-title">Upload & Share</h3>
              <p className="feature-description">Easily upload your notes in various formats (PDF, PPT, images) and share them with the world.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <i className="fas fa-search feature-icon"></i>
              </div>
              <h3 className="feature-title">Powerful Search</h3>
              <p className="feature-description">Quickly find the notes you need with our powerful search engine, filtering by title, subject, or tags.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <i className="fas fa-users feature-icon"></i>
              </div>
              <h3 className="feature-title">Community Driven</h3>
              <p className="feature-description">Contribute to a growing library of notes and collaborate with other users to enhance learning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2 className="cta-title">Ready to get started?</h2>
          <p className="cta-subtitle">Create an account today and start sharing your knowledge.</p>
          <Link to="/signup" className="cta-button">Sign up for free</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
