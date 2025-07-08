import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Notes from './pages/Notes';
import NoteView from './components/notes/NoteView';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Dashboard from './pages/Dashboard';
import UploadForm from './components/notes/UploadForm';
import RequestAccessForm from './components/dashboard/RequestAccessForm';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/notes/:id" element={<NoteView />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upload" element={<UploadForm />} />
            <Route path="/request-access" element={<RequestAccessForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
