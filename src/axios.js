import axios from 'axios';

// const instance = axios.create({
//   baseURL:https:"todo-backend-sable-nu.vercel.app" ;   /// process.env.REACT_APP_BACKEND_URL, // backend URL from .env
//   withCredentials: true, // only if your backend uses cookies
// });
const instance = axios.create({
  baseURL: "https://todo-backend-sable-nu.vercel.app",
  withCredentials: true,
});

export default instance;
