import React from 'react';
import { useParams } from 'react-router-dom';

const NoteView = () => {
  const { id } = useParams();
  // Fetch note data based on id
  const note = { 
    id: id, 
    title: 'Advanced Tailwind CSS Techniques', 
    subject: 'CSS', 
    tags: ['css', 'tailwind', 'design'], 
    views: 2500, 
    author: 'Jane Doe',
    uploadDate: 'July 7, 2025',
    content: `
      <p>This is a placeholder for the note content. It can be a PDF viewer, an image gallery, or a text document.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.</p>
    `
  };

  return (
    <div className="note-view-page-container">
      <div className="container header-container">
        <div className="note-view-card">
          <div className="note-view-content-wrapper">
            <div className="note-view-header">
              <span className="note-view-subject">{note.subject}</span>
              <h1 className="note-view-title">{note.title}</h1>
              <div className="note-view-meta">
                <span>By {note.author}</span>
                <span>•</span>
                <span>Uploaded on {note.uploadDate}</span>
                <span>•</span>
                <span>{note.views} views</span>
              </div>
            </div>

            <div className="note-view-body" dangerouslySetInnerHTML={{ __html: note.content }}></div>

            <div className="note-view-tags">
              {note.tags.map(tag => (
                <span key={tag} className="note-view-tag">{tag}</span>
              ))}
            </div>

            <div className="note-view-actions">
              <div className="note-view-action-buttons-left">
                <button className="note-view-share-button">
                  <svg className="note-view-share-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                  Share
                </button>
                <button className="note-view-request-access-button">
                  Request Edit Access
                </button>
              </div>
              <button className="note-view-delete-button">
                Delete Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteView;
