import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ArticlePage from './components/ArticlePage';
import ReportForm from './components/ReportForm';
import EvidenceGallery from './components/EvidenceGallery';
import About from './components/About';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<ArticlePage />} />
      <Route path="/report" element={<ReportForm />} />
      <Route path="/evidence" element={<EvidenceGallery />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);

export default App;
