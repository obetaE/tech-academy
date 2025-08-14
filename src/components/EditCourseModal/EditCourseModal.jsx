"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import { FaTimes, FaBook, FaStar, FaClock, FaLayerGroup, FaChartLine, FaMoneyBillWave } from 'react-icons/fa';
import styles from './AdminModals.module.css';

export default function EditCourseModal({ course, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    instructor: '',
    duration: '',
    modules: 0,
    level: 'Beginner',
    price: 0,
    popular: false,
    category: 'Web Development',
    color: '#6B4E71',
    thumbnail: ''
  });

  useEffect(() => {
    if (course) {
      setFormData({
        title: course.title || '',
        description: course.description || '',
        instructor: course.instructor || '',
        duration: course.duration || '',
        modules: course.modules?.length || 0,
        level: course.level || 'Beginner',
        price: course.price || 0,
        popular: course.popular || false,
        category: course.category || 'Web Development',
        color: course.color || '#6B4E71',
        thumbnail: course.thumbnail || ''
      });
    }
  }, [course]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };


const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch(`/api/admin/courses/${course._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      onSave(formData);
      onClose();
    } else {
      // Handle error
    }
  } catch (error) {
    // Handle error
  }
};

  if (!course) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>Edit Course</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        
        <div className={styles.courseInfo}>
          <div 
            className={styles.courseThumbnail} 
            style={{ backgroundColor: formData.color }}
          >
            {course.title.charAt(0)}
          </div>
          <div>
            <h3>{course.title}</h3>
            <p>ID: {course._id}</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="title">
              <FaBook className={styles.inputIcon} />
              Course Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="instructor">Instructor</label>
            <input
              id="instructor"
              type="text"
              name="instructor"
              value={formData.instructor}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="duration">
                <FaClock className={styles.inputIcon} />
                Duration
              </label>
              <input
                id="duration"
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="modules">
                <FaLayerGroup className={styles.inputIcon} />
                Modules
              </label>
              <input
                id="modules"
                type="number"
                name="modules"
                value={formData.modules}
                onChange={handleChange}
                min="1"
                required
              />
            </div>
          </div>
          
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="level">Level</label>
              <select
                id="level"
                name="level"
                value={formData.level}
                onChange={handleChange}
                required
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="price">
                <FaMoneyBillWave className={styles.inputIcon} />
                Price ($)
              </label>
              <input
                id="price"
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                min="0"
                step="0.01"
                required
              />
            </div>
          </div>
          
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="Web Development">Web Development</option>
                <option value="Data Science">Data Science</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="DevOps & Cloud">DevOps & Cloud</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="AI & Machine Learning">AI & Machine Learning</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="color">Accent Color</label>
              <div className={styles.colorInput}>
                <input
                  type="color"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                />
                <span>{formData.color}</span>
              </div>
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="thumbnail">Thumbnail URL</label>
            <input
              id="thumbnail"
              type="text"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formGroupCheckbox}>
            <label>
              <input
                type="checkbox"
                name="popular"
                checked={formData.popular}
                onChange={handleChange}
              />
              <FaStar className={styles.checkboxIcon} />
              Mark as Popular Course
            </label>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <FaChartLine />
              <span>Enrollments: {course.students || 0}</span>
            </div>
            <div className={styles.statItem}>
              <FaStar />
              <span>Rating: {course.rating || 0}/5</span>
            </div>
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
              Update Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}