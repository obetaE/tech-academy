import React from 'react';
import styles from './ContactHero.module.css';

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Get in Touch</h1>
          <p className={styles.subtitle}>
            Have questions about our courses, programs, or anything else? Our team is ready to answer all your questions.
          </p>
        </div>
      </div>
    </section>
  );
}