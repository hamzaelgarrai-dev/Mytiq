import { useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import CategoryFilter from "./CategoryFilter"; 
import EventCardSection from "./EventCardSection"; 
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Footer from "./Footer";

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
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar
        isAuthenticated={isAuthenticated}
        isAdmin={isAdmin}
        user={user}
        onLogout={handleLogout}
        navigate={navigate}
        currentPath={currentPath}
      />

      <div className="flex-1">{renderPage()}</div>

      <Footer />
    </div>
  );
}
