import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const showCards = async () => {
  return await api.get('/');
};

export default api;
