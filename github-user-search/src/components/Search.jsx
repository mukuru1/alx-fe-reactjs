import React, { useState } from 'react';
import { fetchAdvancedSearchData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);

        try {
            const query = { username, location, minRepos };
            const data = await fetchAdvancedSearchData(query);
            if (data.items.length === 0) throw new Error(); // No results found
            setResults(data.items);
        } catch {
            setError(true);
            setResults([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 max-w-xl mx-auto">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter GitHub username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                        Location
                    </label>
                    <input
                        id="location"
                        type="text"
                        placeholder="Enter location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="minRepos">
                        Minimum Repositories
                    </label>
                    <input
                        id="minRepos"
                        type="number"
                        placeholder="Enter minimum repositories"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Search
                </button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>Looks like we cant find the user.</p>}
            {results.length > 0 && (
                <div>
                    <h2 className="text-lg font-bold mb-4">Search Results</h2>
                    <ul>
                        {results.map((user) => (
                            <li key={user.id} className="mb-4">
                                <img
                                    src={user.avatar_url}
                                    alt={user.login}
                                    className="w-16 h-16 rounded-full inline-block mr-4"
                                />
                                <div className="inline-block align-middle">
                                    <p>
                                        <strong>{user.login}</strong>
                                    </p>
                                    <p>
                                        <a
                                            href={user.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 underline"
                                        >
                                            View Profile
                                        </a>
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export { fetchUserData, fetchAdvancedSearchData };
