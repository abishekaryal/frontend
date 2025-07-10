import React from 'react';
import { useParams, Link } from 'react-router-dom';
import notesData from '../data/notesData';
import { getRelatedNotes } from '../utils/noteUtils';
import './SingleNote.css';

const SingleNote = () => {
  const { id } = useParams();

  const note = notesData.find(note => note.id === id);
  const relatedNotes = getRelatedNotes(id);

  if (!note) {
    return <div className="single-note-container">Note not found.</div>;
  }

  return (
    <div className="single-note-container">
      <h1>{note.title}</h1>
      <p><strong>Subject:</strong> {note.subject}</p>
      <p><strong>Tags:</strong> {note.tags}</p>
      <p><strong>Author:</strong> {note.author}</p>
      <p><strong>Uploaded On:</strong> {note.uploadDate}</p>
      <div className="note-content">
        <h3>Content:</h3>
        <p>{note.content}</p>
      </div>
      <a href={note.fileUrl} target="_blank" rel="noopener noreferrer" className="download-link">
        Download File
      </a>
      <button className="share-button">Share Note</button>
      <Link to={`/request-edit/${note.id}`} className="request-edit-button">
        Request Edit
      </Link>

      {relatedNotes.length > 0 && (
        <div className="related-notes">
          <h3>Related Notes:</h3>
          <ul>
            {relatedNotes.map(relatedNote => (
              <li key={relatedNote.id}>
                <Link to={`/note/${relatedNote.id}`}>{relatedNote.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SingleNote;