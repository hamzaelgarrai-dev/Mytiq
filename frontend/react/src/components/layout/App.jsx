import { useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import CategoryFilter from "./CategoryFilter"; 
import EventCardSection from "./EventCardSection"; 
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Footer from "./Footer";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import EventDetails from './pages/EventDetails';
import MyTickets from './pages/MyTickets';






export default function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [currentPath, setCurrentPath] = useState("/");

  const isAuthenticated = !!user;
  const isAdmin = user?.role === "admin";

  const navigate = (path) => setCurrentPath(path);

  const handleLogin = (loggedUser, token) => {
    setUser(loggedUser);
    setToken(token);
    setCurrentPath("/");
  };

  const handleRegister = (registeredUser, token) => {
    setUser(registeredUser);
    setToken(token);
    setCurrentPath("/");
  };

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    setCurrentPath("/connexion");
  };

  const renderPage = () => {
    switch (currentPath) {
      case "/connexion":
        return <Login onLogin={handleLogin} />;
      case "/inscription":
        return <Register onRegister={handleRegister} />;
      case "/":
        return (
          <div>
            <HeroSection />

            {/* Filtres catégorie */}
            <div className="mt-8 px-4">
              <CategoryFilter />
            </div>

            {/* Section cartes d’événements */}
            <div className="mt-12 px-4">
              <EventCardSection />
            </div>
          </div>
        );
      default:
        return (
          <div className="text-center">
            <h1 className="text-4xl font-bold mt-12">Page non trouvée</h1>
          </div>
        );
    }
  };

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
