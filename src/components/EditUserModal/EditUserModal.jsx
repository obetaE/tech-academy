"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLock, FaUserShield } from 'react-icons/fa';
import styles from './AdminModals.module.css';

export default function EditUserModal({ user, onClose, onSave }) {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    location: '',
    bio: '',
    password: '',
    isAdmin: false
  });

  useEffect(() => {
    if (user) {
      setFormData({
        fullname: user.fullname || '',
        email: user.email || '',
        phone: user.phone || '',
        location: user.location || '',
        bio: user.bio || '',
        password: '',
        isAdmin: user.isAdmin || false
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!user) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>Edit User</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        
        <div className={styles.userInfo}>
          <div className={styles.avatar}>
            <FaUser />
          </div>
          <div>
            <h3>{user.fullname}</h3>
            <p>ID: {user._id}</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="fullname">
              <FaUser className={styles.inputIcon} />
              Full Name
            </label>
            <input
              id="fullname"
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email">
              <FaEnvelope className={styles.inputIcon} />
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="phone">
              <FaPhone className={styles.inputIcon} />
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="location">
              <FaMapMarkerAlt className={styles.inputIcon} />
              Location
            </label>
            <input
              id="location"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password">
              <FaLock className={styles.inputIcon} />
              New Password (leave blank to keep current)
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
            />
          </div>
          
          <div className={styles.formGroupCheckbox}>
            <label>
              <input
                type="checkbox"
                name="isAdmin"
                checked={formData.isAdmin}
                onChange={handleChange}
              />
              <FaUserShield className={styles.checkboxIcon} />
              Grant Admin Privileges
            </label>
          </div>
          
          <div className={styles.modalActions}>
            <button 
              type="button" 
              className={styles.cancelButton}
              onClick={onClose}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className={styles.saveButton}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}