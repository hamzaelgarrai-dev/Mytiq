import React, { useState } from 'react';
import { RefreshCcw, Trash2, Plus } from 'lucide-react';
import AddEventModal from '../layout/AddEventModal';
import { createEvent } from '../../api/events';
import { useAuth } from '../../context/AuthContext';
import { useEvents } from '../../context/EventsContext';

const EventsTable = ({ events, onDelete }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { token } = useAuth();
    const { loadEvents } = useEvents();

    const handleAddEvent = async (eventData) => {
        try {
            await createEvent(eventData, token);
            await loadEvents();
            alert("Événement créé avec succès !");
        } catch (error) {
            throw error;
        }
    };

    return (
        <>
            <div className="p-6 bg-white shadow-md rounded-2xl w-full max-w-5xl mx-auto mb-12">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Gestion des événements</h2>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-2 bg-[#6EBAFB] hover:bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium transition"
                    >
                        <Plus size={20} />
                        Nouvel événement
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="text-left text-gray-600 border-b">
                                <th className="pb-3">Titre</th>
                                <th className="pb-3">Date</th>
                                <th className="pb-3">Lieu</th>
                                <th className="pb-3">Places</th>
                                <th className="pb-3">Prix</th>
                                <th className="pb-3">Statut</th>
                                <th className="pb-3 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="text-center py-4 text-gray-500">
                                        Aucun événement disponible
                                    </td>
                                </tr>
                            ) : (
                                events.map((event) => (
                                    <tr key={event.id} className="border-b hover:bg-gray-50 transition">
                                        <td className="py-3">{event.title}</td>
                                        <td className="py-3">{new Date(event.event_date).toLocaleDateString('fr-FR')}</td>
                                        <td className="py-3">{event.location}</td>
                                        <td className="py-3">{event.aviliable_tickets || 0} / {event.capacity}</td>
                                        <td className="py-3">{event.price} MAD</td>
                                        <td className={`py-3 ${event.status === 'active' ? 'text-green-600' : 'text-red-600'}`}>
                                            {event.status === 'active' ? 'Disponible' : 'Indisponible'}
                                        </td>
                                        <td className="py-3">
                                            <div className="flex items-center justify-center gap-3">
                                                <button className="text-blue-400 hover:text-blue-600 cursor-pointer">
                                                    <RefreshCcw size={18} />
                                                </button>
                                                <button
                                                    onClick={() => onDelete(event.id)}
                                                    className="text-red-400 hover:text-red-600 cursor-pointer"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <AddEventModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onEventAdded={handleAddEvent}
            />
        </>
    );
};

export default EventsTable;