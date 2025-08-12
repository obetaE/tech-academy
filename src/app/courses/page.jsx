// app/courses/page.jsx
import React from 'react';
import CoursesHero from "@/components/CoursesHero/CoursesHero";
import CourseCategories from "@/components/CourseCategories/CourseCategories";
import CourseList from "@/components/CourseList/CourseList";
import LearningPath from "@/components/LearningPath/LearningPath";
import CTA from "@/components/CTA/CTA";
import styles from './Courses.module.css';

export default function CoursesPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <CoursesHero />
        <CourseCategories />
        <CourseList />
        <LearningPath />
        <CTA />
      </main>
    </div>
  );
}