import axios from 'axios';

export const getApiTest = () => ({ url: '/api/tests' });

export const postLoginDev = (data) => ({
  method: 'POST',
  url: '/api/login/test',
  data,
});

export const postLogin = (data) => ({
  method: 'POST',
  url: '/api/login',
  data,
});

export const getLogout = () => ({
  method: 'GET',
  url: '/api/logout',
});

const axiosCall = (request) => axios(request);

export default axiosCall;
