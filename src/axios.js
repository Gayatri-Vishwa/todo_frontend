import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL, // backend URL from .env
  withCredentials: true, // only if your backend uses cookies
});

export default instance;
