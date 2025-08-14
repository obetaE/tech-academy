"use client"
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from "./Navbar.module.css";
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  console.log("Session data:", session, "Status:", status);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Always show these public links
  const publicLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' },
  ];

  // Conditionally show auth links based on session
  const authLinks = session
    ? [
        { name: 'Profile', path: '/profile' },
        { 
          name: 'Logout', 
          action: () => {
            signOut();
            setIsOpen(false);
          }
        }
      ]
    : [
        { name: 'Login', path: '/login' },
        { name: 'Register', path: '/register' }
      ];

  // Combine all links
  const allLinks = [...publicLinks, ...authLinks];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMain}>Tech</span>
          <span className={styles.logoAccent}>Academy</span>
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          {publicLinks.map((link, index) => (
            <Link 
              key={link.path}
              href={link.path}
              className={`${styles.navItem} ${pathname === link.path ? styles.active : ''}`}
            >
              {link.name}
            </Link>
          ))}
          
          {authLinks.map((link) => (
            link.path ? (
              <Link
                key={link.path}
                href={link.path}
                className={`${styles.authItem} ${pathname === link.path ? styles.active : ''}`}
              >
                {link.name}
              </Link>
            ) : (
              <button
                key="logout"
                onClick={link.action}
                className={styles.authItem}
              >
                {link.name}
              </button>
            )
          ))}
        </div>

        {/* Mobile Navigation */}
        <button className={styles.menuToggle} onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {isOpen && (
          <div className={styles.mobileMenu}>
            {allLinks.map((link) => (
              link.path ? (
                <Link 
                  key={link.path}
                  href={link.path}
                  className={styles.mobileItem}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key="logout-mobile"
                  onClick={link.action}
                  className={styles.mobileItem}
                >
                  {link.name}
                </button>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}