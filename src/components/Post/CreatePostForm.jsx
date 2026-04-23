import { useState } from 'react';
import Input from '../shared/Input/Input';
import Button from '../shared/Button/Button';
import styles from './CreatePostForm.module.css';

function CreatePostForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      alert('Please fill title and content');
      return;
    }
    setSubmitting(true);
    try {
      const newPost = { id: Date.now(), title: title.trim(), body: body.trim(), userId: 1 };
      onSubmit(newPost);
      setTitle(''); setBody('');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input label="Title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Post title" required />
      <div className={styles.field}>
        <label className={styles.label}>Content</label>
        <textarea className={styles.textarea} value={body} onChange={(e)=>setBody(e.target.value)} rows="8" required />
      </div>
      <div className={styles.actions}>
        <Button type="submit" loading={submitting} fullWidth>Publish Post</Button>
      </div>
    </form>
  );
}

export default CreatePostForm;