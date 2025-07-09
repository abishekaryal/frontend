import React from 'react';
import NoteCard from '../components/NoteCard';
import SearchBar from '../components/SearchBar';
import './NotesList.css';

const NotesList = () => {
  // Dummy data for notes, now including a 'folder' property
  const notes = [
    { id: 1, title: 'React Hooks Cheatsheet', subject: 'React', tags: 'hooks, frontend', folder: 'React Notes' },
    { id: 2, title: 'Node.js Best Practices', subject: 'Backend', tags: 'nodejs, express', folder: 'Backend Dev' },
    { id: 3, title: 'CSS Flexbox Guide', subject: 'CSS', tags: 'css, layout', folder: 'Frontend Basics' },
    { id: 4, title: 'Python for Data Science', subject: 'Data Science', tags: 'python, pandas', folder: 'Data Science' },
    { id: 5, title: 'Machine Learning Basics', subject: 'AI', tags: 'ml, algorithms', folder: 'Data Science' },
    { id: 6, title: 'Web Security Fundamentals', subject: 'Security', tags: 'web, security', folder: 'Uncategorized' }, // Example of an uncategorized note
  ];

  // Group notes by folder
  const notesByFolder = notes.reduce((acc, note) => {
    const folderName = note.folder || 'Uncategorized'; // Default to 'Uncategorized' if no folder
    if (!acc[folderName]) {
      acc[folderName] = [];
    }
    acc[folderName].push(note);
    return acc;
  }, {});

  return (
    <div className="notes-list-container">
      <h1>All Notes</h1>
      <SearchBar />
      {Object.keys(notesByFolder).length === 0 ? (
        <p>No notes available.</p>
      ) : (
        Object.keys(notesByFolder).map(folderName => (
          <div key={folderName} className="notes-folder-section">
            <h2>{folderName}</h2>
            <div className="notes-grid">
              {notesByFolder[folderName].map((note) => (
                <NoteCard key={note.id} title={note.title} subject={note.subject} tags={note.tags} />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NotesList;