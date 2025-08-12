import React from 'react';
import AboutHero from "@/components/AboutHero/AboutHero";
import OurStory from "@/components/OurStory/OurStory";
import Team from "@/components/Team/Team";
import Values from "@/components/Values/Values";
import Stats from "@/components/Stats/Stats";
import CTA from "@/components/CTA/CTA";
import styles from "./About.module.css";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <AboutHero />
        <OurStory />
        <Team />
        <Values />
        <Stats />
        <CTA />
      </main>
    </div>
  );
}