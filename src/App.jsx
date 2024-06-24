import React from 'react';
import Navbar from './pages/Navbar';
import HomePage from './pages/HomePage';
import Footer from './pages/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DownloadPage from './pages/DownloadPage';
import PrinterOffline from './pages/services/PrinterOffline';
import PrinterSetupIssue from './pages/services/PrinterSetupIssue';
import PrivacyPolicy from './pages/services/PrivacyPolicy';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/downloaddrivers" element={<DownloadPage />} />
        <Route path="/printerOffline" element={<PrinterOffline />} />
        <Route path="/printerSetup" element={<PrinterSetupIssue />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
