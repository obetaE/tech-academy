'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaLock, FaUser, FaGoogle, FaGithub, FaFacebookF, FaMicrosoft } from 'react-icons/fa';
import styles from './register.module.css';
import SocialAuth from '@/components/auth/SocialAuth';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name) {
      newErrors.name = 'Full name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    return newErrors;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Register Process Initiated");
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsLoading(true);

   
      try {
      const normalizedEmail = formData.email.toLowerCase().trim();
      const name = formData.name.trim();
      const password = formData.password;

      // Send registration request
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: normalizedEmail,
          password: password,
          isAdmin: false,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

    } catch (error) {
      console.error("Registration error:", error);
      setErrors(error.message || "An error occurred during registration");
    } finally {
      setIsSubmitting(false);
    }
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(data.message || 'Successfully registered! Please log in.');
      router.push('/login');
    }, 1500);
  };
  
  return (
    <div className={styles.registerPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoMain}>Tech</span>
            <span className={styles.logoAccent}>Academy</span>
          </Link>
          <h1 className={styles.title}>Create Your Account</h1>
          <p className={styles.subtitle}>Join our community of learners and tech enthusiasts</p>
        </div>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`${styles.input} ${errors.name ? styles.error : ''}`}
              placeholder="Enter your full name"
            />
            {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`${styles.input} ${errors.email ? styles.error : ''}`}
              placeholder="Enter your email"
            />
            {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`${styles.input} ${errors.password ? styles.error : ''}`}
              placeholder="Create a password"
            />
            {errors.password && <p className={styles.errorMessage}>{errors.password}</p>}
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`${styles.input} ${errors.confirmPassword ? styles.error : ''}`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <p className={styles.errorMessage}>{errors.confirmPassword}</p>}
          </div>
          
          <div className={styles.terms}>
            <p className={styles.text}>
              By signing up, you agree to our <Link href="/terms" className={styles.link}>Terms of Service</Link> and <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
            </p>
          </div>
          
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className={styles.spinner}></div>
            ) : (
              <>
                <FaLock className={styles.lockIcon} /> Create Account
              </>
            )}
          </button>
          
          {success && <p className={styles.successMessage}>{success}</p>}
          
          <div className={styles.links}>
            <p className={styles.text}>Already have an account? <Link href="/login" className={styles.link}>Sign in</Link></p>
          </div>
        </form>
        
        <div className={styles.divider}>
          <span>Or sign up with</span>
        </div>
        
        <SocialAuth/>
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
  );
}