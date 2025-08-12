"use client"
import React, { useState } from 'react';
import { FaStar, FaClock, FaLayerGroup, FaUserGraduate } from 'react-icons/fa';
import styles from './CourseList.module.css';

const courses = [
  {
    id: 1,
    title: "JavaScript Mastery",
    description: "From fundamentals to advanced concepts, master JavaScript with modern ES6+ features.",
    instructor: "Alex Morgan",
    rating: 4.9,
    students: 12450,
    duration: "32 hours",
    modules: 12,
    level: "Beginner",
    price: "$89.99",
    popular: true,
    color: "var(--vintage-plum)",
    category: "Web Development"
  },
  {
    id: 2,
    title: "React & Next.js",
    description: "Build modern web applications with React hooks, context, and Next.js framework.",
    instructor: "Sarah Johnson",
    rating: 4.8,
    students: 9850,
    duration: "40 hours",
    modules: 15,
    level: "Intermediate",
    price: "$99.99",
    popular: true,
    color: "var(--dusk-blue)",
    category: "Web Development"
  },
  {
    id: 3,
    title: "Python Data Science",
    description: "Learn data analysis, visualization, and machine learning with Python libraries.",
    instructor: "Michael Chen",
    rating: 4.7,
    students: 8450,
    duration: "45 hours",
    modules: 18,
    level: "Intermediate",
    price: "$109.99",
    popular: false,
    color: "var(--deep-slate)",
    category: "Data Science"
  },
  {
    id: 4,
    title: "UI/UX Design Fundamentals",
    description: "Master design principles, prototyping, and user research for digital products.",
    instructor: "Emma Rodriguez",
    rating: 4.9,
    students: 7650,
    duration: "30 hours",
    modules: 10,
    level: "Beginner",
    price: "$79.99",
    popular: true,
    color: "var(--peach-blush)",
    category: "UI/UX Design"
  },
  {
    id: 5,
    title: "DevOps & Cloud Engineering",
    description: "Learn Docker, Kubernetes, CI/CD pipelines and cloud infrastructure management.",
    instructor: "James Wilson",
    rating: 4.8,
    students: 6200,
    duration: "50 hours",
    modules: 20,
    level: "Advanced",
    price: "$129.99",
    popular: false,
    color: "var(--ash-lavender)",
    category: "DevOps & Cloud"
  },
  {
    id: 6,
    title: "Cybersecurity Essentials",
    description: "Protect systems and networks from threats with ethical hacking techniques.",
    instructor: "Olivia Parker",
    rating: 4.9,
    students: 5400,
    duration: "35 hours",
    modules: 14,
    level: "Intermediate",
    price: "$94.99",
    popular: true,
    color: "var(--vintage-plum)",
    category: "Cybersecurity"
  },
  {
    id: 7,
    title: "Full-Stack Development",
    description: "Master both frontend and backend development to build complete web applications.",
    instructor: "David Kim",
    rating: 4.8,
    students: 11200,
    duration: "60 hours",
    modules: 22,
    level: "Intermediate",
    price: "$119.99",
    popular: true,
    color: "var(--dusk-blue)",
    category: "Web Development"
  },
  {
    id: 8,
    title: "Machine Learning Fundamentals",
    description: "Learn core ML concepts and algorithms with hands-on projects using Python.",
    instructor: "Sophia Chen",
    rating: 4.7,
    students: 7800,
    duration: "40 hours",
    modules: 16,
    level: "Intermediate",
    price: "$99.99",
    popular: false,
    color: "var(--peach-blush)",
    category: "AI & Machine Learning"
  }
];

export default function CourseList() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredCourses, setFilteredCourses] = useState(courses);
  
  const categories = ["All", ...new Set(courses.map(course => course.category))];
  
  const filterCourses = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredCourses(courses);
    } else {
      setFilteredCourses(courses.filter(course => course.category === category));
    }
  };
  
  return (
    <section className={styles.courseList}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>All Courses</h2>
          <p className={styles.sectionSubtitle}>
            Browse our comprehensive catalog of tech courses
          </p>
        </div>
        
        <div className={styles.filters}>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`${styles.filterButton} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => filterCourses(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className={styles.grid}>
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              className={styles.card}
              style={{ '--card-accent': course.color }}
            >
              {course.popular && (
                <div className={styles.popularBadge}>
                  <FaStar /> Popular
                </div>
              )}
              
              <div className={styles.cardHeader}>
                <div 
                  className={styles.cardIcon}
                  style={{ backgroundColor: course.color }}
                >
                  {course.title.charAt(0)}
                </div>
                <div>
                  <h3 className={styles.cardTitle}>{course.title}</h3>
                  <p className={styles.cardInstructor}>{course.instructor}</p>
                </div>
              </div>
              
              <p className={styles.cardDescription}>{course.description}</p>
              
              <div className={styles.cardMeta}>
                <div className={styles.rating}>
                  <FaStar className={styles.star} />
                  <span>{course.rating}</span>
                  <span>({Math.floor(course.students / 1000)}k+)</span>
                </div>
                
                <div className={styles.details}>
                  <div>
                    <FaClock /> {course.duration}
                  </div>
                  <div>
                    <FaLayerGroup /> {course.modules} modules
                  </div>
                </div>
              </div>
              
              <div className={styles.cardFooter}>
                <div className={styles.level} data-level={course.level}>
                  {course.level}
                </div>
                <div className={styles.price}>{course.price}</div>
              </div>
              
              <button className={styles.enrollBtn}>
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}