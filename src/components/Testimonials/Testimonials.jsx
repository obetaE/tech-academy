"use client"
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { useState } from 'react';
import styles from "./Testimonial.module.css";

const testimonials = [
  {
    id: 1,
    name: "Michael Rodriguez",
    role: "Frontend Developer",
    company: "TechInnovate",
    avatar: "MR",
    content: "Tech Academy completely transformed my career. The React course gave me the practical skills I needed to land my dream job. The instructors are incredibly knowledgeable and the community support is unmatched.",
    rating: 5,
    color: "var(--vintage-plum)"
  },
  {
    id: 2,
    name: "Sophia Chen",
    role: "Data Scientist",
    company: "DataDriven Inc",
    avatar: "SC",
    content: "The Python Data Science course exceeded all my expectations. The projects were challenging but realistic, and the career services helped me negotiate a 40% salary increase at my new position.",
    rating: 5,
    color: "var(--dusk-blue)"
  },
  {
    id: 3,
    name: "James Wilson",
    role: "DevOps Engineer",
    company: "CloudSecure",
    avatar: "JW",
    content: "After completing the DevOps course, I went from a junior sysadmin to a DevOps Engineer in just 6 months. The hands-on labs with real cloud environments made all the difference.",
    rating: 4,
    color: "var(--deep-slate)"
  },
  {
    id: 4,
    name: "Emma Thompson",
    role: "UX Designer",
    company: "CreativeMind",
    avatar: "ET",
    content: "The UI/UX Design Fundamentals course gave me the portfolio and confidence I needed to transition into design. The mentorship program connected me with industry professionals who provided invaluable feedback.",
    rating: 5,
    color: "var(--peach-blush)"
  },
  {
    id: 5,
    name: "David Kim",
    role: "Full-stack Developer",
    company: "WebCraft Studios",
    avatar: "DK",
    content: "I tried several online platforms before Tech Academy, but none matched the depth of their curriculum. The JavaScript Mastery course filled critical gaps in my knowledge that I didn't even know I had.",
    rating: 5,
    color: "var(--ash-lavender)"
  },
  {
    id: 6,
    name: "Olivia Martinez",
    role: "Cybersecurity Analyst",
    company: "SecureNet",
    avatar: "OM",
    content: "The Cybersecurity Essentials course prepared me for industry certifications I never thought I could pass. The hands-on labs with real attack simulations were game-changing for my career.",
    rating: 4,
    color: "var(--vintage-plum)"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">Student Success Stories</h2>
          <p className={styles.subtitle}>
            Hear from our alumni who transformed their careers with Tech Academy
          </p>
        </div>
        
        <div className={styles.carousel}>
          <div 
            className={styles.carouselTrack} 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className={styles.card}
                style={{ '--card-accent': testimonial.color }}
              >
                <FaQuoteLeft className={styles.quoteIcon} />
                <p className={styles.content}>{testimonial.content}</p>
                
                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < testimonial.rating ? styles.starFilled : styles.starEmpty}
                    />
                  ))}
                </div>
                
                <div className={styles.author}>
                  <div className={styles.avatar}>{testimonial.avatar}</div>
                  <div className={styles.authorInfo}>
                    <h3 className={styles.name}>{testimonial.name}</h3>
                    <p className={styles.role}>{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.carouselControls}>
            <button 
              className={styles.controlBtn} 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              &lt;
            </button>
            <button 
              className={styles.controlBtn} 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              &gt;
            </button>
          </div>
        </div>
        
        <div className={styles.carouselDots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}