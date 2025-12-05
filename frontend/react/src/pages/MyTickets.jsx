import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { fetchMyTickets } from '../api/tickets';
import logoImage from '../assets/logo.png';

export default function MyTickets() {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { token } = useAuth();

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const handleDownloadPDF = async (ticketId) => {
        try {
            const response = await fetch(`http://localhost:8000/api/tickets/${ticketId}/download`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                alert('PDF non disponible pour le moment');
                return;
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `billet-${ticketId}.pdf`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error('Erreur téléchargement:', error);
            alert('Erreur lors du téléchargement du PDF');
        }
    };

    useEffect(() => {
        const loadTickets = async () => {
            try {
                setLoading(true);
                const data = await fetchMyTickets(token);
                setTickets(data);
            } catch (err) {
                setError("Erreur lors du chargement des billets.");
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            loadTickets();
        } else {
            setLoading(false);
            setError("Vous devez être connecté pour voir vos billets.");
        }
    }, [token]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 p-8">
                <div className="max-w-3xl mx-auto text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
                    <p className="mt-4 text-gray-600">Chargement...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 p-8">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                        <p className="text-red-600 font-medium">{error}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-3xl mx-auto space-y-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Mes Billets</h1>
                    <p className="text-gray-600">{tickets.length} billet(s)</p>
                </div>

                {tickets.length === 0 ? (
                    <div className="bg-white rounded-3xl shadow-sm border p-12 text-center">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucun billet</h3>
                        <p className="text-gray-600">Vous n'avez pas encore acheté de billets.</p>
                    </div>
                ) : (
                    tickets.map((ticket) => (
                        <div key={ticket.id} className="bg-white rounded-3xl shadow-sm border overflow-hidden">
                            <div className="bg-blue-400 p-6 flex justify-between text-white">
                                <div>
                                    <h2 className="text-xl font-bold mb-2">{ticket.event?.name}</h2>
                                    <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
                                        {ticket.event?.category}
                                    </span>
                                </div>
                                <img src={logoImage} alt="Logo" className="w-12 h-12 opacity-80" />
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-50 rounded-lg text-blue-400">📅</div>
                                    <div>
                                        <p className="text-sm font-bold">Date de l'événement</p>
                                        <p className="text-gray-600">{formatDate(ticket.event?.date)}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-50 rounded-lg text-blue-400">📍</div>
                                    <div>
                                        <p className="text-sm font-bold">Lieu</p>
                                        <p className="text-gray-600">{ticket.event?.location}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-50 rounded-lg text-blue-400">🎫</div>
                                    <div>
                                        <p className="text-sm font-bold">Code QR</p>
                                        <p className="text-gray-600 font-mono">{ticket.qrcode}</p>
                                    </div>
                                </div>

                                <hr />

                                <div className="flex justify-between items-center">
                                    <span className="font-medium">Prix payé</span>
                                    <span className="font-bold text-blue-400">{ticket.event?.price} MAD</span>
                                </div>

                                <button
                                    onClick={() => handleDownloadPDF(ticket.id)}
                                    className="w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 rounded-xl"
                                >
                                    Télécharger le billet PDF
                                </button>

                                <p className="text-center text-xs text-gray-400">
                                    Acheté le {formatDate(ticket.created_at)}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}