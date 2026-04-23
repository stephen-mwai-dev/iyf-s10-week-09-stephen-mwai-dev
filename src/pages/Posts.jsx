import React, { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { usePostLikes } from '../hooks/usePostLikes';
import PostList from '../components/Post/PostList';
import Input from '../components/shared/Input/Input';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import ErrorMessage from '../components/shared/ErrorMessage';
import styles from './Posts.module.css';

// Realistic English sample posts to showcase the feed if API is empty  
const showcasePosts = [
  {
    id: 111101,
    title: "Welcome to HubConnect!",
    body: "Excited to kickstart our African developer space. Introduce yourself, share what you’re working on, and connect with fellow devs. We’re stronger together!",
    userId: 1,
    author: "Stephen Njuguna"
  },
  {
    id: 111102,
    title: "How do you stay motivated to learn?",
    body: "Some days imposter syndrome hits hard. What are your favorite ways to keep learning and growing as a developer?",
    userId: 2,
    author: "Mercy Njeri"
  },
  {
    id: 111103,
    title: "Best resources for React newbies?",
    body: "What online resources helped you grasp React? Please share links, videos, or your favorite YouTube channels!",
    userId: 3,
    author: "Wyclif Ochieng"
  },
  {
    id: 111104,
    title: "Let’s form a Saturday study group 📚",
    body: "Anyone interested in joining a weekend Zoom for frontend practice? Comment here, and let’s coordinate on Discord!",
    userId: 4,
    author: "Yahya Said"
  }
];

function Posts() {
  const { data: apiPosts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=16');
  const [storedPosts, setStoredPosts] = useLocalStorage('posts', []);
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);

  // Like logic
  const { getLikes, isLiked, toggleLike } = usePostLikes(posts);

  useEffect(() => {
    let content = [];
    // Prioritize user's posts, API, else fallback to showcase
    if ((storedPosts?.length ?? 0) || (apiPosts?.length ?? 0)) {
      content = [...(storedPosts || []), ...(apiPosts || [])];
    } else {
      content = showcasePosts;
    }
    setPosts(
      content.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.body.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [apiPosts, storedPosts, search]);

  const handleDelete = (id) => {
    setStoredPosts(prev => prev.filter(p => p.id !== id));
  };

  const ownPostIds = (storedPosts || []).map(p => p.id);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className={styles.container}>
      <h1>Community Posts</h1>
      <Input
        label="Search posts"
        name="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search by title or body..."
      />
      <PostList
        posts={posts}
        loading={false}
        onLike={toggleLike}
        onDelete={handleDelete}
        isLiked={isLiked}
        ownPostIds={ownPostIds}
        getLikes={getLikes}
      />
    </div>
  );
}

export default Posts;