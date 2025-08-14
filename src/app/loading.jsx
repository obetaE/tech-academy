import React from 'react';
import styles from './Loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loader}>
        <div className={styles.orb}></div>
        <div className={styles.orb}></div>
        <div className={styles.orb}></div>
        <div className={styles.orb}></div>
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Loading Tech Academy</h2>
        <p className={styles.subtitle}>Preparing your learning experience...</p>
      </div>
      <div className={styles.tipContainer}>
        <p className={styles.tip}>Tip: Did you know we offer 24/7 mentor support?</p>
      </div>
    </div>
  );
}