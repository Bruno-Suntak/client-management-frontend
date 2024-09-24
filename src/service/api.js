import axios from 'axios';

export const getClients = () => axios.get('/api/clients');
export const getClientById = (id) => axios.get(`/api/clients/${id}`);
export const addClient = (client) => axios.post('/api/clients', client);
export const deleteClient = (id) => axios.delete(`/api/clients/${id}`);