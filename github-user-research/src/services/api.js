import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

export const searchUsers = async (query) => {
    const headers = API_KEY ? { Authorization: `token ${API_KEY}` } : {};
    const response = await axios.get(`${BASE_URL}/search/users`, {
        headers,
        params: { q: query },
    });
    return response.data;
};

