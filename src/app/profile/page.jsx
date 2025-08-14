'use client';
import { useState, useEffect } from 'react';
import { FaUser, FaEdit, FaBook, FaChartBar, FaCog, FaLock, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Profile.module.css';

export default function ProfilePage() {
  const [userData, setUserData] = useState({
    name: "Alex Johnson",
    email: "alex@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Passionate about learning new technologies and building innovative solutions. Currently focused on mastering React and Node.js."
  });
  
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "Sarah Williams",
      progress: 75,
      thumbnail: "/react-course.jpg",
      lastAccessed: "2 days ago"
    },
    {
      id: 2,
      title: "Node.js Backend Mastery",
      instructor: "Michael Chen",
      progress: 40,
      thumbnail: "/node-course.jpg",
      lastAccessed: "1 week ago"
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      instructor: "Emma Rodriguez",
      progress: 20,
      thumbnail: "/design-course.jpg",
      lastAccessed: "3 weeks ago"
    }
  ]);
  
  const [activeTab, setActiveTab] = useState('courses');
  const [editMode, setEditMode] = useState(false);
  const [tempUserData, setTempUserData] = useState({...userData});
  
  // Simulate loading purchased courses
  const [hasCourses, setHasCourses] = useState(true);
  
  useEffect(() => {
    // In a real app, this would fetch data from an API
    // For demo purposes, we'll simulate a loading state
    const timer = setTimeout(() => {
      // setHasCourses(false); // Uncomment to simulate no courses state
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleSaveProfile = () => {
    setUserData({...tempUserData});
    setEditMode(false);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempUserData(prev => ({...prev, [name]: value}));
  };
  
  return (
    <div className={styles.profilePage}>
      <div className={styles.profileHeader}>
        <div className={styles.profileHero}>
          <div className={styles.avatarContainer}>
            <div className={styles.avatar}>
              <FaUser className={styles.avatarIcon} />
            </div>
            <button 
              className={styles.editAvatarBtn}
              onClick={() => alert("Upload new photo")}
            >
              <FaEdit />
            </button>
          </div>
          <div className={styles.userInfo}>
            <h1 className={styles.userName}>{userData.name}</h1>
            <p className={styles.userEmail}>{userData.email}</p>
            <div className={styles.userStats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>{courses.length}</span>
                <span className={styles.statLabel}>Courses</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>12</span>
                <span className={styles.statLabel}>Badges</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>85%</span>
                <span className={styles.statLabel}>Avg. Progress</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.tabs}>
          <button 
            className={`${styles.tab} ${activeTab === 'courses' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('courses')}
          >
            <FaBook /> My Courses
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'stats' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('stats')}
          >
            <FaChartBar /> Learning Stats
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'settings' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <FaCog /> Account Settings
          </button>
        </div>
      </div>
      
      <div className={styles.profileContent}>
        {activeTab === 'courses' && (
          <div className={styles.coursesSection}>
            <h2 className={styles.sectionTitle}>My Learning Journey</h2>
            
            {hasCourses ? (
              <div className={styles.coursesGrid}>
                {courses.map(course => (
                  <div key={course.id} className={styles.courseCard}>
                    <div className={styles.courseThumbnail} style={{ backgroundImage: `url(${course.thumbnail})` }}>
                      <div className={styles.progressBar}>
                        <div 
                          className={styles.progressFill} 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                        <span className={styles.progressText}>{course.progress}% Complete</span>
                      </div>
                    </div>
                    <div className={styles.courseInfo}>
                      <h3 className={styles.courseTitle}>{course.title}</h3>
                      <p className={styles.courseInstructor}>Instructor: {course.instructor}</p>
                      <div className={styles.courseMeta}>
                        <span className={styles.lastAccessed}>
                          Last accessed: {course.lastAccessed}
                        </span>
                        <button className={styles.continueBtn}>Continue Learning</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.noCourses}>
                <div className={styles.noCoursesIllustration}>
                  <div className={styles.bookIcon}>
                    <FaBook />
                  </div>
                  <div className={styles.plusSign}>+</div>
                </div>
                <h3>You haven't enrolled in any courses yet</h3>
                <p>Explore our catalog to start your learning journey!</p>
                <button 
                  className={styles.browseBtn}
                  onClick={() => window.location.href = '/courses'}
                >
                  Browse Courses
                </button>
              </div>
            )}
          </div>
        )}
        
        {activeTab === 'settings' && (
          <div className={styles.settingsSection}>
            <h2 className={styles.sectionTitle}>Profile Information</h2>
            
            <div className={styles.settingsCard}>
              {!editMode ? (
                <div className={styles.profileInfo}>
                  <div className={styles.infoItem}>
                    <FaLock className={styles.infoIcon} />
                    <div>
                      <h4>Full Name</h4>
                      <p>{userData.name}</p>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <FaEnvelope className={styles.infoIcon} />
                    <div>
                      <h4>Email Address</h4>
                      <p>{userData.email}</p>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <FaPhone className={styles.infoIcon} />
                    <div>
                      <h4>Phone Number</h4>
                      <p>{userData.phone}</p>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <FaMapMarkerAlt className={styles.infoIcon} />
                    <div>
                      <h4>Location</h4>
                      <p>{userData.location}</p>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <h4>Bio</h4>
                    <p className={styles.bioText}>{userData.bio}</p>
                  </div>
                  
                  <button 
                    className={styles.editBtn}
                    onClick={() => {
                      setTempUserData({...userData});
                      setEditMode(true);
                    }}
                  >
                    <FaEdit /> Edit Profile
                  </button>
                </div>
              ) : (
                <div className={styles.editForm}>
                  <div className={styles.formGroup}>
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={tempUserData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={tempUserData.email}
                      onChange={handleInputChange}
                      disabled
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={tempUserData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Location</label>
                    <input
                      type="text"
                      name="location"
                      value={tempUserData.location}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Bio</label>
                    <textarea
                      name="bio"
                      value={tempUserData.bio}
                      onChange={handleInputChange}
                      rows="4"
                    ></textarea>
                  </div>
                  
                  <div className={styles.formActions}>
                    <button 
                      className={styles.cancelBtn}
                      onClick={() => setEditMode(false)}
                    >
                      Cancel
                    </button>
                    <button 
                      className={styles.saveBtn}
                      onClick={handleSaveProfile}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <div className={styles.accountSettings}>
              <h3 className={styles.subSectionTitle}>Account Security</h3>
              <div className={styles.securityCard}>
                <div className={styles.securityItem}>
                  <div>
                    <h4>Password</h4>
                    <p>Last changed 3 months ago</p>
                  </div>
                  <button className={styles.changeBtn}>Change Password</button>
                </div>
                
                <div className={styles.securityItem}>
                  <div>
                    <h4>Two-Factor Authentication</h4>
                    <p>Add an extra layer of security</p>
                  </div>
                  <label className={styles.toggleSwitch}>
                    <input type="checkbox" />
                    <span className={styles.slider}></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'stats' && (
          <div className={styles.statsSection}>
            <h2 className={styles.sectionTitle}>Learning Statistics</h2>
            
            <div className={styles.statsOverview}>
              <div className={styles.statsCard}>
                <h3>Learning Time</h3>
                <div className={styles.statValue}>42 hours</div>
                <p>This month</p>
              </div>
              <div className={styles.statsCard}>
                <h3>Completion Rate</h3>
                <div className={styles.statValue}>78%</div>
                <p>Across all courses</p>
              </div>
              <div className={styles.statsCard}>
                <h3>Streak</h3>
                <div className={styles.statValue}>12 days</div>
                <p>Current learning streak</p>
              </div>
            </div>
            
            <div className={styles.chartContainer}>
              <div className={styles.chartHeader}>
                <h3>Weekly Learning Activity</h3>
                <div className={styles.timeFilters}>
                  <button className={styles.activeFilter}>Week</button>
                  <button>Month</button>
                  <button>Year</button>
                </div>
              </div>
              <div className={styles.chart}>
                <div className={styles.chartGrid}>
                  <div className={styles.gridLine}></div>
                  <div className={styles.gridLine}></div>
                  <div className={styles.gridLine}></div>
                  <div className={styles.gridLine}></div>
                  <div className={styles.gridLine}></div>
                </div>
                <div className={styles.bars}>
                  <div className={styles.bar} style={{ height: '40%' }}><span>Mon</span></div>
                  <div className={styles.bar} style={{ height: '70%' }}><span>Tue</span></div>
                  <div className={styles.bar} style={{ height: '90%' }}><span>Wed</span></div>
                  <div className={styles.bar} style={{ height: '60%' }}><span>Thu</span></div>
                  <div className={styles.bar} style={{ height: '50%' }}><span>Fri</span></div>
                  <div className={styles.bar} style={{ height: '30%' }}><span>Sat</span></div>
                  <div className={styles.bar} style={{ height: '80%' }}><span>Sun</span></div>
                </div>
              </div>
            </div>
            
            <div className={styles.achievements}>
              <h3 className={styles.subSectionTitle}>Recent Achievements</h3>
              <div className={styles.badgesGrid}>
                <div className={styles.badge}>
                  <div className={styles.badgeIcon}>🏆</div>
                  <div className={styles.badgeInfo}>
                    <h4>Perfect Week</h4>
                    <p>Learned 7 days in a row</p>
                  </div>
                </div>
                <div className={styles.badge}>
                  <div className={styles.badgeIcon}>🚀</div>
                  <div className={styles.badgeInfo}>
                    <h4>Quick Starter</h4>
                    <p>Completed first lesson within 24h</p>
                  </div>
                </div>
                <div className={styles.badge}>
                  <div className={styles.badgeIcon}>💡</div>
                  <div className={styles.badgeInfo}>
                    <h4>Curious Mind</h4>
                    <p>Asked 10 questions in forums</p>
                  </div>
                </div>
                <div className={styles.badge}>
                  <div className={styles.badgeIcon}>🎯</div>
                  <div className={styles.badgeInfo}>
                    <h4>Precision Master</h4>
                    <p>Aced 5 quizzes in a row</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}