import React from 'react';
import { FaGoogle, FaGithub, FaFacebookF, FaMicrosoft } from 'react-icons/fa';
import styles from './SocialAuth.module.css';

export default function SocialAuth() {
  return (
    <div className={styles.socialAuth}>
      <div className={styles.buttons}>
        <button className={styles.socialButton} style={{ '--button-color': '#4285F4' }}>
          <FaGoogle className={styles.icon} />
          <span>Google</span>
        </button>
        
        <button className={styles.socialButton} style={{ '--button-color': '#333' }}>
          <FaGithub className={styles.icon} />
          <span>GitHub</span>
        </button>
        
        <button className={styles.socialButton} style={{ '--button-color': '#4267B2' }}>
          <FaFacebookF className={styles.icon} />
          <span>Facebook</span>
        </button>
        
        <button className={styles.socialButton} style={{ '--button-color': '#0078D7' }}>
          <FaMicrosoft className={styles.icon} />
          <span>Microsoft</span>
        </button>
      </div>
    </div>
  );
}