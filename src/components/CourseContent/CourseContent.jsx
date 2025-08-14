import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import styles from './CourseContent.module.css';

export default function CourseContent({ title, content }) {
  const renderContent = (item, index) => {
    switch (item.type) {
      case 'text':
        return <p key={index} className={styles.text}>{item.content}</p>;
        
      case 'highlight':
        return (
          <div key={index} className={styles.highlight}>
            <div className={styles.highlightIcon}>📌</div>
            <div className={styles.highlightText}>{item.content}</div>
          </div>
        );
        
      case 'subheader':
        return <h3 key={index} className={styles.subheader}>{item.content}</h3>;
        
      case 'list':
        return (
          <ul key={index} className={styles.list}>
            {item.items.map((listItem, idx) => (
              <li key={idx} className={styles.listItem}>
                <span className={styles.bullet}>•</span>
                {listItem}
              </li>
            ))}
          </ul>
        );
        
      case 'code':
        return (
          <div key={index} className={styles.codeBlock}>
            <SyntaxHighlighter 
              language={item.language} 
              style={docco}
              customStyle={{ borderRadius: '8px', padding: '1.5rem', fontSize: '1rem' }}
            >
              {item.content}
            </SyntaxHighlighter>
          </div>
        );
        
      case 'definition':
        return (
          <div key={index} className={styles.definition}>
            <span className={styles.term}>{item.term}</span>
            <span className={styles.definitionText}>{item.definition}</span>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className={styles.contentContainer}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        {content.map((item, index) => renderContent(item, index))}
      </div>
    </div>
  );
}