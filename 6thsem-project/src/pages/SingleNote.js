import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SingleNote.css';

const SingleNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy data for a single note (in a real app, you'd fetch this from an API)
  const note = {
    id: id,
    title: `Note Title ${id}`,
    subject: 'React',
    tags: 'hooks, frontend, example',
    content: `This is the detailed content for Note ${id}. It covers various aspects of React Hooks, including useState, useEffect, useContext, and custom hooks. This note is intended to be a comprehensive guide for developers looking to master React Hooks. You can share this note using its unique URL.`,
    author: 'John Doe',
    uploadDate: '2023-01-15',
    fileUrl: '#', // Placeholder for actual file URL
  };

  if (!note) {
    return <div className="single-note-container">Note not found.</div>;
  }

  const handleRequestEdit = () => {
    navigate(`/request-edit-access?noteId=${id}`);
  };

  return (
    <div className="single-note-container">
      <h1>{note.title}</h1>
      <p><strong>Note ID:</strong> {note.id}</p>
      <p><strong>Subject:</strong> {note.subject}</p>
      <p><strong>Tags:</strong> {note.tags}</p>
      <p><strong>Author:</strong> {note.author}</p>
      <p><strong>Uploaded On:</strong> {note.uploadDate}</p>
      <div className="note-content">
        <h3>Content:</h3>
        <p>{note.content}</p>
      </div>
      <div className="note-actions">
        <button className="view-button" onClick={() => window.open(window.location.href, '_blank')}>View Online</button>
        <button className="share-button" onClick={() => navigator.clipboard.writeText(window.location.href)}>Share Note</button>
        <button className="edit-button" onClick={handleRequestEdit}>Request Edit Access</button>
      </div>
    </div>
  );
};

export default SingleNote;