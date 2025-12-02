import React from 'react';
import { Search } from 'lucide-react';

const Header = () => {

  const imageUrl = 'https://media.timeout.com/images/106204051/image.jpg';

  return (
    <header className="relative h-[80vh] overflow-hidden font-sans">
      
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Contenu */}
      <div className="relative z-5 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl mx-auto px-4">

          {/* Sous-texte */}
          <p className="text-2xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Découvrez les meilleurs événements au Maroc
            Concerts, festivals, conférences, spectacles... Réservez vos billets en quelques clics
          </p>

          {/* Barre de recherche */}
          <div className="relative w-full max-w-2xl mx-auto mb-16">
            <input
              type="text"
              placeholder="Rechercher un évenement, artiste, lieu..."
              className="w-full py-4 pl-12 pr-52 sm:pr-48 text-gray-900 bg-white rounded-xl shadow-2xl 
              focus:outline-none focus:ring-4 focus:ring-indigo-400/50 transition duration-300"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
