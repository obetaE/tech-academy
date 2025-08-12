import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaFacebook
} from 'react-icons/fa';
import styles from './ContactInfo.module.css';

export default function ContactInfo() {
  return (
    <div className={styles.contactInfo}>
      <h2 className={styles.sectionTitle}>Contact Information</h2>
      
      <div className={styles.infoItem}>
        <div className={styles.icon}>
          <FaMapMarkerAlt />
        </div>
        <div className={styles.details}>
          <h3 className={styles.title}>Our Location</h3>
          <p className={styles.text}>123 Tech Street, San Francisco, CA 94103</p>
        </div>
      </div>
      
      <div className={styles.infoItem}>
        <div className={styles.icon}>
          <FaPhone />
        </div>
        <div className={styles.details}>
          <h3 className={styles.title}>Phone Number</h3>
          <p className={styles.text}>+1 (555) 123-4567</p>
        </div>
      </div>
      
      <div className={styles.infoItem}>
        <div className={styles.icon}>
          <FaEnvelope />
        </div>
        <div className={styles.details}>
          <h3 className={styles.title}>Email Address</h3>
          <p className={styles.text}>info@techacademy.io</p>
          <p className={styles.text}>support@techacademy.io</p>
        </div>
      </div>
      
      <div className={styles.infoItem}>
        <div className={styles.icon}>
          <FaClock />
        </div>
        <div className={styles.details}>
          <h3 className={styles.title}>Working Hours</h3>
          <p className={styles.text}>Monday - Friday: 9am - 6pm</p>
          <p className={styles.text}>Saturday: 10am - 4pm</p>
          <p className={styles.text}>Sunday: Closed</p>
        </div>
      </div>
      
      <div className={styles.socialSection}>
        <h3 className={styles.socialTitle}>Connect With Us</h3>
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink} aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" className={styles.socialLink} aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="#" className={styles.socialLink} aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="#" className={styles.socialLink} aria-label="Facebook">
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
}