import axios from "axios";


const token = localStorage.getItem('stToken')

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    // timeout: 1000,
    headers: {Authorization: `Bearer ${token}`}
});

export default instance;
