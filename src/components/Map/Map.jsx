import React from 'react';
import styles from './Map.module.css';

export default function Map() {
  return (
    <div className={styles.mapContainer}>
      <h2 className={styles.sectionTitle}>Find Us</h2>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0253295563795!2d-122.419415584682!3d37.77677997975882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1653426789045!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: '12px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Tech Academy Location"
        ></iframe>
        <p className={styles.mapNote}>
          We're located in the heart of San Francisco's tech district. 
          Feel free to visit us during business hours!
        </p>
      </div>
    </div>
  );
}