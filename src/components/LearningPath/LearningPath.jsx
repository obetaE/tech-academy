import React from 'react';
import styles from './LearningPath.module.css';

const paths = [
  {
    id: 1,
    title: "Frontend Developer",
    description: "Master the core technologies for building modern web interfaces",
    duration: "6 months",
    courses: 8,
    color: "var(--vintage-plum)"
  },
  {
    id: 2,
    title: "Data Scientist",
    description: "Learn data analysis, visualization, and machine learning techniques",
    duration: "8 months",
    courses: 10,
    color: "var(--dusk-blue)"
  },
  {
    id: 3,
    title: "DevOps Engineer",
    description: "Master infrastructure management, CI/CD, and cloud technologies",
    duration: "7 months",
    courses: 9,
    color: "var(--peach-blush)"
  }
];

export default function LearningPath() {
  return (
    <section className={styles.learningPath}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Structured Learning Paths</h2>
          <p className={styles.sectionSubtitle}>
            Follow our expert-designed roadmaps to master in-demand tech careers
          </p>
        </div>
        
        <div className={styles.grid}>
          {paths.map((path) => (
            <div 
              key={path.id} 
              className={styles.card}
              style={{ '--card-accent': path.color }}
            >
              <div className={styles.pathHeader}>
                <h3 className={styles.title}>{path.title}</h3>
                <div className={styles.pathInfo}>
                  <span>{path.duration}</span>
                  <span>{path.courses} courses</span>
                </div>
              </div>
              
              <p className={styles.description}>{path.description}</p>
              
              <div className={styles.progressContainer}>
                <div className={styles.progressBar} style={{ width: '75%' }}></div>
              </div>
              
              <div className={styles.pathStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>85%</span>
                  <span className={styles.statLabel}>Completion Rate</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>92%</span>
                  <span className={styles.statLabel}>Job Placement</span>
                </div>
              </div>
              
              <button className={styles.exploreBtn}>
                Explore Path
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}