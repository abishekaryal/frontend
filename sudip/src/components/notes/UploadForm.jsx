import React, { useState } from 'react';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const allowedTypes = ['application/pdf', 'application/vnd.ms-powerpoint', 'image/jpeg', 'image/png'];
      if (allowedTypes.includes(selectedFile.type) && selectedFile.size <= 15 * 1024 * 1024) {
        setFile(selectedFile);
        setError('');
      } else {
        setFile(null);
        setError('Invalid file type or size. Max size: 15MB. Allowed types: PDF, PPT, JPG, PNG.');
      }
    }
  };

  return (
    <div className="upload-page-container">
      <div className="container">
        <div className="upload-form-wrapper">
          <div className="upload-form-card">
            <div className="upload-form-header">
              <h2 className="upload-form-title">Upload Your Note</h2>
              <p className="upload-form-subtitle">Share your knowledge with the community</p>
            </div>
            <form>
              <div className="upload-form-group">
                <label className="upload-form-label" htmlFor="title">
                  Title
                </label>
                <input className="upload-form-input" id="title" type="text" placeholder="e.g., Introduction to React Hooks" />
              </div>
              <div className="upload-form-group">
                <label className="upload-form-label" htmlFor="subject">
                  Subject
                </label>
                <input className="upload-form-input" id="subject" type="text" placeholder="e.g., Computer Science" />
              </div>
              <div className="upload-form-group-last">
                <label className="upload-form-label" htmlFor="tags">
                  Tags
                </label>
                <input className="upload-form-input" id="tags" type="text" placeholder="e.g., react, javascript, webdev" />
              </div>
              <div className="upload-form-group-last">
                <label className="upload-form-label" htmlFor="file">
                  File
                </label>
                <div className="file-upload-area">
                  <div className="file-upload-content">
                    <svg className="file-upload-icon" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex file-upload-text-group">
                      <label htmlFor="file-upload" className="file-upload-label">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="file-upload-input" onChange={handleFileChange} />
                      </label>
                      <p className="file-upload-placeholder-text">or drag and drop</p>
                    </div>
                    <p className="file-upload-info-text">PDF, PPT, JPG, PNG up to 15MB</p>
                  </div>
                </div>
                {file && <p className="file-selected-text">Selected file: {file.name}</p>}
                {error && <p className="file-error-text">{error}</p>}
              </div>
              <div>
                <button className="upload-button" type="submit">
                  Upload Note
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadForm;
