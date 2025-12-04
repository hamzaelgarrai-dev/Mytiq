import React, { useState, useEffect } from "react";
import { RefreshCcw, Trash2, Plus } from "lucide-react";
import { fetchEvents, deleteEvent } from "../api/events";
import { fetchAllTickets } from "../api/tickets";
import { fetchNewsletterSubscribers, deleteNewsletterSubscriber } from "../api/newsletter";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("events");
  const [events, setEvents] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [statistics, setStatistics] = useState({
    totalEvents: 0,
    totalTickets: 0,
    totalSubscribers: 0,
    totalRevenue: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Token (pour l'instant, on simule. Plus tard, récupérer depuis le store/context)
  const token = localStorage.getItem("authToken") || "";

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);

      // Fetch events (public endpoint, no auth needed)
      const eventsData = await fetchEvents();
      setEvents(eventsData);

      // Calculate statistics
      const totalEvents = eventsData.length;

      // Try to fetch tickets (needs auth)
      let ticketsData = [];
      let totalRevenue = 0;
      try {
        ticketsData = await fetchAllTickets(token);
        setTickets(ticketsData);
        // Calculate revenue from tickets if data includes price
        totalRevenue = ticketsData.reduce((sum, ticket) => sum + (ticket.price || 0), 0);
      } catch (err) {
        console.log("Could not fetch tickets (auth required):", err);
      }

      // Try to fetch newsletter subscribers (needs auth)
      let subscribersData = [];
      try {
        subscribersData = await fetchNewsletterSubscribers(token);
        setSubscribers(subscribersData);
      } catch (err) {
        console.log("Could not fetch subscribers (auth required):", err);
      }

      setStatistics({
        totalEvents,
        totalTickets: ticketsData.length,
        totalSubscribers: subscribersData.length,
        totalRevenue
      });

      setLoading(false);
    } catch (err) {
      setError("Erreur lors du chargement des données");
      setLoading(false);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer cet événement ?")) return;

    try {
      await deleteEvent(eventId, token);
      // Refresh events list
      const eventsData = await fetchEvents();
      setEvents(eventsData);
      setStatistics(prev => ({ ...prev, totalEvents: eventsData.length }));
      alert("Événement supprimé avec succès");
    } catch (err) {
      alert("Erreur lors de la suppression de l'événement");
    }
  };

  const handleDeleteSubscriber = async (subscriberId) => {
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer cet abonné ?")) return;

    try {
      await deleteNewsletterSubscriber(subscriberId, token);
      // Refresh subscribers list
      const subscribersData = await fetchNewsletterSubscribers(token);
      setSubscribers(subscribersData);
      setStatistics(prev => ({ ...prev, totalSubscribers: subscribersData.length }));
      alert("Abonné supprimé avec succès");
    } catch (err) {
      alert("Erreur lors de la suppression de l'abonné");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-600">Chargement...</p>
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto w-[1050px] max-w-[1050px]">
        <div className="flex flex-col py-6">
          <h1 className="text-2xl font-bold">Dashboard Admin</h1>
          <p>Gérez vos événements, billets et abonnés</p>
        </div>

        {/* Statistics Cards */}
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

        {/* Tabs */}
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

        {/* Events Tab */}
        {activeTab === "events" && (
          <div className="p-6 bg-white shadow-md rounded-2xl w-full max-w-5xl mx-auto mb-12">
            <div className="flex items-center justify-between mb-4">
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
                              onClick={() => handleDeleteEvent(event.id)}
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
        )}

        {/* Tickets Tab */}
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
        )}

        {/* Newsletter Tab */}
        {activeTab === "newsletter" && (
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
                            onClick={() => handleDeleteSubscriber(subscriber.id)}
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
        )}
      </div>
    </>
  );
}

export default Dashboard;
