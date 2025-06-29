import axios from "axios";

export const lukFreshApi = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
});