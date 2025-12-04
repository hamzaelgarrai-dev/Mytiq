import React from 'react';
import { Mail, Phone, Facebook, Twitter, Linkedin, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2B68AF] text-white">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-[#6EBAFB]/50">
          
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold tracking-wider hover:text-[#6EBAFB] transition">
              MyTiq
            </Link>
            <p className="text-sm text-white/80">
             La plateforme de billetterie événementielle du Maroc. Découvrez et réservez vos événements facilement.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:opacity-80 transition"><Facebook size={20} color="#6EBAFB" /></a>
              <a href="#" className="hover:opacity-80 transition"><Twitter size={20} color="#6EBAFB" /></a>
              <a href="#" className="hover:opacity-80 transition"><Linkedin size={20} color="#6EBAFB" /></a>
            </div>
          </div>
          
          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-white/90">
              <li><Link to="/" className="hover:text-[#6EBAFB] transition">Evénements</Link></li>
              <li><Link to="/categories" className="hover:text-[#6EBAFB] transition">Catégories</Link></li>
              <li><Link to="/my-tickets" className="hover:text-[#6EBAFB] transition">Mes billets</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-center gap-2">
                <Mail color="#6EBAFB" /> <a href="mailto:contact@mytiq.com" className="hover:text-[#6EBAFB]">contact@mytiq.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone color="#6EBAFB" /> <span>+212 5XX XXX XXX</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin color="#6EBAFB" /> <span>Casablanca, Maroc</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-3">Recevez nos dernières actualités et offres exclusives</p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input 
                type="email" 
                placeholder="Votre email"
                className="w-full px-3 py-2 text-gray-900 placeholder-gray-500 rounded-md border border-[#6EBAFB] focus:outline-none focus:ring-1 focus:ring-[#6EBAFB]"
              />
              <button 
                type="submit"
                className="w-full py-2 rounded-md bg-[#6EBAFB] text-white hover:bg-blue-500 transition"
              >
                S'abonner
              </button>
            </form>
          </div>

        </div>

        <div className="mt-8 text-center text-sm text-white/70">
          &copy; {new Date().getFullYear()} MyTiq. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
