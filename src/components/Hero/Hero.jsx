import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Master <span>Tech Skills</span> That Matter
          </h1>
          <p className={styles.subtitle}>
            Join thousands of learners building in-demand skills for tomorrow's tech landscape. 
            Expert-led courses with hands-on projects.
          </p>
          <div className={styles.ctaContainer}>
            <Link href="/courses" className={`${styles.cta} ${styles.primary}`}>
              Explore Courses
            </Link>
            <Link href="/about" className={`${styles.cta} ${styles.secondary}`}>
              How It Works
            </Link>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>250+</span>
              <span className={styles.statLabel}>Courses</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>Satisfaction</span>
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
                <span className={styles.cardTitle}>JavaScript Mastery</span>
                <span className={styles.cardInstructor}>Alex Morgan</span>
              </div>
            </div>
            <div className={styles.cardBottom}>
              <div className={styles.progressBar}>
                <div className={styles.progressFill}></div>
              </div>
              <div className={styles.cardStats}>
                <span>12 Modules</span>
                <span>32 Hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}