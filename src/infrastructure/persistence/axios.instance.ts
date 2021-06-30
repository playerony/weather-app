import axios, { AxiosRequestConfig } from 'axios';

export const axiosConfig: AxiosRequestConfig = {
  timeout: 15000,
  timeoutErrorMessage: 'Request timeout.',
  baseURL: 'http://api.openweathermap.org',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
};

export const axiosInstance = axios.create(axiosConfig);
