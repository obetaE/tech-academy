"use client";
import React, { useState } from 'react';
import styles from './AssignmentBlock.module.css';

export default function AssignmentBlock({ assignment }) {
  const [answer, setAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would submit to a backend
  };
  
  return (
    <div className={styles.assignmentBlock}>
      <div className={styles.header}>
        <h3 className={styles.title}>Assignment: {assignment.title}</h3>
        <div className={styles.status}>Due: 3 days</div>
      </div>
      
      <div className={styles.content}>
        <p className={styles.description}>{assignment.description}</p>
        
        <div className={styles.requirements}>
          <h4 className={styles.subtitle}>Requirements:</h4>
          <ul className={styles.requirementList}>
            {assignment.requirements.map((req, index) => (
              <li key={index} className={styles.requirementItem}>
                <span className={styles.checkbox}></span>
                {req}
              </li>
            ))}
          </ul>
        </div>
        
        {assignment.hint && (
          <div className={styles.hint}>
            <div className={styles.hintIcon}>💡</div>
            <div className={styles.hintText}>{assignment.hint}</div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className={styles.answerForm}>
          <label htmlFor="answer" className={styles.formLabel}>Your Solution:</label>
          <textarea
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className={styles.answerInput}
            placeholder="Write your code or solution here..."
            rows={8}
          />
          
          <div className={styles.formActions}>
            <button type="button" className={styles.saveButton}>Save Draft</button>
            <button type="submit" className={styles.submitButton}>Submit Assignment</button>
          </div>
        </form>
        
        {submitted && (
          <div className={styles.submissionStatus}>
            <div className={styles.successIcon}>✓</div>
            <div className={styles.successMessage}>Assignment submitted successfully!</div>
          </div>
        )}
      </div>
    </div>
  );
}