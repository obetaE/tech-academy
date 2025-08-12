import React from 'react';
import styles from '@/app/about/About.module.css';

export default function OurStory() {
  return (
    <section className={styles.ourStory}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Our Journey</h2>
          <p className={styles.sectionSubtitle}>
            From a small startup to a leading tech education platform
          </p>
        </div>
        
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>2015</div>
            <div className={styles.timelineContent}>
              <h3>Humble Beginnings</h3>
              <p>
                Founded by three tech professionals frustrated with the gap between academic learning 
                and industry needs. Started with a single JavaScript course taught in a coworking space.
              </p>
            </div>
          </div>
          
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>2017</div>
            <div className={styles.timelineContent}>
              <h3>First Milestone</h3>
              <p>
                Reached 1,000 students and launched our online learning platform. Partnered with 
                tech companies to develop curriculum based on real-world needs.
              </p>
            </div>
          </div>
          
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>2019</div>
            <div className={styles.timelineContent}>
              <h3>Expansion</h3>
              <p>
                Expanded course offerings to include Data Science, DevOps, and Cybersecurity. 
                Launched our mentorship program connecting students with industry professionals.
              </p>
            </div>
          </div>
          
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>2021</div>
            <div className={styles.timelineContent}>
              <h3>Global Reach</h3>
              <p>
                Surpassed 10,000 students from 50+ countries. Recognized as one of the top emerging 
                edtech platforms by TechEducation Review.
              </p>
            </div>
          </div>
          
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>2023</div>
            <div className={styles.timelineContent}>
              <h3>Today & Beyond</h3>
              <p>
                Serving over 50,000 learners with 250+ courses. Continuously innovating with 
                AI-powered learning tools and expanded career services to help students land their 
                dream tech jobs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}