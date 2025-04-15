import axios from 'axios';

// Get API URL from environment variables or default to localhost for development
// In production, this should be the full URL to your backend (e.g., https://your-backend.vercel.app)
// In development, this will be the local server
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3002';

console.log('API URL:', API_URL);

// Create axios instance with base URL
const api = axios.create({
  baseURL: API_URL
});

// Add request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Recipe related API calls
export const recipeService = {
  getAll: (params = {}) => api.get('/recipes', { params }),
  getById: (id) => api.get(`/recipes/${id}`),
  create: (data) => api.post('/recipes', data),
  update: (id, data) => api.put(`/recipes/${id}`, data),
  delete: (id) => api.delete(`/recipes/${id}`),
  rate: (id, data) => api.post(`/recipes/${id}/rate`, data),
  getUserRecipes: (userId) => api.get(`/recipes/user/${userId}`),
  getFavorites: () => api.get('/recipes/favorites'),
  deleteRecipe: (id) => api.delete(`/recipes/${id}`),
  updateProfile: (data) => api.put('/users/profile', data)
};

// Auth related API calls
export const authService = {
  login: (email, password) => api.post('/auth/login', { email, password }),
  register: (userData) => api.post('/auth/register', userData),
  getCurrentUser: () => api.get('/auth/me'),
};

export default api;
