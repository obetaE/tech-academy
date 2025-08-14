import { FaExclamationTriangle, FaCreditCard, FaRedo, FaHeadset } from 'react-icons/fa';
import Link from 'next/link';
import styles from './PaymentFailed.module.css';

export default function PaymentFailedPage() {
  const course = {
    title: "Advanced React Development",
    thumbnail: "/react-course.jpg",
  };
  
  const reasons = [
    "Insufficient funds in your account",
    "Incorrect card details entered",
    "Card expired or blocked",
    "Temporary bank authorization issue",
    "Exceeded daily transaction limit"
  ];

  return (
    <div className={styles.failedContainer}>
      <div className={styles.failedCard}>
        <div className={styles.failedHeader}>
          <FaExclamationTriangle className={styles.failedIcon} />
          <h1>Payment Failed</h1>
          <p>We couldn't process your payment for <strong>{course.title}</strong></p>
        </div>
        
        <div className={styles.errorDetails}>
          <div className={styles.errorCode}>
            <span>Error Code:</span>
            <code>PAYMENT_DECLINED_202</code>
          </div>
          
          <div className={styles.reasonsSection}>
            <h3>Possible reasons:</h3>
            <ul>
              {reasons.map((reason, index) => (
                <li key={index}>{reason}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className={styles.actionSection}>
          <div className={styles.actionCard}>
            <div className={styles.actionIcon}>
              <FaRedo />
            </div>
            <div>
              <h3>Try Again</h3>
              <p>Review your payment details and try the payment again</p>
            </div>
            <Link href={`/courses/${encodeURIComponent(course.title)}/payment`} className={styles.actionButton}>
              Retry Payment
            </Link>
          </div>
          
          <div className={styles.actionCard}>
            <div className={styles.actionIcon}>
              <FaCreditCard />
            </div>
            <div>
              <h3>Use Another Method</h3>
              <p>Try a different payment method or card</p>
            </div>
            <Link href={`/courses/${encodeURIComponent(course.title)}/payment`} className={styles.actionButton}>
              Change Payment Method
            </Link>
          </div>
          
          <div className={styles.actionCard}>
            <div className={styles.actionIcon}>
              <FaHeadset />
            </div>
            <div>
              <h3>Get Help</h3>
              <p>Contact our support team for assistance</p>
            </div>
            <Link href="/support" className={styles.actionButton}>
              Contact Support
            </Link>
          </div>
        </div>
        
        <div className={styles.securityNote}>
          <p>
            <strong>Note:</strong> For security reasons, we don't store your payment information. 
            You'll need to re-enter your details if you try again.
          </p>
        </div>
      </div>
    </div>
  );
}