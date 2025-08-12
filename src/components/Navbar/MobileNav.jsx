// components/MobileNav.js
"use client"
import Link from 'next/link';
import styles from './Navbar.module.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.mobileNav}>
      <div className={styles.mobileNavContent}>
        <Link href="/" className={styles.mobileNavLink} onClick={toggleMenu}>Home</Link>
        <Link href="/about" className={styles.mobileNavLink} onClick={toggleMenu}>About Us</Link>
        <Link href="/programs" className={styles.mobileNavLink} onClick={toggleMenu}>Programs</Link>
        <Link href="/impact" className={styles.mobileNavLink} onClick={toggleMenu}>Impact</Link>
        <Link href="/get-involved" className={styles.mobileNavLink} onClick={toggleMenu}>Get Involved</Link>
        <Link href="/news" className={styles.mobileNavLink} onClick={toggleMenu}>News</Link>
        <Link href="/contact" className={styles.mobileNavLink} onClick={toggleMenu}>Contact</Link>
        <Link href="/donate" className={styles.mobileDonateBtn} onClick={toggleMenu}>Donate Now</Link>
      </div>
    </div>
  );
};

export default MobileNav;