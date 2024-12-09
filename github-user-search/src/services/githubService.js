import axios from 'axios';


const BASE_USER_URL = 'https://api.github.com/search/users?q';

const fetchUserData = async (username) => {
    if (!username) throw new Error('Username is required');
    const response = await axios.get(`${BASE_USER_URL}/${username}`);
    return response.data;
};

const fetchAdvancedSearchData = async ({ username, location, minRepos }) => {
    const query = [];
    if (username) query.push(`user:${username}`);
    if (location) query.push(`location:${location}`);
    if (minRepos) query.push(`repos:>=${minRepos}`);

    const searchQuery = query.join('+');
    const response = await axios.get(`${BASE_SEARCH_URL}?q=${searchQuery}`);
    return response.data;
};

export { fetchUserData, fetchAdvancedSearchData };
