import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header({ theme, toggleTheme }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.brand}>
          <div className={styles.logo}>🌐</div>
          <div className={styles.titleWrap}>
            <h1 className={styles.title}>HubConnect</h1>
            <small className={styles.tagline}>Connect • Share • Learn</small>
          </div>
        </Link>
        <nav className={styles.nav}>
          <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''}>
            Home
          </NavLink>
          <NavLink to="/posts" className={({ isActive }) => isActive ? styles.active : ''}>
            Posts
          </NavLink>
          <NavLink to="/create" className={({ isActive }) => isActive ? styles.active : ''}>
            Create
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>
            Contact
          </NavLink>
        </nav>
        <button
          className={styles.themeBtn}
          onClick={toggleTheme}
          aria-label="Toggle dark/light theme"
          title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}

export default Header;