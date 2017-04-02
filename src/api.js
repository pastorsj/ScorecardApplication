'use strict';
import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://rosehulmangolf.com',
    baseURL: 'https://localhost:5001',
    timeout: 1000,
    headers: {}
});

export default api;