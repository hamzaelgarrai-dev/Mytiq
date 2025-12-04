import React from 'react';

const TicketsTable = ({ tickets }) => {
    return (
        <div className="p-6 bg-white shadow-md rounded-2xl w-full max-w-5xl mx-auto mb-12">
            <h2 className="text-lg font-semibold mb-4">Billets achetés</h2>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="text-left text-gray-600 border-b">
                        <th className="pb-2">ID Billet</th>
                        <th className="pb-2">Événement</th>
                        <th className="pb-2">Date d'achat</th>
                        <th className="pb-2">QR Code</th>
                        <th className="pb-2">Prix</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.length === 0 ? (
                        <tr>
                            <td colSpan="5" className="text-center py-4 text-gray-500">
                                Aucun billet trouvé
                            </td>
                        </tr>
                    ) : (
                        tickets.map((ticket) => (
                            <tr key={ticket.id} className="border-b hover:bg-gray-50 transition">
                                <td className="py-3">{ticket.id}</td>
                                <td className="py-3">{ticket.event?.title || 'N/A'}</td>
                                <td className="py-3">{new Date(ticket.created_at).toLocaleDateString('fr-FR')}</td>
                                <td className="py-3">{ticket.qr_code || 'N/A'}</td>
                                <td className="py-3">{ticket.price || 'N/A'} MAD</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TicketsTable;