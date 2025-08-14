"use client";
import React, { useState } from 'react';
import { 
  FaTachometerAlt, FaUsers, FaBook, FaUserPlus, FaPlusCircle, 
  FaChartBar, FaCog, FaSignOutAlt, FaBell, FaUserCircle, 
  FaUserGraduate
} from 'react-icons/fa';
import styles from './AdminDashboard.module.css';
import { useRouter } from 'next/navigation';
import EditCourseModal from '@/components/EditCourseModal/EditCourseModal';
import EditUserModal from '@/components/EditUserModal/EditUserModal';

export default function AdminDashboard() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New user registration", time: "10 min ago", read: false },
    { id: 2, text: "Course 'JavaScript Mastery' has new enrollment", time: "2 hours ago", read: true },
    { id: 3, text: "Payment received for course purchase", time: "1 day ago", read: true }
  ]);

  const [editingUser, setEditingUser] = useState(null);
  const [editingCourse, setEditingCourse] = useState(null);
  
  const [stats, setStats] = useState({
    users: 1245,
    courses: 42,
    enrollments: 5678,
    revenue: 125640
  });
  
  const recentUsers = [
    { id: 1, name: "Alex Johnson", email: "alex@example.com", joined: "2 hours ago", role: "User" },
    { id: 2, name: "Sarah Williams", email: "sarah@example.com", joined: "5 hours ago", role: "Admin" },
    { id: 3, name: "Michael Chen", email: "michael@example.com", joined: "Yesterday", role: "User" },
    { id: 4, name: "Emma Rodriguez", email: "emma@example.com", joined: "2 days ago", role: "User" }
  ];
  
  const recentCourses = [
    { id: 1, title: "JavaScript Mastery", instructor: "Alex Morgan", enrollments: 24, created: "1 day ago" },
    { id: 2, title: "React & Next.js", instructor: "Sarah Johnson", enrollments: 18, created: "2 days ago" },
    { id: 3, title: "Python Data Science", instructor: "Michael Chen", enrollments: 12, created: "3 days ago" }
  ];
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };
  
  const navigateTo = (path) => {
    router.push(path);
  };
  
  const markNotificationAsRead = (id) => {
    setNotifications(notifications.map(note => 
      note.id === id ? {...note, read: true} : note
    ));
  };
  
  const markAllAsRead = () => {
    setNotifications(notifications.map(note => ({...note, read: true})));
  };
  
  return (
    <div className={styles.adminContainer}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <span>Tech</span>Academy Admin
        </div>
        
        <div className={styles.sidebarMenu}>
          <button 
            className={`${styles.menuItem} ${activeSection === 'dashboard' ? styles.active : ''}`}
            onClick={() => setActiveSection('dashboard')}
          >
            <FaTachometerAlt className={styles.menuIcon} />
            Dashboard
          </button>
          
          <button 
            className={`${styles.menuItem} ${activeSection === 'users' ? styles.active : ''}`}
            onClick={() => setActiveSection('users')}
          >
            <FaUsers className={styles.menuIcon} />
            Users
          </button>
          
          <button 
            className={`${styles.menuItem} ${activeSection === 'courses' ? styles.active : ''}`}
            onClick={() => setActiveSection('courses')}
          >
            <FaBook className={styles.menuIcon} />
            Courses
          </button>
          
          <button 
            className={`${styles.menuItem} ${activeSection === 'analytics' ? styles.active : ''}`}
            onClick={() => setActiveSection('analytics')}
          >
            <FaChartBar className={styles.menuIcon} />
            Analytics
          </button>
          
          <button 
            className={styles.menuItem}
            onClick={() => setActiveSection('settings')}
          >
            <FaCog className={styles.menuIcon} />
            Settings
          </button>
        </div>
        
        <div className={styles.quickActions}>
          <h3 className={styles.sectionTitle}>Quick Actions</h3>
          <button 
            className={styles.actionButton}
            onClick={() => navigateTo('/admin/user/create')}
          >
            <FaUserPlus className={styles.actionIcon} />
            Create User
          </button>
          <button 
            className={styles.actionButton}
            onClick={() => navigateTo('/admin/courses/create')}
          >
            <FaPlusCircle className={styles.actionIcon} />
            Create Course
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Top Bar */}
        <div className={styles.topBar}>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search..." />
          </div>
          
          <div className={styles.adminControls}>
            <div className={styles.notificationIcon}>
              <FaBell />
              {notifications.filter(n => !n.read).length > 0 && (
                <span className={styles.notificationBadge}>
                  {notifications.filter(n => !n.read).length}
                </span>
              )}
              
              <div className={styles.notificationDropdown}>
                <div className={styles.notificationHeader}>
                  <h4>Notifications</h4>
                  <button onClick={markAllAsRead}>Mark all as read</button>
                </div>
                
                {notifications.map(notification => (
                  <div 
                    key={notification.id} 
                    className={`${styles.notificationItem} ${!notification.read ? styles.unread : ''}`}
                    onClick={() => markNotificationAsRead(notification.id)}
                  >
                    <div className={styles.notificationText}>{notification.text}</div>
                    <div className={styles.notificationTime}>{notification.time}</div>
                  </div>
                ))}
                
                {notifications.length === 0 && (
                  <div className={styles.noNotifications}>No notifications</div>
                )}
              </div>
            </div>
            
            <div className={styles.adminProfile}>
              <FaUserCircle className={styles.profileIcon} />
              <span>Admin User</span>
            </div>
            
            <button className={styles.logoutButton}>
              <FaSignOutAlt />
            </button>
          </div>
        </div>
        
        {/* Dashboard Content */}
        {activeSection === 'dashboard' && (
          <div className={styles.dashboardContent}>
            <h1 className={styles.pageTitle}>Dashboard</h1>
            
            {/* Stats Cards */}
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statIcon} style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
                  <FaUsers style={{ color: '#3B82F6' }} />
                </div>
                <div className={styles.statContent}>
                  <div className={styles.statValue}>{stats.users}</div>
                  <div className={styles.statLabel}>Total Users</div>
                </div>
              </div>
              
              <div className={styles.statCard}>
                <div className={styles.statIcon} style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}>
                  <FaBook style={{ color: '#8B5CF6' }} />
                </div>
                <div className={styles.statContent}>
                  <div className={styles.statValue}>{stats.courses}</div>
                  <div className={styles.statLabel}>Courses</div>
                </div>
              </div>
              
              <div className={styles.statCard}>
                <div className={styles.statIcon} style={{ backgroundColor: 'rgba(14, 165, 233, 0.1)' }}>
                  <FaUserGraduate style={{ color: '#0EA5E9' }} />
                </div>
                <div className={styles.statContent}>
                  <div className={styles.statValue}>{stats.enrollments}</div>
                  <div className={styles.statLabel}>Enrollments</div>
                </div>
              </div>
              
              <div className={styles.statCard}>
                <div className={styles.statIcon} style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
                  <FaChartBar style={{ color: '#10B981' }} />
                </div>
                <div className={styles.statContent}>
                  <div className={styles.statValue}>{formatCurrency(stats.revenue)}</div>
                  <div className={styles.statLabel}>Revenue</div>
                </div>
              </div>
            </div>
            
            {/* Recent Activity */}
            <div className={styles.contentGrid}>
              <div className={styles.recentUsers}>
                <div className={styles.sectionHeader}>
                  <h2>Recent Users</h2>
                  <button onClick={() => setActiveSection('users')}>View All</button>
                </div>
                
                <table className={styles.usersTable}>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Joined</th>
                      <th>Role</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map(user => (
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.joined}</td>
                        <td>
                          <span className={`${styles.roleBadge} ${user.role === 'Admin' ? styles.admin : ''}`}>
                            {user.role}
                          </span>
                        </td>
                        <td>
                          <button 
                            className={styles.actionBtn}
                              onClick={() => setEditingUser(user)}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className={styles.recentCourses}>
                <div className={styles.sectionHeader}>
                  <h2>Recent Courses</h2>
                  <button  onClick={() => setActiveSection('courses')}>View All</button>
                </div>
                
                <table className={styles.coursesTable}>
                  <thead>
                    <tr>
                      <th>Course</th>
                      <th>Instructor</th>
                      <th>Enrollments</th>
                      <th>Created</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentCourses.map(course => (
                      <tr key={course.id}>
                        <td>{course.title}</td>
                        <td>{course.instructor}</td>
                        <td>{course.enrollments}</td>
                        <td>{course.created}</td>
                        <td>
                          <button 
                            className={styles.actionBtn}
                            onClick={() => setEditingCourse(course)}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {/* Users Section */}
        {activeSection === 'users' && (
          <div className={styles.usersContent}>
            <div className={styles.sectionHeader}>
              <h1 className={styles.pageTitle}>User Management</h1>
              <button 
                className={styles.createButton}
                onClick={() => navigateTo('/admin/users/create')}
              >
                <FaUserPlus /> Create New User
              </button>
            </div>
            
            <div className={styles.searchFilters}>
              <input type="text" placeholder="Search users..." className={styles.searchInput} />
              
              <div className={styles.filterGroup}>
                <label>Role:</label>
                <select className={styles.filterSelect}>
                  <option value="all">All Roles</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
              
              <div className={styles.filterGroup}>
                <label>Status:</label>
                <select className={styles.filterSelect}>
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            
            <table className={styles.fullTable}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Joined</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`${styles.roleBadge} ${user.role === 'Admin' ? styles.admin : ''}`}>
                        {user.role}
                      </span>
                    </td>
                    <td>
                      <span className={styles.statusBadge}>Active</span>
                    </td>
                    <td>{user.joined}</td>
                    <td>
                      <button 
                        className={styles.actionBtn}
                         onClick={() => setEditingUser(user)}
                      >
                        Edit
                      </button>
                      <button className={`${styles.actionBtn} ${styles.deleteBtn}`}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <div className={styles.pagination}>
              <button className={styles.pageButton}>Previous</button>
              <button className={`${styles.pageButton} ${styles.active}`}>1</button>
              <button className={styles.pageButton}>2</button>
              <button className={styles.pageButton}>3</button>
              <button className={styles.pageButton}>Next</button>
            </div>
          </div>
        )}
        
        {/* Courses Section */}
        {activeSection === 'courses' && (
          <div className={styles.coursesContent}>
            <div className={styles.sectionHeader}>
              <h1 className={styles.pageTitle}>Course Management</h1>
              <button 
                className={styles.createButton}
                onClick={() => navigateTo('/admin/courses/create')}
              >
                <FaPlusCircle /> Create New Course
              </button>
            </div>
            
            <div className={styles.searchFilters}>
              <input type="text" placeholder="Search courses..." className={styles.searchInput} />
              
              <div className={styles.filterGroup}>
                <label>Category:</label>
                <select className={styles.filterSelect}>
                  <option value="all">All Categories</option>
                  <option value="web">Web Development</option>
                  <option value="data">Data Science</option>
                  <option value="design">UI/UX Design</option>
                  <option value="devops">DevOps & Cloud</option>
                  <option value="security">Cybersecurity</option>
                  <option value="ai">AI & Machine Learning</option>
                </select>
              </div>
              
              <div className={styles.filterGroup}>
                <label>Status:</label>
                <select className={styles.filterSelect}>
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="draft">Draft</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>
            
            <table className={styles.fullTable}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Course</th>
                  <th>Instructor</th>
                  <th>Category</th>
                  <th>Enrollments</th>
                  <th>Status</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentCourses.map(course => (
                  <tr key={course.id}>
                    <td>{course.id}</td>
                    <td>{course.title}</td>
                    <td>{course.instructor}</td>
                    <td>Web Development</td>
                    <td>{course.enrollments}</td>
                    <td>
                      <span className={styles.statusBadge}>Active</span>
                    </td>
                    <td>$89.99</td>
                    <td>
                      <button 
                        className={styles.actionBtn}
                        onClick={() => setEditingCourse(course)}
                      >
                        Edit
                      </button>
                      <button className={`${styles.actionBtn} ${styles.deleteBtn}`}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <div className={styles.pagination}>
              <button className={styles.pageButton}>Previous</button>
              <button className={`${styles.pageButton} ${styles.active}`}>1</button>
              <button className={styles.pageButton}>2</button>
              <button className={styles.pageButton}>3</button>
              <button className={styles.pageButton}>Next</button>
            </div>
          </div>
        )}


         {editingUser && (
        <EditUserModal 
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onSave={(updatedUser) => {
            console.log("Updated user:", updatedUser);
            // Add your save logic here
            setEditingUser(null);
          }}
        />
      )}
      
      {editingCourse && (
        <EditCourseModal 
          course={editingCourse}
          onClose={() => setEditingCourse(null)}
          onSave={(updatedCourse) => {
            console.log("Updated course:", updatedCourse);
            // Add your save logic here
            setEditingCourse(null);
          }}
        />
      )}
      </div>
    </div>
  );
}