import React from 'react';
import Link from 'next/link';
import { 
  FaCode, 
  FaDatabase, 
  FaRobot, 
  FaShieldAlt, 
  FaServer, 
  FaPalette,
  FaMobile,
  FaCloud
} from 'react-icons/fa';
import styles from './CourseCategories.module.css';

const categories = [
  {
    id: 1,
    name: "Web Development",
    icon: <FaCode />,
    courses: 42,
    color: "var(--vintage-plum)"
  },
  {
    id: 2,
    name: "Data Science",
    icon: <FaDatabase />,
    courses: 28,
    color: "var(--dusk-blue)"
  },
  {
    id: 3,
    name: "AI & Machine Learning",
    icon: <FaRobot />,
    courses: 35,
    color: "var(--peach-blush)"
  },
  {
    id: 4,
    name: "Cybersecurity",
    icon: <FaShieldAlt />,
    courses: 22,
    color: "var(--ash-lavender)"
  },
  {
    id: 5,
    name: "DevOps & Cloud",
    icon: <FaServer />,
    courses: 30,
    color: "var(--deep-slate)"
  },
  {
    id: 6,
    name: "UI/UX Design",
    icon: <FaPalette />,
    courses: 25,
    color: "var(--vintage-plum)"
  },
  {
    id: 7,
    name: "Mobile Development",
    icon: <FaMobile />,
    courses: 20,
    color: "var(--dusk-blue)"
  },
  {
    id: 8,
    name: "Cloud Computing",
    icon: <FaCloud />,
    courses: 18,
    color: "var(--peach-blush)"
  }
];

export default function CourseCategories() {
  return (
    <section className={styles.categories}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Browse by Category</h2>
          <p className={styles.sectionSubtitle}>
            Explore our tech courses organized by specialization
          </p>
        </div>
        
        <div className={styles.grid}>
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={`/courses/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className={styles.card}
              style={{ '--card-accent': category.color }}
            >
              <div 
                className={styles.iconContainer}
                style={{ backgroundColor: category.color }}
              >
                {category.icon}
              </div>
              <h3 className={styles.name}>{category.name}</h3>
              <p className={styles.coursesCount}>{category.courses} courses</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}