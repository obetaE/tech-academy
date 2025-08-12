import React from 'react';
import Link from 'next/link';
import styles from './CoursesHero.module.css';

export default function CoursesHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Transform Your Career with Our Courses</h1>
          <p className={styles.subtitle}>
            Learn in-demand tech skills from industry experts. All courses include hands-on projects, 
            community support, and career resources.
          </p>
          <div className={styles.searchContainer}>
            <input 
              type="text" 
              placeholder="Search courses, technologies, or skills..." 
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>Search</button>
          </div>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>250+</span>
              <span className={styles.statLabel}>Courses</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>Satisfaction Rate</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50K+</span>
              <span className={styles.statLabel}>Students</span>
            </div>
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.circle}></div>
          <div className={styles.dots}></div>
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.avatar}></div>
              <div className={styles.cardInfo}>
                <span className={styles.cardTitle}>New Course!</span>
                <span className={styles.cardSubtitle}>AI Fundamentals</span>
              </div>
            </div>
            <div className={styles.cardBottom}>
              <Link href="/courses/ai-fundamentals" className={styles.cardButton}>
                Explore Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}