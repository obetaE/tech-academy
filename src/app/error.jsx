'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { FaExclamationTriangle, FaHome, FaRedo, FaGraduationCap } from 'react-icons/fa';
import styles from './Error.module.css';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorCard}>
        <div className={styles.errorHeader}>
          <FaExclamationTriangle className={styles.errorIcon} />
          <h1 className={styles.errorTitle}>Oops! Something went wrong</h1>
        </div>
        
        <div className={styles.errorContent}>
          <p className={styles.errorMessage}>
            We encountered an issue while loading the page. This might be temporary - 
            try refreshing the page or returning to the homepage.
          </p>
          
          <div className={styles.errorDetails}>
            <p><strong>Error details:</strong></p>
            <code className={styles.errorCode}>
              {error.message || 'Unknown error occurred'}
            </code>
          </div>
          
          <div className={styles.ctaContainer}>
            <button onClick={() => reset()} className={styles.ctaButton}>
              <FaRedo className={styles.buttonIcon} /> Try Again
            </button>
            
            <Link href="/" className={`${styles.ctaButton} ${styles.homeButton}`}>
              <FaHome className={styles.buttonIcon} /> Home
            </Link>
            
            <Link href="/courses" className={`${styles.ctaButton} ${styles.coursesButton}`}>
              <FaGraduationCap className={styles.buttonIcon} /> Browse Courses
            </Link>
          </div>
          
          <div className={styles.supportSection}>
            <h3 className={styles.supportTitle}>Need immediate help?</h3>
            <div className={styles.supportOptions}>
              <div className={styles.supportOption}>
                <div className={styles.supportBadge}>Email</div>
                <p>support@techacademy.io</p>
              </div>
              <div className={styles.supportOption}>
                <div className={styles.supportBadge}>Live Chat</div>
                <p>Available 24/7</p>
              </div>
              <div className={styles.supportOption}>
                <div className={styles.supportBadge}>Community</div>
                <p>Join our Discord</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}