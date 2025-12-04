import React, { useState } from 'react'
import Header from '../components/Home/HeroSection'
import CategoryFilter from '../components/Home/CategoryFilter'
import EventCardSection from '../components/Home/EventCardSection'
import { useEvents } from '../context/EventsContext'

const Home = () => {
  const { events, loading, error } = useEvents();
  const [activeCategory, setActiveCategory] = useState("tous");

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

      {/* Section cartes d'événements */}
      <div className="mt-12 px-4">
        <EventCardSection events={filteredEvents} />
      </div>
    </div>
  )
}

export default Home
