import React from 'react';
import { Link } from 'react-router-dom';

const NoteCard = ({ note }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{note.title}</h3>
      <p className="text-gray-600 mb-4">{note.subject}</p>
      <div className="flex justify-between items-center">
        <Link to={`/notes/${note.id}`} className="text-blue-500 hover:text-blue-600">View Note</Link>
        <div className="flex space-x-2">
          {note.tags.map(tag => (
            <span key={tag} className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
