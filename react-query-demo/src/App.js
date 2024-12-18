import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from 'axios';
const queryClient = new QueryClient();
const fetchPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};
const PostsComponent = () => {
  const { data, error, isLoading, refetch } = useQuery('posts', fetchPosts);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts.</div>;
  return (
    <div>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Posts</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}
export default App;

