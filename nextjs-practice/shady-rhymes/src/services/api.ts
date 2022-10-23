import axios from 'axios';

const api = axios.create({
  baseURL: process.env.BASE_API_URL_LOCAL,
});

export default api;
