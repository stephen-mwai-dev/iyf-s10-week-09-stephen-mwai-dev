import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.css';

function Layout({ theme, toggleTheme }) {
  return (
    <div className={styles.site}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className={styles.main}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;