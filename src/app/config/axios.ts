import axios, { AxiosError } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://aqueous-lowlands-83943.herokuapp.com/api',
});

axiosInstance.interceptors.request.use(
  (config: any) => {
    if (!config?.headers?.Authorization && config?.headers) {
      const token = localStorage.getItem('jwToken');
      config.headers.Authorization = token ? `Bearer ${token}` : '';
    }

    return config;
  },
  (err: AxiosError) => Promise.reject(err)
);

export default axiosInstance;
