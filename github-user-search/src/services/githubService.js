import axios from 'axios';


const BASE_URL = 'https://api.github.com/search/users?q';

const fetchAdvancedSearchData = async ({ username, location, minRepos }) => {
    const query = [];
    if (username) query.push(`user:${username}`);
    if (location) query.push(`location:${location}`);
    if (minRepos) query.push(`repos:>=${minRepos}`);

    const searchQuery = query.join('+');
    const response = await axios.get(`${BASE_URL}?q=${searchQuery}`);
    return response.data;
};

export default fetchAdvancedSearchData;
