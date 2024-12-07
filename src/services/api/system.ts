import { api } from './config';

export const systemApi = {
  checkStatus: async () => {
    const response = await api.get('/system/status');
    return response.data;
  },

  ping: async () => {
    const response = await api.get('/system/ping');
    return response.data;
  },
};