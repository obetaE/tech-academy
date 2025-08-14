'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaEnvelope, FaCheck, FaArrowLeft } from 'react-icons/fa';
import styles from './forgot-password.module.css';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const validateEmail = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateEmail();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call to send reset link
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };
  
  return (
    <div className={styles.forgotPasswordPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoMain}>Tech</span>
            <span className={styles.logoAccent}>Academy</span>
          </Link>
          
          <Link href="/login" className={styles.backButton}>
            <FaArrowLeft /> Back to Login
          </Link>
          
          <h1 className={styles.title}>Reset Your Password</h1>
          <p className={styles.subtitle}>
            {isSuccess 
              ? "We've sent instructions to your email" 
              : "Enter your email to reset your password"}
          </p>
        </div>
        
        {!isSuccess ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <div className={styles.inputContainer}>
                <FaEnvelope className={styles.inputIcon} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({...errors, email: ''});
                  }}
                  className={`${styles.input} ${errors.email ? styles.error : ''}`}
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                />
              </div>
              {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
            </div>
            
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className={styles.spinner}></div>
              ) : (
                'Send Reset Link'
              )}
            </button>
          </form>
        ) : (
          <div className={styles.successCard}>
            <div className={styles.successIcon}>
              <FaCheck />
            </div>
            <h3 className={styles.successTitle}>Check Your Email</h3>
            <p className={styles.successMessage}>
              We've sent a password reset link to <strong>{email}</strong>. 
              Please check your inbox and follow the instructions.
            </p>
            
            <div className={styles.helpText}>
              <p>Didn't receive the email?</p>
              <ul>
                <li>Check your spam or junk folder</li>
                <li>Make sure you entered the correct email address</li>
                <li>Wait a few minutes - it might take some time to arrive</li>
              </ul>
            </div>
            
            <button 
              className={styles.resendButton}
              onClick={() => {
                setIsSuccess(false);
                setIsSubmitting(false);
              }}
            >
              Resend Email
            </button>
          </div>
        )}
        
        <div className={styles.support}>
          <p>Need help? <Link href="/contact" className={styles.link}>Contact support</Link></p>
        </div>
      </div>
      
      <div className={styles.illustration}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.card}>
          <h3>Secure Account Access</h3>
          <p>Protecting your learning journey</p>
        </div>
      </div>
    </div>
  );
}