import React, { useState } from "react";
import { LogIn, UserPlus, Home } from "lucide-react";
import { Link } from "react-router-dom";
import logoMytiq from '../../assets/logoMytiq.jpeg';

const Navbar = ({ isAuthenticated, user, onLogout }) => {
  const [open, setOpen] = useState(false);
  const customBlue = "#6EBAFB";

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition">
        <img 
            src={logoMytiq} 
            alt="Logo MyTiq" 
            className="w-15 h-15" 
        />
        </Link>

        <nav className="hidden md:flex flex-1 justify-center space-x-6">
          <Link to="/" className="flex items-center gap-1 text-gray-700 hover:text-blue-500 transition">
            <Home className="h-5 w-5" /> Accueil
          </Link>
          {/* Ajoute d'autres liens si nécessaire */}
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          {isAuthenticated ? (
            <button
              className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
              onClick={onLogout}
            >
              Déconnexion
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition flex items-center gap-1"
              >
                <LogIn className="h-5 w-5" /> Connexion
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-lg text-white flex items-center gap-1"
                style={{ backgroundColor: customBlue }}
              >
                <UserPlus className="h-5 w-5" /> Inscription
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md border border-gray-200">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col px-6 pb-4 space-y-2 bg-white shadow-md border-t border-gray-200">
          <Link to="/" className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 transition gap-2">
            <Home className="h-5 w-5" /> Accueil
          </Link>
          {!isAuthenticated && (
            <>
              <Link to="/login" className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 transition gap-2">
                <LogIn className="h-5 w-5" /> Connexion
              </Link>
              <Link
                to="/register"
                className="flex items-center px-4 py-2 rounded-lg text-white"
                style={{ backgroundColor: customBlue }}
              >
                <UserPlus className="h-5 w-5" /> Inscription
              </Link>
            </>
          )}
          {isAuthenticated && (
            <button
              className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
              onClick={onLogout}
            >
              Déconnexion
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
