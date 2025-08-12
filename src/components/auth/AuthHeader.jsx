import React from 'react';
import Link from 'next/link';
import styles from './AuthHeader.module.css';

export default function AuthHeader({ title, subtitle }) {
  return (
    <div className={styles.header}>
      <Link href="/" className={styles.logo}>
        <span className={styles.logoMain}>Tech</span>
        <span className={styles.logoAccent}>Academy</span>
      </Link>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}