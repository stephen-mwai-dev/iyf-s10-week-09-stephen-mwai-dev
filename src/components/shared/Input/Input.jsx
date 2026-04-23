import styles from './Input.module.css';

function Input({ label, error, type='text', placeholder, value, onChange, onBlur, name, required=false }) {
  return (
    <div className={styles.wrapper}>
      {label && <label htmlFor={name} className={styles.label}>{label} {required && <span className={styles.required}>*</span>}</label>}
      <input id={name} name={name} type={type} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} className={`${styles.input} ${error ? styles.error : ''}`} />
      {error && <div className={styles.errorText}>{error}</div>}
    </div>
  );
}

export default Input;