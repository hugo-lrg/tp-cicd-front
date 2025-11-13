import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tp-cicd-master.onrender.com:443', // will call relative endpoints like /authors, /books, etc.
});

export default api;
