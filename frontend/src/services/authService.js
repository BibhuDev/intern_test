import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1/auth';

export const register = (name, email, password) => {
  return axios.post(`${API_URL}/register`, { name, email, password });
};

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const getToken = () => localStorage.getItem('token');