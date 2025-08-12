"use client";
import React, { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    id: 1,
    question: "How long does it take to hear back after submitting a contact form?",
    answer: "Our team typically responds to all inquiries within 24-48 hours during business days. If you have an urgent matter, please call our support line for immediate assistance."
  },
  {
    id: 2,
    question: "Do you offer in-person consultations?",
    answer: "Yes, we offer in-person consultations at our San Francisco office. Please schedule an appointment in advance to ensure availability of our team members."
  },
  {
    id: 3,
    question: "Can I visit your campus without an appointment?",
    answer: "Our campus is open to visitors during business hours (Monday-Friday, 9am-6pm). While appointments are not required, we recommend scheduling a tour to get the full experience."
  },
  {
    id: 4,
    question: "What payment methods do you accept for courses?",
    answer: "We accept all major credit cards, PayPal, and bank transfers. We also offer flexible payment plans for most of our programs."
  },
  {
    id: 5,
    question: "Do you offer scholarships or financial aid?",
    answer: "Yes, we offer several scholarship opportunities and financial aid programs. Please visit our Financial Aid page or contact our admissions team for more information."
  }
];

export default function FAQ() {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <p className={styles.sectionSubtitle}>
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>
        
        <div className={styles.faqList}>
          {faqs.map(faq => (
            <div 
              key={faq.id} 
              className={`${styles.faqItem} ${activeId === faq.id ? styles.active : ''}`}
            >
              <button 
                className={styles.question} 
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={activeId === faq.id}
              >
                {faq.question}
                <span className={styles.icon}>{activeId === faq.id ? '-' : '+'}</span>
              </button>
              
              <div className={styles.answer} aria-hidden={activeId !== faq.id}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}