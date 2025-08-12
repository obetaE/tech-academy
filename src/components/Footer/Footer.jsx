import Link from 'next/link';
import { 
  FaGithub, FaTwitter, FaLinkedin, FaInstagram, 
  FaEnvelope, FaPhone, FaMapMarkerAlt 
} from 'react-icons/fa';
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.footerLogo}>
              <span className={styles.logoMain}>Tech</span>
              <span className={styles.logoAccent}>Academy</span>
            </Link>
            <p className={styles.tagline}>Learn cutting-edge tech skills from industry experts</p>
            <div className={styles.socials}>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </Link>
            </div>
          </div>

          <div className={styles.footerLinks}>
            <h3 className={styles.footerHeading}>Quick Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/courses">All Courses</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.footerLinks}>
            <h3 className={styles.footerHeading}>Courses</h3>
            <ul>
              <li><Link href="/courses/web-development">Web Development</Link></li>
              <li><Link href="/courses/data-science">Data Science</Link></li>
              <li><Link href="/courses/ai-ml">AI & Machine Learning</Link></li>
              <li><Link href="/courses/cybersecurity">Cybersecurity</Link></li>
              <li><Link href="/courses/devops">DevOps</Link></li>
            </ul>
          </div>

          <div className={styles.footerContact}>
            <h3 className={styles.footerHeading}>Contact Us</h3>
            <ul>
              <li>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>123 Tech Street, San Francisco, CA 94103</span>
              </li>
              <li>
                <FaPhone className={styles.contactIcon} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <FaEnvelope className={styles.contactIcon} />
                <span>info@techacademy.io</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Tech Academy. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}