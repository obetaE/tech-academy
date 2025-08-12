import styles from '@/app/about/About.module.css';

export default function AboutHero() {
  return (
    <section className={styles.aboutHero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>We're Revolutionizing Tech Education</h1>
          <p className={styles.subtitle}>
            At Tech Academy, we believe anyone can build a rewarding career in tech with the right guidance, 
            community, and learning resources.
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumbers}>50K+</span>
              <span className={styles.statLabels}>Students Empowered</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumbers}>98%</span>
              <span className={styles.statLabels}>Career Success Rate</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumbers}>250+</span>
              <span className={styles.statLabels}>Expert Instructors</span>
            </div>
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.gridPattern}></div>
          <div className={styles.circle}></div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3>Join Our Community</h3>
              <p>Be part of the tech education revolution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}