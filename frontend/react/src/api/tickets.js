import axios from "axios";

const API_URL = "http://localhost:8000/api";

// Get all tickets (admin)
export const fetchAllTickets = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/tickets`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data.data || response.data;
    } catch (error) {
        console.error("Error fetching tickets:", error);
        throw error;
    }
};

// Get tickets for a specific event (admin)
export const fetchEventTickets = async (eventId, token) => {
    try {
        const response = await axios.get(`${API_URL}/events/${eventId}/tickets`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data.data || response.data;
    } catch (error) {
        console.error("Error fetching event tickets:", error);
        throw error;
    }
};

// Get user's own tickets
export const fetchMyTickets = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/tickets/my`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data || [];
    } catch (error) {
        console.error("Error fetching my tickets:", error);
        throw error;
    }
};
