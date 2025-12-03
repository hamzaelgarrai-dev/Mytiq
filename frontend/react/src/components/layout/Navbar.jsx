import React, { useState } from "react";
import { LogIn, UserPlus, Home } from "lucide-react";

const Navbar = ({ isAuthenticated, user, onLogout, navigate, currentPath }) => {
  const [open, setOpen] = useState(false);
  const customBlue = "#6EBAFB";

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div
          className="text-xl font-bold text-gray-800 cursor-pointer"
          onClick={() => navigate("/")}
        >
          MyTiq
        </div>

        <nav className="hidden md:flex space-x-4">
          <div
            className="flex items-center px-4 py-2 rounded-full hover:bg-gray-100 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Home className="h-4 w-4 mr-1" /> Accueil
          </div>
        </nav>

        <div className="hidden md:flex space-x-3">
          {isAuthenticated ? (
            <button
              className="text-gray-700 hover:text-gray-900"
              onClick={onLogout}
            >
              Déconnexion
            </button>
          ) : (
            <>
              <div
                className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer"
                onClick={() => navigate("/connexion")}
              >
                <LogIn className="h-4 w-4 mr-1" /> Connexion
              </div>
              <div
                className="flex items-center text-white py-2 px-4 rounded-lg cursor-pointer"
                style={{ backgroundColor: customBlue }}
                onClick={() => navigate("/inscription")}
              >
                <UserPlus className="h-4 w-4 mr-1" /> Inscription
              </div>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 border rounded-md">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col px-6 pb-4 space-y-2 border-t border-gray-200">
          <div
            className="flex items-center px-4 py-2 rounded-full hover:bg-gray-100 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Home className="h-4 w-4 mr-2" /> Accueil
          </div>
          {!isAuthenticated && (
            <>
              <div
                className="flex items-center px-4 py-2 rounded-full hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate("/connexion")}
              >
                <LogIn className="h-4 w-4 mr-2" /> Connexion
              </div>
              <div
                className="flex items-center px-4 py-2 rounded-full text-white cursor-pointer"
                style={{ backgroundColor: customBlue }}
                onClick={() => navigate("/inscription")}
              >
                <UserPlus className="h-4 w-4 mr-2" /> Inscription
              </div>
            </>
          )}
          {isAuthenticated && (
            <button
              className="text-gray-700 px-4 py-2 rounded-full hover:bg-gray-100"
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