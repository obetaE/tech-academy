import React from 'react';
import ContactHero from "@/components/ContactHero/ContactHero";
import ContactForm from "@/components/ContactForm/ContactForm";
import ContactInfo from "@/components/ContactInfo/ContactInfo";
import Map from "@/components/Map/Map";
import FAQ from "@/components/FAQ/FAQ";
import styles from './contact.module.css';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ContactHero />
        <div className={styles.content}>
          <div className={styles.formSection}>
            <ContactForm />
          </div>
          <div className={styles.infoSection}>
            <ContactInfo />
            <Map />
          </div>
        </div>
        <FAQ />
      </main>
    </div>
  );
}