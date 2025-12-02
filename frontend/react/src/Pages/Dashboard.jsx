import React, { useState } from "react";
import { RefreshCcw, Trash2, Plus } from "lucide-react";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("events"); 

  return (
    <>
      <div className="mx-auto w-[1050px] max-w-[1050px]">
        <div className="flex flex-col py-6">
          <h1 className="text-2xl font-bold">Dashboard Admin</h1>
          <p>Gérez vos événements, billets et abonnés</p>
        </div>

        
        <div className="flex justify-center space-x-4">
          <div className="w-60 h-40 bg-[#6EBAFB]/19 rounded-2xl flex flex-col p-6 pt-8 space-y-6">
            <p className="text-2xl font-medium">Événements</p>
            <p className="text-xl font-medium">6</p>
          </div>
          <div className="w-60 h-40 bg-[#6EBAFB]/19 rounded-2xl flex flex-col p-6 pt-8 space-y-6">
            <p className="text-2xl font-medium">Billets vendus</p>
            <p className="text-xl font-medium">2</p>
          </div>
          <div className="w-60 h-40 bg-[#6EBAFB]/19 rounded-2xl flex flex-col p-6 pt-8 space-y-6">
            <p className="text-2xl font-medium">Abonnés</p>
            <p className="text-xl font-medium">3</p>
          </div>
          <div className="w-60 h-40 bg-[#6EBAFB]/19 rounded-2xl flex flex-col p-6 pt-8 space-y-6">
            <p className="text-2xl font-medium">Revenus</p>
            <p className="text-xl font-medium">4500 MAD</p>
          </div>
        </div>

        
        <div className="flex bg-[#6EBAFB]/58 w-96 h-16 mt-6 rounded-4xl justify-evenly items-center space-x-6 mb-12 px-3.5">
          <div
            onClick={() => setActiveTab("events")}
            className={`font-medium text-xm w-66 h-12 flex justify-center items-center rounded-4xl cursor-pointer ${
              activeTab === "events" ? "bg-white" : ""
            }`}
          >
            Événements
          </div>

          <div
            onClick={() => setActiveTab("billets")}
            className={`font-medium text-xm w-66 h-12 flex justify-center items-center rounded-4xl cursor-pointer ${
              activeTab === "billets" ? "bg-white" : ""
            }`}
          >
            Billets
          </div>

          <div
            onClick={() => setActiveTab("newsletter")}
            className={`font-medium text-xm w-66 h-12 flex justify-center items-center rounded-4xl cursor-pointer ${
              activeTab === "newsletter" ? "bg-white" : ""
            }`}
          >
            Newsletter
          </div>
        </div>

        
        {activeTab === "events" && (
          <div className="p-6 bg-white shadow-md rounded-2xl w-full max-w-5xl mx-auto mb-12">
            <div className="flex items-center justify-between mb-4 ">
              <h2 className="text-xl font-semibold">Gestion des événements</h2>

              <button className="flex items-center gap-2 bg-[#6EBAFB] hover:bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium transition">
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

            {/* 1 */}
            <tr className="border-b hover:bg-gray-50 transition">
              <td className="py-3">Concert Rock Live</td>
              <td className="py-3">15 déc. 2025</td>
              <td className="py-3">Casa</td>
              <td className="py-3">45 / 200</td>
              <td className="py-3">100 MAD</td>
              <td className="py-3 text-green-600">Disponible</td>
              <td className="py-3">
                <div className="flex items-center justify-center gap-3">
                  <button className="text-blue-400 hover:text-blue-600 cursor-pointer">
                    <RefreshCcw size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-600 cursor-pointer">
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>

            {/* 2 */}
            <tr className="border-b hover:bg-gray-50 transition">
              <td className="py-3">Festival Electro Summer</td>
              <td className="py-3">20 juil. 2025</td>
              <td className="py-3">Rabat</td>
              <td className="py-3">20 / 100</td>
              <td className="py-3">150 MAD</td>
              <td className="py-3 text-green-600">Disponible</td>
              <td className="py-3">
                <div className="flex items-center justify-center gap-3">
                  <button className="text-blue-400 hover:text-blue-600 cursor-pointer">
                    <RefreshCcw size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-600 cursor-pointer">
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>

            {/* 3 */}
            <tr className="border-b hover:bg-gray-50 transition">
              <td className="py-3">Conférence Tech Innovatio</td>
              <td className="py-3">10 juin 2025</td>
              <td className="py-3">Casa</td>
              <td className="py-3">50 / 200</td>
              <td className="py-3">300 MAD</td>
              <td className="py-3 text-green-600">Disponible</td>
              <td className="py-3">
                <div className="flex items-center justify-center gap-3">
                  <button className="text-blue-400 hover:text-blue-600 cursor-pointer">
                    <RefreshCcw size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-600 cursor-pointer">
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>

            {/* 4 */}
            <tr className="border-b hover:bg-gray-50 transition">
              <td className="py-3">Théâtre Classique</td>
              <td className="py-3">5 août 2025</td>
              <td className="py-3">Rabat</td>
              <td className="py-3">30 / 150</td>
              <td className="py-3">400 MAD</td>
              <td className="py-3 text-green-600">Disponible</td>
              <td className="py-3">
                <div className="flex items-center justify-center gap-3">
                  <button className="text-blue-400 hover:text-blue-600 cursor-pointer">
                    <RefreshCcw size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-600 cursor-pointer">
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>

            {/* 5 */}
            <tr className="hover:bg-gray-50 transition">
              <td className="py-3">Marathon de CASA</td>
              <td className="py-3">15 sept. 2025</td>
              <td className="py-3">Casa</td>
              <td className="py-3">1500 / 2000</td>
              <td className="py-3">60 MAD</td>
              <td className="py-3 text-green-600">Disponible</td>
              <td className="py-3">
                <div className="flex items-center justify-center gap-3">
                  <button className="text-blue-400 hover:text-blue-600 cursor-pointer">
                    <RefreshCcw size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-600 cursor-pointer">
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>

          </tbody>
        </table>
            </div>
          </div>
        )}

      
        {activeTab === "billets" && (
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
                <tr className="border-b hover:bg-gray-50 transition">
                  <td className="py-3">17639848</td>
                  <td className="py-3">Concert Rock Live</td>
                  <td className="py-3">24 nov. 2025</td>
                  <td className="py-3">QR-1763984812273</td>
                  <td className="py-3">100 MAD</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

       
        {activeTab === "newsletter" && (
          <div className="p-6 bg-white shadow-md rounded-2xl w-full max-w-5xl mx-auto mb-12">
            <p className="text-gray-600">Liste des abonnés à la newsletter…</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Dashboard;
