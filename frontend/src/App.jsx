import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
