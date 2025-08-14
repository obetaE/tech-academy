import { FaCheckCircle, FaDownload, FaPlayCircle, FaUserFriends, FaCertificate } from 'react-icons/fa';
import Link from 'next/link';
import styles from './PaymentSuccess.module.css';

export default function PaymentSuccessPage() {
  const course = {
    title: "Advanced React Development",
    instructor: "Sarah Williams",
    thumbnail: "/react-course.jpg",
  };
  
  const nextSteps = [
    {
      icon: <FaDownload />,
      title: "Download Resources",
      description: "Access course materials and resources"
    },
    {
      icon: <FaPlayCircle />,
      title: "Start Learning",
      description: "Begin with the first lesson immediately"
    },
    {
      icon: <FaUserFriends />,
      title: "Join Community",
      description: "Connect with fellow students"
    },
    {
      icon: <FaCertificate />,
      title: "Earn Certificate",
      description: "Complete to get your certification"
    }
  ];

  return (
    <div className={styles.successContainer}>
      <div className={styles.successCard}>
        <div className={styles.successHeader}>
          <FaCheckCircle className={styles.successIcon} />
          <h1>Payment Successful!</h1>
          <p>You've successfully enrolled in <strong>{course.title}</strong></p>
        </div>
        
        <div className={styles.courseInfo}>
          <div 
            className={styles.courseThumb}
            style={{ backgroundImage: `url(${course.thumbnail})` }}
          />
          <div className={styles.courseDetails}>
            <h2>{course.title}</h2>
            <p>Instructor: {course.instructor}</p>
            <div className={styles.accessBadge}>
              <span>Full Access Granted</span>
            </div>
          </div>
        </div>
        
        <div className={styles.nextSteps}>
          <h2>What to do next</h2>
          <div className={styles.stepsGrid}>
            {nextSteps.map((step, index) => (
              <div key={index} className={styles.stepCard}>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.actionButtons}>
          <Link href={`/courses/${encodeURIComponent(course.title)}`} className={styles.primaryButton}>
            Go to Course
          </Link>
          <Link href="/profile" className={styles.secondaryButton}>
            My Dashboard
          </Link>
        </div>
        
        <div className={styles.welcomeMessage}>
          <h3>Welcome to the Tech Academy community!</h3>
          <p>
            We're excited to have you on board. Check your email for your enrollment confirmation 
            and course access instructions. If you have any questions, our support team is available 24/7.
          </p>
        </div>
      </div>
    </div>
  );
}