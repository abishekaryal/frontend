import React from 'react';
import { Link } from 'react-router-dom';

const NoteCard = ({ note }) => {
  return (
    <div className="note-card">
      <div className="note-card-content">
        <div className="note-card-header">
          <div className="flex-shrink-0">
            <span className="note-card-subject">{note.subject}</span>
          </div>
        </div>
        <h3 className="note-card-title">{note.title}</h3>
        <div className="note-card-tags">
          {note.tags.map(tag => (
            <span key={tag} className="note-card-tag">{tag}</span>
          ))}
        </div>
        <div className="note-card-footer">
          <Link to={`/notes/${note.id}`} className="note-card-view-link">View Note</Link>
          <div className="note-card-views">
            <svg className="note-card-views-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            <span>{note.views || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;