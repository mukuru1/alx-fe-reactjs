import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);

        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch {
            setError(true);
            setUserData(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>Looks like we can't find the user.</p>}Looks like we can't find the user.
            {userData && (
                <div>
                    <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} style={{ width: '100px' }} />
                    <p>Name: {userData.name || 'N/A'}</p>
                    <p>
                        Profile: <a href={userData.html_url} target="_blank" rel="noopener noreferrer">{userData.login}</a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Search;

