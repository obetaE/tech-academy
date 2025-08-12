import React from 'react';
import Hero from '@/components/Hero/Hero';
import Courses from '@/components/Courses/Courses';
import Features from '@/components/Features/Features';
import Testimonials from '@/components/Testimonials/Testimonials';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
    <main className={styles.main}>
        <Hero />
         <Courses />
        <Features />
         <Testimonials/>
      </main>
    </div>
  );
}