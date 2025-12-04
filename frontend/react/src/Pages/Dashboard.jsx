import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useEvents } from "../context/EventsContext";
import { useDashboard } from "../context/DashboardContext";
import StatisticsCards from "../components/Dashboard/StatisticsCards";
import DashboardTabs from "../components/Dashboard/DashboardTabs";
import EventsTable from "../components/Dashboard/EventsTable";
import TicketsTable from "../components/Dashboard/TicketsTable";
import NewsletterTable from "../components/Dashboard/NewsletterTable";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("events");
  const { token } = useAuth();
  const { events, loading: eventsLoading, removeEvent } = useEvents();
  const {
    tickets,
    subscribers,
    statistics,
    loading: dashboardLoading,
    loadDashboardData,
    removeSubscriber,
    updateEventCount
  } = useDashboard();

  useEffect(() => {
    loadDashboardData();
  }, []);

  useEffect(() => {
    updateEventCount(events.length);
  }, [events]);

  const handleDeleteEvent = async (eventId) => {
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer cet événement ?")) return;

    const result = await removeEvent(eventId, token);
    if (result.success) {
      alert("Événement supprimé avec succès");
    } else {
      alert("Erreur lors de la suppression de l'événement");
    }
  };

  const handleDeleteSubscriber = async (subscriberId) => {
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer cet abonné ?")) return;

    const result = await removeSubscriber(subscriberId);
    if (result.success) {
      alert("Abonné supprimé avec succès");
    } else {
      alert("Erreur lors de la suppression de l'abonné");
    }
  };

  const loading = eventsLoading || dashboardLoading;

  if (loading && events.length === 0) {
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
        <StatisticsCards statistics={statistics} />

        {/* Tabs */}
        <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Events Tab */}
        {activeTab === "events" && (
          <EventsTable events={events} onDelete={handleDeleteEvent} />
        )}

        {/* Tickets Tab */}
        {activeTab === "billets" && (
          <TicketsTable tickets={tickets} />
        )}

        {/* Newsletter Tab */}
        {activeTab === "newsletter" && (
          <NewsletterTable subscribers={subscribers} onDelete={handleDeleteSubscriber} />
        )}
      </div>
    </>
  );
}

export default Dashboard;
