import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="auth-page-container">
      <div className="container">
        <div className="auth-form-wrapper">
          <div className="auth-form-card">
            <div className="auth-form-header">
              <h2 className="auth-form-title">Welcome back!</h2>
              <p className="auth-form-subtitle">Sign in to continue to NoteShare</p>
            </div>
            <form>
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
              <div className="flex justify-between items-center form-group-last">
                <div className="form-checkbox-group">
                  <input id="remember_me" name="remember_me" type="checkbox" className="form-checkbox" />
                  <label htmlFor="remember_me" className="form-checkbox-label">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <button type="button" className="form-link">
                    Forgot your password?
                  </button>
                </div>
              </div>
              <div>
                <button className="form-button" type="submit">
                  Sign In
                </button>
              </div>
            </form>
            <div className="form-footer-text">
              <p>
                Don't have an account? <Link to="/signup" className="form-link">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;