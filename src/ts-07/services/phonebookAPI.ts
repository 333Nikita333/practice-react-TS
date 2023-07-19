import axios from 'axios';

export const contactApi = (): void => {
  axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
};

export const setAuthHeader = (token: string): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = (): void => {
  axios.defaults.headers.common.Authorization = '';
};
