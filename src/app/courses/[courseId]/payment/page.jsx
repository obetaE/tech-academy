'use client';
import { useState, useEffect } from 'react';
import { FaLock, FaCreditCard, FaUser, FaCalendarAlt, FaShieldAlt, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import styles from './Payment.module.css';

export default function PaymentPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCard, setSaveCard] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [coupon, setCoupon] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const { id } = useParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  
  const course =  {
    title: "Advanced React Development",
    instructor: "Sarah Williams",
    price: 149.99,
    discountPrice: 119.99,
    thumbnail: "/react-course.jpg",
    duration: "8 weeks",
    level: "Intermediate",
    lessons: 42,
    projects: 5
  };
  
  const applyCoupon = () => {
    if (coupon.toLowerCase() === "tech20") {
      setCouponApplied(true);
      alert("Coupon applied successfully! You've saved $30.");
    } else {
      alert("Invalid coupon code. Please try again.");
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      // For demo, we'll randomly decide success/failure
      const isSuccess = Math.random() > 0.3;
      
      if (isSuccess) {
        window.location.href = `/courses/${encodeURIComponent(course.title)}/payment/success`;
      } else {
        window.location.href = `/courses/${encodeURIComponent(course.title)}/payment/failed`;
      }
    }, 2000);
  };
  
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };
  
  const formatExpiry = (value) => {
    const v = value.replace(/[^0-9]/g, '');
    if (v.length > 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return v;
  };

  // useEffect(() => {
  //   // Fetch course data based on ID
  //   const fetchCourse = async () => {
  //     try {
  //       // In a real app, you would fetch from your API
  //       const foundCourse = courses.find(c => c.id === parseInt(id));
        
  //       if (foundCourse) {
  //         setCourse({
  //           ...foundCourse,
  //           price: 149.99,
  //           discountPrice: 119.99,
  //           thumbnail: "/react-course.jpg",
  //           duration: "8 weeks",
  //           lessons: 42,
  //           projects: 5
  //         });
  //       } else {
  //         // Course not found, redirect to courses page
  //         router.push('/courses');
  //       }
  //     } catch (error) {
  //       console.error("Error fetching course:", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchCourse();
  // }, [id]);


  return (
    <div className={styles.paymentContainer}>
      <div className={styles.paymentHeader}>
         <Link href={`/courses/${id}`} className={styles.backLink}>
          <FaArrowLeft /> Back to Course
        </Link>
        <h1>Complete Your Purchase</h1>
        <p>Secure payment powered by Tech Academy</p>
      </div>
      
      <div className={styles.paymentLayout}>
        <div className={styles.courseSummary}>
          <div className={styles.courseHeader}>
            <div className={styles.courseThumb} style={{ backgroundImage: `url(${course.thumbnail})` }} />
            <div className={styles.courseInfo}>
              <h2>{course.title}</h2>
              <p>by {course.instructor}</p>
            </div>
          </div>
          
          <div className={styles.courseDetails}>
            <div className={styles.detailItem}>
              <span>Duration</span>
              <span>{course.duration}</span>
            </div>
            <div className={styles.detailItem}>
              <span>Level</span>
              <span>{course.level}</span>
            </div>
            <div className={styles.detailItem}>
              <span>Lessons</span>
              <span>{course.lessons}</span>
            </div>
            <div className={styles.detailItem}>
              <span>Projects</span>
              <span>{course.projects}</span>
            </div>
          </div>
          
          <div className={styles.pricing}>
            <div className={styles.priceRow}>
              <span>Original Price</span>
              <span className={styles.originalPrice}>${course.price.toFixed(2)}</span>
            </div>
            <div className={styles.priceRow}>
              <span>Discount</span>
              <span className={styles.discount}>-${(course.price - course.discountPrice).toFixed(2)}</span>
            </div>
            
            <div className={styles.couponSection}>
              <input 
                type="text" 
                placeholder="Coupon code" 
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                disabled={couponApplied}
              />
              <button 
                onClick={applyCoupon}
                disabled={couponApplied}
                className={couponApplied ? styles.applied : ''}
              >
                {couponApplied ? 'Applied!' : 'Apply'}
              </button>
            </div>
            
            <div className={styles.priceRow}>
              <span>Tax</span>
              <span>$0.00</span>
            </div>
            
            <div className={styles.totalRow}>
              <span>Total</span>
              <span className={styles.totalPrice}>${course.discountPrice.toFixed(2)}</span>
            </div>
          </div>
          
          <div className={styles.securityBadge}>
            <FaLock className={styles.lockIcon} />
            <div>
              <h3>Secure Payment</h3>
              <p>Your information is encrypted and securely processed</p>
            </div>
          </div>
        </div>
        
        <div className={styles.paymentFormSection}>
          <div className={styles.paymentMethods}>
            <button className={styles.activeMethod}>
              <FaCreditCard /> Credit Card
            </button>
            <button>
              <img src="/paypal-logo.svg" alt="PayPal" width={80} />
            </button>
            <button>
              <img src="/google-pay-logo.svg" alt="Google Pay" width={80} />
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className={styles.paymentForm}>
            <div className={styles.formGroup}>
              <label>Card Number</label>
              <div className={styles.inputWithIcon}>
                <FaCreditCard className={styles.inputIcon} />
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                  maxLength={19}
                  required
                />
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label>Name on Card</label>
              <div className={styles.inputWithIcon}>
                <FaUser className={styles.inputIcon} />
                <input
                  type="text"
                  placeholder="John Doe"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className={styles.formColumns}>
              <div className={styles.formGroup}>
                <label>Expiry Date</label>
                <div className={styles.inputWithIcon}>
                  <FaCalendarAlt className={styles.inputIcon} />
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                    maxLength={5}
                    required
                  />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label>CVV</label>
                <div className={styles.inputWithIcon}>
                  <FaShieldAlt className={styles.inputIcon} />
                  <input
                    type="text"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/[^0-9]/g, ''))}
                    maxLength={3}
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className={styles.saveCardOption}>
              <input
                type="checkbox"
                id="saveCard"
                checked={saveCard}
                onChange={(e) => setSaveCard(e.target.checked)}
              />
              <label htmlFor="saveCard">Save card for future purchases</label>
            </div>
            
            <button 
              type="submit" 
              className={styles.payButton}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <div className={styles.spinner}></div>
              ) : (
                <>
                  <FaLock /> Pay ${course.discountPrice.toFixed(2)}
                </>
              )}
            </button>
            
            <p className={styles.agreement}>
              By completing your purchase, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}