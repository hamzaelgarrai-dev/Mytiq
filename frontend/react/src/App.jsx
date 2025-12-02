import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import EventDetails from './pages/EventDetails';
import MyTickets from './pages/MyTickets';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-gray-50">
          <Routes>
            <Route path="/event/:eventId" element={<EventDetails isAuthenticated={false} />} />
            <Route path="/my-tickets" element={<MyTickets />} />
            {/* Route par défaut pour le développement */}
            <Route path="/" element={<EventDetails eventId="1" isAuthenticated={false} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
