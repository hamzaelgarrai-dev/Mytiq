import React from 'react';
import logoImage from '../assets/logo.png';

export default function MyTickets() {
    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-3xl mx-auto space-y-6">

                {/* En-tête de la page */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Mes Billets</h1>
                    <p className="text-gray-600">1 billet(s) acheté(s)</p>
                </div>

                {/* Carte du billet */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">

                    {/* En-tête bleu du billet */}
                    <div className="bg-blue-400 p-6 flex justify-between items-start text-white relative overflow-hidden">
                        
                        {/* 1. PARTIE GAUCHE (Titre et Badge) */}
                        <div className="relative z-10">
                            <h2 className="text-xl font-bold mb-2">Festival Mawazine 2025</h2>
                            <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                                Musique
                            </span>
                        </div>

                        {/* 2. PARTIE DROITE (Logo) */}
                        {/* Le logo est maintenant au même niveau que le bloc de texte pour que justify-between fonctionne */}
                        <div className="relative z-10">
                            <img 
                                src={logoImage} 
                                alt="Icône décorative du billet" 
                                className="w-12 h-12 opacity-80" 
                            />
                        </div>

                    </div>

                    {/* Corps du billet */}
                    <div className="p-6 space-y-6">
                        
                        {/* Date */}
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-blue-50 rounded-lg text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900">Date de l'événement</p>
                                <p className="text-gray-600">15 décembre 2025 à 20:00</p>
                            </div>
                        </div>

                        {/* Lieu */}
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-blue-50 rounded-lg text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900">Lieu</p>
                                <p className="text-gray-600">Paris, Accor Arena</p>
                            </div>
                        </div>

                        {/* Code QR */}
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-blue-50 rounded-lg text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4h2v-4zM6 6h2v2H6V6zm0 8h2v2H6v-2zm8-8h2v2h-2V6zm-8 4h2v2H6v-2zm4-4h2v2h-2V6zm4 0h2v2h-2V6zm-4 4h2v2h-2v-2zm0 4h2v2h-2v-2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900">Code QR</p>
                                <p className="text-gray-600 font-mono">QR-1763984812273</p>
                            </div>
                        </div>

                        <hr className="border-gray-100" />

                        {/* Prix et Bouton */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-900">Prix payé</span>
                                <span className="font-bold text-blue-400">350 MAD</span>
                            </div>

                            <button className="w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Télécharger le billet en PDF
                            </button>

                            <p className="text-center text-xs text-gray-400">
                                Acheté le 24 novembre 2025 à 12:46
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}