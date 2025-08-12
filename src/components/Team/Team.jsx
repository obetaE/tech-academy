import React from 'react';
import styles from '@/app/about/About.module.css';

const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "Former lead engineer at TechUniverse with 15+ years of experience in software development and education.",
    color: "var(--vintage-plum)"
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Chief Learning Officer",
    bio: "Learning design expert with a PhD in Educational Technology. Passionate about making tech education accessible.",
    color: "var(--dusk-blue)"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Head of Curriculum",
    bio: "Data science specialist with industry experience at DataDriven Inc. Creates project-based learning experiences.",
    color: "var(--peach-blush)"
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "Director of Community",
    bio: "Builds and nurtures our global learner community. Focused on creating inclusive spaces for all tech enthusiasts.",
    color: "var(--ash-lavender)"
  }
];

export default function Team() {
  return (
    <section className={styles.team}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Our Leadership</h2>
          <p className={styles.sectionSubtitle}>
            Passionate educators and industry experts driving our mission
          </p>
        </div>
        
        <div className={styles.grid}>
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className={styles.card}
              style={{ '--card-accent': member.color }}
            >
              <div className={styles.avatar} style={{ backgroundColor: member.color }}>
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.bio}>{member.bio}</p>
              <div className={styles.socials}>
                <a href="#" className={styles.socialLink}>LinkedIn</a>
                <a href="#" className={styles.socialLink}>Twitter</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}