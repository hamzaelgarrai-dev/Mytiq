import axios from "axios";

const API_URL = "http://localhost:8000/api";

// Get all newsletter subscribers (admin)
export const fetchNewsletterSubscribers = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/newsletter/subscribers`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data.data || response.data;
    } catch (error) {
        console.error("Error fetching newsletter subscribers:", error);
        throw error;
    }
};

// Delete a newsletter subscriber (admin)
export const deleteNewsletterSubscriber = async (subscriberId, token) => {
    try {
        const response = await axios.delete(`${API_URL}/newsletter/subscribers/${subscriberId}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error("Error deleting subscriber:", error);
        throw error;
    }
};