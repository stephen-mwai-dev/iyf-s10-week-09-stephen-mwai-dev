import { Link } from 'react-router-dom';
import Card from '../shared/Card/Card';
import Button from '../shared/Button/Button';
import styles from './PostCard.module.css';
import { nameForId } from '../../utils/names';

function PostCard({ post, onLike, onDelete, isLiked, isOwn, getLikes }) {
  const author = post.author || nameForId(post.userId);

  return (
    <Card className={styles.card}>
      <Link to={`/posts/${post.id}`} className={styles.titleLink}>
        <h3 className={styles.title}>{post.title}</h3>
      </Link>
      <p className={styles.excerpt}>{post.body?.slice(0, 160)}{post.body && post.body.length > 160 ? '...' : ''}</p>
      <div className={styles.meta}>
        <span className={styles.author}>
          <span role="img" aria-label="person">👤</span> {author}
        </span>
        <div className={styles.actions}>
          <Button
            variant={isLiked ? 'primary' : 'ghost'}
            size="small"
            onClick={() => onLike(post.id)}
          >
            {isLiked ? '👍 Liked' : '👍 Like'}
          </Button>
          <span className={styles.likes}>{getLikes ? getLikes(post.id) : 0} Likes</span>
          {isOwn &&
            <Button
              variant="ghost"
              size="small"
              onClick={() => onDelete(post.id)}
            >Delete</Button>
          }
          <Link to={`/posts/${post.id}`} className={styles.readMore}>
            <Button variant="ghost" size="small">Read</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default PostCard;