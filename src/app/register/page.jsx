import React from 'react';
import AuthHeader from '@/components/auth/AuthHeader';
import AuthForm from '@/components/auth/AuthForm';
import SocialAuth from '@/components/auth/SocialAuth';
import styles from './register.module.css';

export default function RegisterPage() {
  return (
    <div className={styles.authPage}>
      <div className={styles.container}>
        <div className={styles.content}>
          <AuthHeader 
            title="Create Your Account" 
            subtitle="Join our community of learners and tech enthusiasts"
          />
          
          <div className={styles.formSection}>
            <AuthForm isLogin={false} />
            <div className={styles.links}>
              <p className={styles.text}>By signing up, you agree to our <a href="/terms" className={styles.link}>Terms of Service</a> and <a href="/privacy" className={styles.link}>Privacy Policy</a></p>
              <p className={styles.text}>Already have an account? <a href="/login" className={styles.link}>Sign in</a></p>
            </div>
          </div>
          
          <div className={styles.divider}>
            <span>Or sign up with</span>
          </div>
          
          <SocialAuth />
        </div>
        
        <div className={styles.illustration}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.card}>
            <h3>Start Your Journey</h3>
            <p>Join thousands of students transforming their careers</p>
          </div>
        </div>
      </div>
    </div>
  );
}