import React from 'react';

const RequestAccessForm = () => {
  return (
    <div className="request-access-page-container">
      <div className="container">
        <div className="request-access-form-wrapper">
          <div className="request-access-form-card">
            <div className="request-access-form-header">
              <h2 className="request-access-form-title">Request Edit Access</h2>
              <p className="request-access-form-subtitle">Fill out the form below to request edit access for a note.</p>
            </div>
            <form>
              <div className="request-access-form-group">
                <label className="request-access-form-label" htmlFor="note-title">
                  Note Title
                </label>
                <input className="request-access-form-input" id="note-title" type="text" placeholder="Note Title" disabled value="[Note Title Placeholder]" />
              </div>
              <div className="request-access-form-group-last">
                <label className="request-access-form-label" htmlFor="message">
                  Message
                </label>
                <textarea className="request-access-form-textarea" id="message" placeholder="Please explain why you need edit access..."></textarea>
              </div>
              <div>
                <button className="request-access-button" type="submit">
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestAccessForm;
