import React from 'react';
import styles from '@/app/about/About.module.css';
import { FaHandsHelping, FaLightbulb, FaUsers, FaGraduationCap } from 'react-icons/fa';


const values = [
  {
    id: 1,
    icon: <FaHandsHelping />,
    title: "Accessibility",
    description: "We remove barriers to tech education through affordable pricing, scholarships, and accessible learning resources.",
    color: "var(--vintage-plum)"
  },
  {
    id: 2,
    icon: <FaLightbulb />,
    title: "Innovation",
    description: "We constantly evolve our teaching methods and curriculum to reflect the latest industry trends and technologies.",
    color: "var(--dusk-blue)"
  },
  {
    id: 3,
    icon: <FaUsers />,
    title: "Community",
    description: "Learning happens better together. We foster supportive communities where students help each other succeed.",
    color: "var(--peach-blush)"
  },
  {
    id: 4,
    icon: <FaGraduationCap />,
    title: "Career Impact",
    description: "Our ultimate measure of success is our students landing fulfilling tech roles and advancing their careers.",
    color: "var(--ash-lavender)"
  }
];

export default function Values() {
  return (
    <section className={styles.values}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Our Core Values</h2>
          <p className={styles.sectionSubtitle}>
            The principles that guide everything we do
          </p>
        </div>
        
        <div className={styles.grid}>
          {values.map((value) => (
            <div 
              key={value.id} 
              className={styles.card}
              style={{ '--card-accent': value.color }}
            >
              <div 
                className={styles.iconContainer}
                style={{ backgroundColor: value.color }}
              >
                {value.icon}
              </div>
              <h3 className={styles.title}>{value.title}</h3>
              <p className={styles.description}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}