import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import PostCard from '../components/Post/PostCard';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import Button from '../components/shared/Button/Button';
import styles from './Home.module.css';

function Home() {
  const { data: posts, loading } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=6');

  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Welcome to HubConnect</h1>
          <p>Connect, share and learn with other developers.</p>
          <div className={styles.cta}>
            <Link to="/posts"><Button>Explore Posts</Button></Link>
            <Link to="/create"><Button variant="ghost">Create Post</Button></Link>
          </div>
        </div>
      </section>

      <section className={styles.recent}>
        <div className={styles.container}>
          <h2>Recent Posts</h2>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className={styles.grid}>
              {posts?.map(p => <PostCard key={p.id} post={p} onLike={()=>{}} onDelete={()=>{}} />)}
            </div>
          )}
          <div className={styles.viewMore}><Link to="/posts"><Button>View All Posts</Button></Link></div>
        </div>
      </section>
    </div>
  );
}

export default Home;