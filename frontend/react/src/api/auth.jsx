import axios from "axios";

const API_URL = "http://localhost:8000/api";

// Inscription
export const registerUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/register`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Connexion
export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Déconnexion
export const logoutUser = async (token) => {
  try {
    const response = await axios.post(
      `${API_URL}/logout`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
