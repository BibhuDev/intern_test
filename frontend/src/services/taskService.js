import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1/tasks';

const getAuthHeaders = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});

export const getTasks = () => axios.get(API_URL, getAuthHeaders());

export const createTask = (taskData) => axios.post(API_URL, taskData, getAuthHeaders());

export const updateTask = (id, taskData) => axios.put(`${API_URL}/${id}`, taskData, getAuthHeaders());

export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`, getAuthHeaders());