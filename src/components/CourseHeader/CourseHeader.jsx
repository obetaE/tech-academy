import React from 'react';
import styles from './CourseHeader.module.css';

export default function CourseHeader({ title, instructor, duration }) {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.meta}>
            <span className={styles.instructor}>Instructor: {instructor}</span>
            <span className={styles.duration}>{duration}</span>
          </div>
        </div>
        <button className={styles.resourcesButton}>Course Resources</button>
      </div>
    </div>
  );
}