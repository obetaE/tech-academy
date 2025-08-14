import React from 'react';
import styles from './CourseProgress.module.css';

export default function CourseProgress({ progress, moduleTitle }) {
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressHeader}>
        <h3 className={styles.moduleTitle}>{moduleTitle}</h3>
        <span className={styles.progressText}>{progress}% Complete</span>
      </div>
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill} 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}