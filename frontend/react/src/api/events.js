import axios from "axios";

const API_URL = "http://localhost:8000/api";

export const fetchEvents = async () => {
  try {
    const response = await axios.get(`${API_URL}/events`);
    return response.data.data; // Extract the "data" array from the response
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

export const deleteEvent = async (eventId, token) => {
  try {
    const response = await axios.delete(`${API_URL}/events/${eventId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting event:", error);
    throw error;
  }
};

export const createEvent = async (eventData, token) => {
  try {
    const response = await axios.post(`${API_URL}/events`, eventData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error creating event:", error);
    console.error("Response:", error.response?.data);
    throw error;
  }
};

