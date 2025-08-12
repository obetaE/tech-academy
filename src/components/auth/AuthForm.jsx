"use client";
import React, { useState } from 'react';
import styles from './AuthForm.module.css';

export default function AuthForm({ isLogin }) {
  const [formData, setFormData] = useState({
    ...(!isLogin && { name: '' }),
    email: '',
    password: '',
    ...(!isLogin && { confirmPassword: '' }),
    ...(isLogin && { rememberMe: false })
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
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
    
    if (!isLogin && !formData.name) {
      newErrors.name = 'Name is required';
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
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    
    // In a real app, you would send this data to your backend
    alert(isLogin ? 'Login successful!' : 'Registration successful!');
  };
  
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {!isLogin && (
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
      )}
      
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
          placeholder="Enter your password"
        />
        {errors.password && <p className={styles.errorMessage}>{errors.password}</p>}
      </div>
      
      {!isLogin && (
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
      )}
      
      {isLogin && (
        <div className={styles.remember}>
          <label className={styles.checkboxContainer}>
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className={styles.checkbox}
            />
            <span className={styles.checkmark}></span>
            Remember me
          </label>
        </div>
      )}
      
      <button type="submit" className={styles.submitButton}>
        {isLogin ? 'Sign In' : 'Create Account'}
      </button>
    </form>
  );
}