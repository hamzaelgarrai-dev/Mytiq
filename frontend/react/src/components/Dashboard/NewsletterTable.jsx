import React from 'react';
import { Trash2 } from 'lucide-react';

const NewsletterTable = ({ subscribers, onDelete }) => {
    return (
        <div className="p-6 bg-white shadow-md rounded-2xl w-full max-w-5xl mx-auto mb-12">
            <h2 className="text-lg font-semibold mb-4">Abonnés à la Newsletter</h2>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="text-left text-gray-600 border-b">
                        <th className="pb-2">Email</th>
                        <th className="pb-2">Date d'inscription</th>
                        <th className="pb-2 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {subscribers.length === 0 ? (
                        <tr>
                            <td colSpan="3" className="text-center py-4 text-gray-500">
                                Aucun abonné trouvé
                            </td>
                        </tr>
                    ) : (
                        subscribers.map((subscriber) => (
                            <tr key={subscriber.id} className="border-b hover:bg-gray-50 transition">
                                <td className="py-3">{subscriber.email}</td>
                                <td className="py-3">{new Date(subscriber.created_at).toLocaleDateString('fr-FR')}</td>
                                <td className="py-3">
                                    <div className="flex items-center justify-center gap-3">
                                        <button
                                            onClick={() => onDelete(subscriber.id)}
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
    );
};

export default NewsletterTable;
