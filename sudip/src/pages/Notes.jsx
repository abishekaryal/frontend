import React from 'react';
import NoteList from '../components/notes/NoteList';
import SearchBar from '../components/common/SearchBar';

const Notes = () => {
  const notes = [
    { id: 1, title: 'React Hooks for Beginners', subject: 'React', tags: ['react', 'hooks', 'javascript'], views: 1250 },
    { id: 2, title: 'Advanced Tailwind CSS Techniques', subject: 'CSS', tags: ['css', 'tailwind', 'design'], views: 2500 },
    { id: 3, title: 'Node.js and Express Fundamentals', subject: 'Node.js', tags: ['node', 'javascript', 'backend'], views: 3100 },
    { id: 4, title: 'Introduction to Python for Data Science', subject: 'Python', tags: ['python', 'data science', 'pandas'], views: 4500 },
    { id: 5, title: 'Machine Learning Concepts', subject: 'AI/ML', tags: ['machine learning', 'ai', 'concepts'], views: 5200 },
    { id: 6, title: 'Building a REST API with Django', subject: 'Python', tags: ['python', 'django', 'api'], views: 1800 },
  ];

  return (
    <div className="notes-page-container">
      <div className="container header-container py-12">
        <div className="notes-header">
          <h1 className="notes-title">Explore Notes</h1>
          <p className="notes-subtitle">Find the best study materials shared by our community.</p>
        </div>
        <div className="notes-search-bar-wrapper">
          <SearchBar />
        </div>
        <NoteList notes={notes} />
      </div>
    </div>
  );
};

export default Notes;
