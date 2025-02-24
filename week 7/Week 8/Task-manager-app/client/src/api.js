// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

export const createTask = async (taskData) => {
  return await axios.post(API_URL, taskData);
};

export const getTasks = async (filters = {}) => {
  return await axios.get(API_URL, { params: filters });
};

export const updateTask = async (id, taskData) => {
  return await axios.put(`${API_URL}/${id}`, taskData);
};

export const deleteTask = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};

export const markTaskCompleted = async (id) => {
  return await axios.post(`${API_URL}/complete/${id}`);
};
