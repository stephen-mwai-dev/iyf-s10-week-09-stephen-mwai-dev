import CreatePostForm from '../components/Post/CreatePostForm';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import styles from './CreatePost.module.css';

function CreatePost() {
  const [posts, setPosts] = useLocalStorage('posts', []);
  const navigate = useNavigate();

  const handleCreate = (post) => {
    setPosts([post, ...(posts || [])]);
    navigate('/posts');
  };

  return (
    <div className={styles.container}>
      <h1>Create Post</h1>
      <CreatePostForm onSubmit={handleCreate} />
    </div>
  );
}

export default CreatePost;