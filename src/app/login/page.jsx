import React from 'react';
import AuthHeader from '@/components/auth/AuthHeader';
import AuthForm from '@/components/auth/AuthForm';
import SocialAuth from '@/components/auth/SocialAuth';
import styles from './login.module.css';    

export default function LoginPage() {
  return (
    <div className={styles.authPage}>
      <div className={styles.container}>
        <div className={styles.content}>
          <AuthHeader 
            title="Welcome Back!" 
            subtitle="Sign in to continue your learning journey"
          />
          
          <div className={styles.formSection}>
            <AuthForm isLogin={true} />
            <div className={styles.links}>
              <a href="/forgot-password" className={styles.link}>Forgot password?</a>
              <p className={styles.text}>Don't have an account? <a href="/register" className={styles.link}>Sign up</a></p>
            </div>
          </div>
          
          <div className={styles.divider}>
            <span>Or continue with</span>
          </div>
          
          <SocialAuth />
        </div>
        
        <div className={styles.illustration}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.card}>
            <h3>Unlock Your Potential</h3>
            <p>Continue your journey to becoming a tech expert</p>
          </div>
        </div>
      </div>
    </div>
  );
}