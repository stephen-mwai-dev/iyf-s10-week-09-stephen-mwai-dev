import styles from './Card.module.css';

function Card({ title, children, footer, className = '' }) {
  return (
    <div className={`${styles.card} ${className}`}>
      {title && <div className={styles.header}>{title}</div>}
      <div className={styles.content}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
}

export default Card;