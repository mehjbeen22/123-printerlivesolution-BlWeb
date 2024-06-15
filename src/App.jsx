import React from 'react';
import Navbar from './pages/Navbar';
import HomePage from './pages/HomePage';
import Footer from './pages/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DownloadPage from './pages/DownloadPage';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/downloaddrivers" element={<DownloadPage />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
