import styles from './Footer.module.css';

function Footer() {
  const socials = [
    { name: 'X', url: 'https://twitter.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Discord', url: 'https://discord.com' },
    { name: 'GitHub', url: 'https://github.com' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.col}>
          <h4>HubConnect</h4>
          <p>A vibrant community where developers share knowledge, collaborate on projects, and grow their skills.</p>
        </div>

        <div className={styles.col}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/posts">Posts</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Follow Us</h4>
          <div className={styles.socials}>
            {socials.map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className={styles.social}>
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <small>© {new Date().getFullYear()} HubConnect — Built with ❤️ by Stephen Mwai Dev</small>
      </div>
    </footer>
  );
}

export default Footer;