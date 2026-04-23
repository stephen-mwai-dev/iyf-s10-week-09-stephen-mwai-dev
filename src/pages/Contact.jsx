import { useForm } from '../hooks/useForm';
import Input from '../components/shared/Input/Input';
import Button from '../components/shared/Button/Button';
import Card from '../components/shared/Card/Card';
import styles from './Contact.module.css';

function Contact() {
  const { values, handleChange, handleSubmit, isSubmitting, reset } = useForm({ name:'', email:'', subject:'', message:'' }, async (vals) => {
    alert('Thanks! We received your message.');
    reset();
  });

  return (
    <div className={styles.container}>
      <h1>Contact</h1>
      <Card>
        <form onSubmit={handleSubmit}>
          <Input label="Name" name="name" value={values.name} onChange={handleChange} required />
          <Input label="Email" type="email" name="email" value={values.email} onChange={handleChange} required />
          <Input label="Subject" name="subject" value={values.subject} onChange={handleChange} />
          <div style={{marginBottom:12}}>
            <label style={{fontWeight:700, display:'block', marginBottom:6}}>Message</label>
            <textarea name="message" value={values.message} onChange={handleChange} rows="6" style={{width:'100%', padding:10, borderRadius:8, border:'2px solid #eef3f7'}} />
          </div>
          <Button type="submit" loading={isSubmitting} fullWidth>Send Message</Button>
        </form>
      </Card>
    </div>
  );
}

export default Contact;