import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchEvents, deleteEvent } from '../api/events';

const EventsContext = createContext();

export const useEvents = () => {
    const context = useContext(EventsContext);
    if (!context) {
        throw new Error('useEvents must be used within an EventsProvider');
    }
    return context;
};

export const EventsProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadEvents = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchEvents();
            setEvents(data);
        } catch (err) {
            setError('Impossible de charger les événements');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadEvents();
    }, []);

    const removeEvent = async (eventId, token) => {
        try {
            await deleteEvent(eventId, token);
            await loadEvents(); 
            return { success: true };
        } catch (err) {
            console.error('Error deleting event:', err);
            return { success: false, error: err };
        }
    };

    const refreshEvents = () => {
        loadEvents();
    };

    const value = {
        events,
        loading,
        error,
        removeEvent,
        refreshEvents
    };

    return <EventsContext.Provider value={value}>{children}</EventsContext.Provider>;
};
