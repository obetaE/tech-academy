import React from 'react';
import Link from 'next/link';
import { FaExclamationTriangle, FaHome, FaSearch } from 'react-icons/fa';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorCode}>
          4<span className={styles.zero}>0</span>4
        </div>
        
        <div className={styles.errorIcon}>
          <FaExclamationTriangle />
        </div>
        
        <h1 className={styles.title}>Page Not Found</h1>
        
        <p className={styles.message}>
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className={styles.ctaContainer}>
          <Link href="/" className={`${styles.btn} ${styles.primaryBtn}`}>
            <FaHome /> Return to Homepage
          </Link>
          
          <Link href="/courses" className={`${styles.btn} ${styles.secondaryBtn}`}>
            <FaSearch /> Browse Courses
          </Link>
        </div>
        
        <div className={styles.tips}>
          <h3>Quick Tips:</h3>
          <ul>
            <li>Check the URL for typos</li>
            <li>Use our navigation menu above</li>
            <li>Search for what you need</li>
          </ul>
        </div>
      </div>
    </div>
  );
}