import styles from './LoadingSpinner.module.css';

function LoadingSpinner({ size='medium', text='Loading...' }) {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.dot} ${styles[size]}`}></div>
      {text && <div className={styles.text}>{text}</div>}
    </div>
  );
}

export default LoadingSpinner;