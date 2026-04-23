import PostCard from './PostCard';
import styles from './PostList.module.css';

function PostList({
  posts = [],
  loading,
  error,
  onLike,
  onDelete,
  isLiked,
  likedPosts = [],
  ownPostIds = [],
  getLikes
}) {
  if (loading) return <div className={styles.center}>Loading posts...</div>;
  if (error) return <div className={styles.center}>Error: {error}</div>;
  if (!posts || posts.length === 0) return <div className={styles.center}>No posts found.</div>;

  return (
    <div className={styles.grid}>
      {posts.map(p => (
        <PostCard
          key={p.id}
          post={p}
          onLike={onLike}
          onDelete={onDelete}
          isLiked={isLiked ? isLiked(p.id) : likedPosts.includes(p.id)}
          isOwn={ownPostIds.includes(p.id)}
          getLikes={getLikes}
        />
      ))}
    </div>
  );
}

export default PostList;