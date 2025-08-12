import { 
  FaLaptopCode, 
  FaUsers, 
  FaCertificate, 
  FaChalkboardTeacher,
  FaBriefcase,
  FaSyncAlt
} from 'react-icons/fa';
import styles from "./Features.module.css";

const features = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: "Project-Based Learning",
    description: "Build real-world projects that showcase your skills to employers. Our curriculum emphasizes hands-on experience over theory.",
    color: "var(--vintage-plum)"
  },
  {
    id: 2,
    icon: <FaUsers />,
    title: "Community Support",
    description: "Join our active community of learners. Get help, share projects, and network with peers and industry professionals.",
    color: "var(--dusk-blue)"
  },
  {
    id: 3,
    icon: <FaCertificate />,
    title: "Industry-Recognized Certificates",
    description: "Earn certificates endorsed by tech industry leaders that boost your resume and career prospects.",
    color: "var(--peach-blush)"
  },
  {
    id: 4,
    icon: <FaChalkboardTeacher />,
    title: "Expert Instructors",
    description: "Learn from professionals currently working at top tech companies who bring real-world experience to every lesson.",
    color: "var(--ash-lavender)"
  },
  {
    id: 5,
    icon: <FaBriefcase />,
    title: "Career Services",
    description: "Get career coaching, resume reviews, and interview preparation to land your dream tech job.",
    color: "var(--deep-slate)"
  },
  {
    id: 6,
    icon: <FaSyncAlt />,
    title: "Flexible Learning",
    description: "Learn at your own pace with our on-demand platform. Access courses anytime, anywhere, on any device.",
    color: "var(--vintage-plum)"
  }
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">Why Choose Tech Academy</h2>
          <p className={styles.subtitle}>
            We're redefining tech education with a focus on practical skills and career outcomes
          </p>
        </div>
        
        <div className={styles.grid}>
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className={styles.card}
              style={{ '--card-accent': feature.color }}
            >
              <div 
                className={styles.iconContainer}
                style={{ backgroundColor: feature.color }}
              >
                {feature.icon}
              </div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>98%</span>
            <span className={styles.statLabel}>Career Impact</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Support Access</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>10K+</span>
            <span className={styles.statLabel}>Hiring Partners</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>1:1</span>
            <span className={styles.statLabel}>Mentorship</span>
          </div>
        </div>
      </div>
    </section>
  );
}