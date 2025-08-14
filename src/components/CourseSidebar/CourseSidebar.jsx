import React from 'react';
import Link from 'next/link';
import styles from './CourseSidebar.module.css';

export default function CourseSidebar({ modules, currentTopicId }) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h3 className={styles.title}>Course Outline</h3>
      </div>
      
      <div className={styles.modules}>
        {modules.map(module => (
          <div key={module.id} className={styles.module}>
            <div className={`${styles.moduleHeader} ${module.completed ? styles.completed : ''}`}>
              <div className={styles.moduleIcon}>
                {module.completed ? '✓' : module.id.replace('week', 'W')}
              </div>
              <h4 className={styles.moduleTitle}>{module.title}</h4>
            </div>
            
            <div className={styles.topics}>
              {module.topics.map(topic => (
                <Link 
                  href="#" 
                  key={topic.id}
                  className={`${styles.topic} ${topic.id === currentTopicId ? styles.active : ''}`}
                >
                  <div className={styles.topicStatus}>
                    {topic.completed ? (
                      <span className={styles.completedIcon}>✓</span>
                    ) : (
                      <span className={styles.incompleteIcon}>•</span>
                    )}
                  </div>
                  <span className={styles.topicTitle}>{topic.title}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.resources}>
        <h4 className={styles.resourcesTitle}>Additional Resources</h4>
        <ul className={styles.resourcesList}>
          <li className={styles.resourceItem}>HTML Cheat Sheet</li>
          <li className={styles.resourceItem}>Semantic HTML Guide</li>
          <li className={styles.resourceItem}>Form Validation Examples</li>
        </ul>
      </div>
    </div>
  );
}