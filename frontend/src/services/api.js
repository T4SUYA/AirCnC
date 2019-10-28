import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333' || process.env.REACT_APP_API,
    timeout: 5000,
    headers: { 'Content-type' : 'application/json' }
})

export default api;