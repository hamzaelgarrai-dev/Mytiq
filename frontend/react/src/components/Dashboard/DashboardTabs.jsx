import React from 'react';

const DashboardTabs = ({ activeTab, setActiveTab }) => {
    return (
        <div className="flex bg-[#6EBAFB]/58 w-96 h-16 mt-6 rounded-4xl justify-evenly items-center space-x-6 mb-12 px-3.5">
            <div
                onClick={() => setActiveTab("events")}
                className={`font-medium text-xm w-66 h-12 flex justify-center items-center rounded-4xl cursor-pointer ${activeTab === "events" ? "bg-white" : ""
                    }`}
            >
                Événements
            </div>
            <div
                onClick={() => setActiveTab("billets")}
                className={`font-medium text-xm w-66 h-12 flex justify-center items-center rounded-4xl cursor-pointer ${activeTab === "billets" ? "bg-white" : ""
                    }`}
            >
                Billets
            </div>
            <div
                onClick={() => setActiveTab("newsletter")}
                className={`font-medium text-xm w-66 h-12 flex justify-center items-center rounded-4xl cursor-pointer ${activeTab === "newsletter" ? "bg-white" : ""
                    }`}
            >
                Newsletter
            </div>
        </div>
    );
};

export default DashboardTabs;
