// src/components/Footer.jsx

import React from 'react';
import { Mail, Phone, Facebook, Twitter, Linkedin , MapPin} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2B68AF] text-white border-t border-[#2B68AF]">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        
        {/* Grille principale du Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-[#2B68AF] pb-8">
          
          {/* 1. À propos / Logo */}
          <div className="space-y-4">
            <Link to="/" className="text-white text-2xl font-bold tracking-wider">
              <span className="text-white">Mytiq</span>
            </Link>
            <p className="text-sm">
             La plateforme de billetterie 
             événementielle du Maroc. 
             Découvrez et réservez vos 
             événements en toute simplicité. 
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="transition duration-300 hover:opacity-80"><Facebook size={20} color="#6EBAFB" /></a>
              <a href="#" className="transition duration-300 hover:opacity-80"><Twitter size={20} color="#6EBAFB" /></a>
              <a href="#" className="transition duration-300 hover:opacity-80"><Linkedin size={20} color="#6EBAFB" /></a>
            </div>
          </div>
          
          {/* 2. Liens Rapides */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-[#6EBAFB] transition duration-300">Evénements</Link></li>
              <li><Link to="/evenements" className="hover:text-[#6EBAFB] transition duration-300">Catégories</Link></li>
              <li><Link to="/discussions" className="hover:text-[#6EBAFB] transition duration-300">Mes billets </Link></li>
            </ul>
          </div>

          {/* 3. Contact & Légal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Informations</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail color="#6EBAFB" />
                <a href="mailto:contact@mytiq" className="hover:text-[#6EBAFB] transition duration-300 text-sm">contact@mytiq</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone color="#6EBAFB" />
                <span className="text-sm">+212 5XX XXX XXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin color="#6EBAFB" />
                <span className="text-sm">Casablanca, Maroc</span>
              </li>
            </ul>
          </div>
          
          {/* 4. Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-3">
             Recevez les dernières actualités 
             et offres exclusives
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input 
                type="email" 
                placeholder="Votre email"
                className="w-full px-3 py-2 bg-white border border-[#6EBAFB] rounded-md focus:ring-[#6EBAFB] focus:border-[#6EBAFB] text-sm placeholder-gray-500 text-gray-900"
              />
              <button 
                type="submit"
                className="w-full bg-[#6EBAFB] hover:bg-opacity-90 text-white font-medium py-2 rounded-md transition duration-300 text-sm"
              >
                S'abonner
              </button>
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-white">
          &copy; {new Date().getFullYear()} Mytiq. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
