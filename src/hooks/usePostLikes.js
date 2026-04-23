import { useEffect, useState } from 'react';

/**
 * Manage like counts for posts using localStorage.
 * @returns { getLikes, isLiked, toggleLike }
 */
export function usePostLikes(posts, username = "Stephen Njuguna") {
  // `likes` object: { [postId]: likeCount }
  // `userLikes` array: [postId, ...] (tracks which posts *this user* has liked)
  const [likes, setLikes] = useState(() => {
    const raw = localStorage.getItem('postLikes');
    return raw ? JSON.parse(raw) : {};
  });
  const [userLikes, setUserLikes] = useState(() => {
    const raw = localStorage.getItem('userLikes');
    return raw ? JSON.parse(raw) : [];
  });

  // On every change, persist likes and userLikes to localStorage
  useEffect(() => {
    localStorage.setItem('postLikes', JSON.stringify(likes));
    localStorage.setItem('userLikes', JSON.stringify(userLikes));
  }, [likes, userLikes]);

  // Toggle like status for current user
  function toggleLike(postId) {
    setLikes(prev => ({
      ...prev,
      [postId]: isLiked(postId) ? Math.max(0, (prev[postId] || 1) - 1) : (prev[postId] || getLikes(postId)) + 1
    }));
    setUserLikes(prev => 
      prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
    );
  }

  // Is the current user liking this post?
  function isLiked(postId) {
    return userLikes.includes(postId);
  }

  // Get total like count for a post (simulate a realistic number for API posts, or return the saved value)
  function getLikes(postId) {
    if (likes[postId] !== undefined) return likes[postId];
    // Simulate popularity for API posts:
    if (typeof postId === 'number' && postId < 2000) return 10 + (postId % 15); // [10,24]
    // Otherwise local user posts start from 0
    return 0;
  }

  return { getLikes, isLiked, toggleLike };
}