import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchAllTickets } from '../api/tickets';
import { fetchNewsletterSubscribers, deleteNewsletterSubscriber } from '../api/newsletter';
import { useAuth } from './AuthContext';

const DashboardContext = createContext();

export const useDashboard = () => {
    const context = useContext(DashboardContext);
    if (!context) {
        throw new Error('useDashboard must be used within a DashboardProvider');
    }
    return context;
};

export const DashboardProvider = ({ children }) => {
    const { token } = useAuth();
    const [tickets, setTickets] = useState([]);
    const [subscribers, setSubscribers] = useState([]);
    const [statistics, setStatistics] = useState({
        totalEvents: 0,
        totalTickets: 0,
        totalSubscribers: 0,
        totalRevenue: 0
    });
    const [loading, setLoading] = useState(false);

    const loadTickets = async () => {
        if (!token) return;
        try {
            const data = await fetchAllTickets(token);
            setTickets(data);
            // Calculate revenue
            const revenue = data.reduce((sum, ticket) => sum + (ticket.price || 0), 0);
            setStatistics(prev => ({ ...prev, totalTickets: data.length, totalRevenue: revenue }));
        } catch (err) {
            console.error('Error loading tickets:', err);
        }
    };

    const loadSubscribers = async () => {
        if (!token) return;
        try {
            const data = await fetchNewsletterSubscribers(token);
            setSubscribers(data);
            setStatistics(prev => ({ ...prev, totalSubscribers: data.length }));
        } catch (err) {
            console.error('Error loading subscribers:', err);
        }
    };

    const loadDashboardData = async () => {
        setLoading(true);
        await Promise.all([loadTickets(), loadSubscribers()]);
        setLoading(false);
    };

    const removeSubscriber = async (subscriberId) => {
        if (!token) return { success: false };
        try {
            await deleteNewsletterSubscriber(subscriberId, token);
            await loadSubscribers();
            return { success: true };
        } catch (err) {
            console.error('Error deleting subscriber:', err);
            return { success: false, error: err };
        }
    };

    const updateEventCount = (count) => {
        setStatistics(prev => ({ ...prev, totalEvents: count }));
    };

    const value = {
        tickets,
        subscribers,
        statistics,
        loading,
        loadDashboardData,
        removeSubscriber,
        updateEventCount
    };

    return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
};