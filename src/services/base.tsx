import axios from 'axios';

// Base Axios instance
const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    // baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api/', // Update with your Django backend's API base URL
    timeout: 5000, // Timeout after 5 seconds
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // Add token to Authorization header if available
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Token ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle 401 (Unauthorized) responses, token refresh logic can go here
        if (error.response?.status === 401) {
            // Optional: Redirect to login or refresh token logic
            console.error('Unauthorized: Redirecting to login...');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
