import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import ErrorMessage from '../components/shared/ErrorMessage';
import Button from '../components/shared/Button/Button';
import Card from '../components/shared/Card/Card';
import styles from './PostDetail.module.css';
import { Link } from 'react-router-dom';

function PostDetail() {
  const { postId } = useParams();
  const { data: post, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!post) return <ErrorMessage message="Post not found" />;

  return (
    <div className={styles.container}>
      <div className={styles.back}><Link to="/posts"><Button variant="ghost">← Back</Button></Link></div>
      <Card>
        <h2>{post.title}</h2>
        <div className={styles.meta}>User #{post.userId}</div>
        <div className={styles.content}><p>{post.body}</p></div>
        <div className={styles.actions}><Button>👍 Like</Button></div>
      </Card>
    </div>
  );
}

export default PostDetail;