import React from 'react';
import SearchBar from '../components/SearchBar';
import NoteCard from '../components/NoteCard';
import './Home.css';

const Home = () => {
  // Mock data for featured notes
  const featuredNotes = [
    { id: 1, title: 'Introduction to React', subject: 'Web Development', tags: ['React', 'JavaScript'] },
    { id: 2, title: 'Data Structures in Python', subject: 'Computer Science', tags: ['Python', 'Data Structures'] },
    { id: 3, title: 'Machine Learning Basics', subject: 'Artificial Intelligence', tags: ['ML', 'AI'] },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Get Better Grades, Together</h1>
          <p>Find the best study resources, shared by your fellow students.</p>
          <SearchBar />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-icon">1</div>
            <h3>Find</h3>
            <p>Search for notes by course, subject, or keyword.</p>
          </div>
          <div className="step">
            <div className="step-icon">2</div>
            <h3>Learn</h3>
            <p>View and study with high-quality, peer-reviewed notes online.</p>
          </div>
          <div className="step">
            <div className="step-icon">3</div>
            <h3>Share</h3>
            <p>Upload your own notes and help other students.</p>
          </div>
        </div>
      </section>

      {/* Featured Notes Section */}
      <section className="featured-notes-section">
        <h2>Top Rated Notes</h2>
        <div className="notes-grid">
          {featuredNotes.map((note) => (
            <NoteCard
              key={note.id}
              id={note.id}
              title={note.title}
              subject={note.subject}
              tags={note.tags.join(', ')}
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>"NoteShare has been a lifesaver for my exams. The notes are so helpful!"</p>
          <span>- Sarah, University of Toronto</span>
        </div>
        <div className="testimonial">
          <p>"I love being able to share my notes and help other students. Plus, I get to see what others are studying."</p>
          <span>- John, University of California</span>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Join Our Community</h2>
        <p>Become a part of our growing community and start sharing your notes today!</p>
        <button className="cta-button" onClick={() => window.location.href='/signup'}>Sign Up Now</button>
      </section>
    </div>
  );
};

export default Home;
