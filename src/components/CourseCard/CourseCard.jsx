import React from 'react';
import styles from './CourseCard.module.css';
import { FaStar, FaUserGraduate, FaClock, FaLayerGroup } from 'react-icons/fa';

export default function CourseCard({ course }) {
  return (
    <div className={styles.card}>
      {course.popular && (
        <div className={styles.popularTag} style={{ backgroundColor: course.color }}>
          Popular
        </div>
      )}
      
      <div 
        className={styles.cardHeader} 
        style={{ backgroundColor: course.color }}
      >
        <h3 className={styles.cardTitle}>{course.title}</h3>
        <p className={styles.cardInstructor}>by {course.instructor}</p>
      </div>
      
      <div className={styles.cardBody}>
        <p className={styles.cardDescription}>{course.description}</p>
        
        <div className={styles.cardMeta}>
          <div className={styles.metaItem}>
            <FaStar className={styles.metaIcon} />
            <span>{course.rating} ({Math.floor(course.students/100)}k+)</span>
          </div>
          <div className={styles.metaItem}>
            <FaUserGraduate className={styles.metaIcon} />
            <span>{course.students.toLocaleString()}</span>
          </div>
        </div>
        
        <div className={styles.cardMeta}>
          <div className={styles.metaItem}>
            <FaClock className={styles.metaIcon} />
            <span>{course.duration}</span>
          </div>
          <div className={styles.metaItem}>
            <FaLayerGroup className={styles.metaIcon} />
            <span>{course.modules} modules</span>
          </div>
        </div>
        
        <div className={styles.levelBadge} style={{ backgroundColor: course.color }}>
          {course.level}
        </div>
      </div>
      
      <div className={styles.cardFooter}>
        <div className={styles.price}>{course.price}</div>
        <button className={styles.enrollBtn} style={{ backgroundColor: course.color }}>
          Enroll Now
        </button>
      </div>
    </div>
  );
}