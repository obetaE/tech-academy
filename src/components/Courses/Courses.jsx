import Link from 'next/link';
import { FaStar, FaClock, FaLayerGroup, FaUserGraduate } from 'react-icons/fa';
import styles from "./Courses.module.css";

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
    color: "var(--vintage-plum)"
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
    color: "var(--dusk-blue)"
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
    color: "var(--deep-slate)"
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
    color: "var(--peach-blush)"
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
    color: "var(--ash-lavender)"
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
    color: "var(--vintage-plum)"
  },
];

export default function Courses() {
  return (
    <section className={styles.courses}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">Our Popular Courses</h2>
          <p className={styles.subtitle}>
            Discover our most in-demand tech courses taught by industry experts
          </p>
          <Link href="/courses" className={styles.viewAll}>
            View All Courses
          </Link>
        </div>
        
        <div className={styles.grid}>
          {courses.map((course) => (
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
              
              <Link href={`/courses/${course.id}`} className={styles.enrollBtn}>
                Enroll Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}