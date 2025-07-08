import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="auth-page-container">
      <div className="container">
        <div className="auth-form-wrapper">
          <div className="auth-form-card">
            <div className="auth-form-header">
              <h2 className="auth-form-title">Create your account</h2>
              <p className="auth-form-subtitle">Join NoteShare today!</p>
            </div>
            <form>
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Full Name
                </label>
                <input className="form-input" id="name" type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email Address
                </label>
                <input className="form-input" id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="form-group-last">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input className="form-input" id="password" type="password" placeholder="••••••••" />
              </div>
              <div className="form-group-last">
                <label className="form-label" htmlFor="confirm_password">
                  Confirm Password
                </label>
                <input className="form-input" id="confirm_password" type="password" placeholder="••••••••" />
              </div>
              <div>
                <button className="form-button" type="submit">
                  Create Account
                </button>
              </div>
            </form>
            <div className="form-footer-text">
              <p>
                Already have an account? <Link to="/login" className="form-link">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
