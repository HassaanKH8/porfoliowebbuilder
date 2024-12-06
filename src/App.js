import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen.js';
import Portfolio from './Portfolio.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
