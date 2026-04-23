import Card from '../components/shared/Card/Card';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.container}>
      <h1>About HubConnect</h1>
      <Card>
        <h3>Our Mission</h3>
        <p>HubConnect brings developers together to share knowledge and collaborate on projects.</p>
      </Card>

      <Card>
        <h3>Values</h3>
        <ul>
          <li>Collaboration</li>
          <li>Learning</li>
          <li>Inclusivity</li>
        </ul>
      </Card>
    </div>
  );
}

export default About;