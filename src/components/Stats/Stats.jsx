import React from 'react';  
import styles from '@/app/about/About.module.css';

export default function Stats() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>50K+</span>
            <span className={styles.statLabel}>Students Worldwide</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>94%</span>
            <span className={styles.statLabel}>Completion Rate</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>250+</span>
            <span className={styles.statLabel}>Industry Experts</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>10K+</span>
            <span className={styles.statLabel}>Hiring Partners</span>
          </div>
        </div>
      </div>
    </section>
  );
}