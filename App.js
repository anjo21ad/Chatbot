// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import Overenskomst from './views/Overenskomst';
import Transaktionskoder from './views/Transaktionskoder';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overenskomst-for-lærere" element={<Overenskomst />} />
          <Route path="/transaktionskoder" element={<Transaktionskoder />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
