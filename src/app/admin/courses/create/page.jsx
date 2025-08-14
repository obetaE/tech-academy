"use client";
import React, { useState } from 'react';
import styles from './CreateCourse.module.css';
import { useRouter } from 'next/navigation';

export default function CreateCourseForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    instructor: '',
    duration: '',
    level: 'Beginner',
    price: 0,
    popular: false,
    category: 'Web Development',
    color: '#6B4E71',
    thumbnail: '',
    modules: [{
      title: '',
      topics: [{
        title: '',
        content: [],
        assignments: []
      }]
    }]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleModuleChange = (index, field, value) => {
    const updatedModules = [...formData.modules];
    updatedModules[index][field] = value;
    setFormData(prev => ({ ...prev, modules: updatedModules }));
  };

  const handleTopicChange = (moduleIndex, topicIndex, field, value) => {
    const updatedModules = [...formData.modules];
    updatedModules[moduleIndex].topics[topicIndex][field] = value;
    setFormData(prev => ({ ...prev, modules: updatedModules }));
  };

  const addModule = () => {
    setFormData(prev => ({
      ...prev,
      modules: [
        ...prev.modules,
        { title: '', topics: [{ title: '', content: [], assignments: [] }] }
      ]
    }));
  };

  const removeModule = (index) => {
    if (formData.modules.length <= 1) return;
    const updatedModules = formData.modules.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, modules: updatedModules }));
  };

  const addTopic = (moduleIndex) => {
    const updatedModules = [...formData.modules];
    updatedModules[moduleIndex].topics.push({ title: '', content: [], assignments: [] });
    setFormData(prev => ({ ...prev, modules: updatedModules }));
  };

  const removeTopic = (moduleIndex, topicIndex) => {
    const updatedModules = [...formData.modules];
    if (updatedModules[moduleIndex].topics.length <= 1) return;
    updatedModules[moduleIndex].topics = updatedModules[moduleIndex].topics.filter((_, i) => i !== topicIndex);
    setFormData(prev => ({ ...prev, modules: updatedModules }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/admin/courses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        router.push('/admin/courses');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to create course');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Create New Course</h1>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Course Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        
        <div className={styles.formGroup}>
          <label>Instructor</label>
          <input
            type="text"
            name="instructor"
            value={formData.instructor}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label>Duration (e.g., "32 hours")</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label>Level</label>
          <select
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
          <label>Price ($)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            min="0"
            step="0.01"
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label>Category</label>
          <select
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
          <label>Accent Color (HEX)</label>
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
        
        <div className={styles.formGroup}>
          <label>Thumbnail URL</label>
          <input
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
            Mark as Popular
          </label>
        </div>
        
        <h2 className={styles.sectionTitle}>Course Content</h2>
        
        {formData.modules.map((module, moduleIndex) => (
          <div key={moduleIndex} className={styles.moduleCard}>
            <div className={styles.moduleHeader}>
              <h3>Module {moduleIndex + 1}</h3>
              <button 
                type="button" 
                className={styles.removeButton}
                onClick={() => removeModule(moduleIndex)}
                disabled={formData.modules.length <= 1}
              >
                Remove Module
              </button>
            </div>
            
            <div className={styles.formGroup}>
              <label>Module Title</label>
              <input
                type="text"
                value={module.title}
                onChange={(e) => handleModuleChange(moduleIndex, 'title', e.target.value)}
                required
              />
            </div>
            
            <h4>Topics</h4>
            
            {module.topics.map((topic, topicIndex) => (
              <div key={topicIndex} className={styles.topicCard}>
                <div className={styles.topicHeader}>
                  <h5>Topic {topicIndex + 1}</h5>
                  <button 
                    type="button" 
                    className={styles.removeButton}
                    onClick={() => removeTopic(moduleIndex, topicIndex)}
                    disabled={module.topics.length <= 1}
                  >
                    Remove Topic
                  </button>
                </div>
                
                <div className={styles.formGroup}>
                  <label>Topic Title</label>
                  <input
                    type="text"
                    value={topic.title}
                    onChange={(e) => handleTopicChange(moduleIndex, topicIndex, 'title', e.target.value)}
                    required
                  />
                </div>
                
                <p className={styles.note}>
                  Note: Detailed content and assignments can be added after course creation in the course editor.
                </p>
              </div>
            ))}
            
                <button 
                  type="button" 
                  className={styles.addButton}
                  onClick={() => addTopic(moduleIndex)}
                >
                  + Add Topic
                </button>
              </div>
            ))}
            
            <button 
              type="button" 
              className={styles.addButton}
              onClick={addModule}
            >
              + Add Module
            </button>
            
            {error && <div className={styles.error}>{error}</div>}
            
            <div className={styles.formActions}>
              <button 
                type="button" 
                className={styles.cancelButton}
                onClick={() => router.push('/admin/courses')}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating Course...' : 'Create Course'}
              </button>
            </div>
          </form>
        </div>
      );
    }