import styles from './ErrorMessage.module.css';

function ErrorMessage({ message, onRetry }) {
  return (
    <div className={styles.box}>
      <div className={styles.icon}>⚠️</div>
      <div className={styles.msg}>{message}</div>
      {onRetry && <button className={styles.retry} onClick={onRetry}>Try again</button>}
    </div>
  );
}

export default ErrorMessage;