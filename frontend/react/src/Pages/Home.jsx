import React, { useEffect, useState } from 'react'
import Header from '../components/Home/HeroSection'
import CategoryFilter from '../components/Home/CategoryFilter'
import EventCardSection from '../components/Home/EventCardSection'
import { fetchEvents } from '../api/events'

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("tous");

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (err) {
        setError("Impossible de charger les événements.");
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  const filteredEvents = activeCategory === "tous"
    ? events
    : events.filter(event => event.category === activeCategory);

  if (loading) return <div className="text-center mt-20">Chargement...</div>;
  if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;

  return (
    <div>

      <Header />

      {/* Filtres catégorie */}
      <div className="mt-8 px-4">
        <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      </div>

      {/* Section cartes d’événements */}
      <div className="mt-12 px-4">
        <EventCardSection events={filteredEvents} />
      </div>
    </div>
  )
}

export default Home
