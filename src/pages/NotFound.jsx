import { Link } from 'react-router-dom';
import Button from '../components/shared/Button/Button';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/"><Button>Back to Home</Button></Link>
    </div>
  );
}

export default NotFound;