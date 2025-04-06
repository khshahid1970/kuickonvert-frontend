import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PDFTools from './pages/PDFTools';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pdf-tools" element={<PDFTools />} />
      </Routes>
    </Router>
  );
}

export default App;