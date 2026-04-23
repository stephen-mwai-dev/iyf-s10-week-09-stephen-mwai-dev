import styles from './Button.module.css';

function Button({
  children,
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  className = ''
}) {
  const cls = `${styles.button} ${styles[variant]} ${styles[size]} ${fullWidth ? styles.fullWidth : ''} ${className}`;
  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={cls}>
      {loading ? (
        <>
          <span className={styles.spinner}></span>
          Loading...
        </>
      ) : children}
    </button>
  );
}

export default Button;