import React from 'react';
import styles from '@/app/about/About.module.css';
import Link from 'next/link';


export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Ready to Start Your Tech Journey?</h2>
          <p className={styles.subtitle}>
            Join thousands of students who have transformed their careers with Tech Academy
          </p>
          <div className={styles.buttonGroup}>
            <Link href="/courses" className={styles.primaryButton}>
              Browse Courses
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}