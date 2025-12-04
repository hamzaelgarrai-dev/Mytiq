import React from 'react';

const StatisticsCards = ({ statistics }) => {
    return (
        <div className="flex justify-center space-x-4">
            <div className="w-60 h-40 bg-[#6EBAFB]/19 rounded-2xl flex flex-col p-6 pt-8 space-y-6">
                <p className="text-2xl font-medium">Événements</p>
                <p className="text-xl font-medium">{statistics.totalEvents}</p>
            </div>
            <div className="w-60 h-40 bg-[#6EBAFB]/19 rounded-2xl flex flex-col p-6 pt-8 space-y-6">
                <p className="text-2xl font-medium">Billets vendus</p>
                <p className="text-xl font-medium">{statistics.totalTickets}</p>
            </div>
            <div className="w-60 h-40 bg-[#6EBAFB]/19 rounded-2xl flex flex-col p-6 pt-8 space-y-6">
                <p className="text-2xl font-medium">Abonnés</p>
                <p className="text-xl font-medium">{statistics.totalSubscribers}</p>
            </div>
            <div className="w-60 h-40 bg-[#6EBAFB]/19 rounded-2xl flex flex-col p-6 pt-8 space-y-6">
                <p className="text-2xl font-medium">Revenus</p>
                <p className="text-xl font-medium">{statistics.totalRevenue} MAD</p>
            </div>
        </div>
    );
};

export default StatisticsCards;