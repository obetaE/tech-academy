import React from 'react';
import CourseHeader from '@/components/CourseHeader/CourseHeader';
import CourseProgress from '@/components/CourseProgress/CourseProgress';
import CourseContent from '@/components/CourseContent/CourseContent';
import CourseSidebar from '@/components/CourseSidebar/CourseSidebar';
import AssignmentBlock from '@/components/AssignmentBlock/AssignmentBlock';
import styles from './CoursePage.module.css';

export default function CoursePage() {
  const courseData = {
    title: "HTML & CSS Fundamentals",
    instructor: "Alex Morgan",
    duration: "4 weeks",
    progress: 65,
    currentModule: "Week 1 – HTML Essentials",
    modules: [
      {
        id: "week1",
        title: "Week 1 – HTML Essentials",
        completed: true,
        topics: [
          { id: "what-is-html", title: "What is HTML?", completed: true },
          { id: "html5-tags", title: "HTML5 Semantic Tags", completed: true },
          { id: "forms-tables", title: "Forms, Inputs, Buttons, and Tables", completed: true },
          { id: "page-structures", title: "Building Simple Page Structures", completed: false }
        ]
      },
      {
        id: "week2",
        title: "Week 2 – CSS Fundamentals",
        completed: false,
        topics: [
          { id: "css-intro", title: "Introduction to CSS", completed: false },
          { id: "selectors", title: "CSS Selectors & Specificity", completed: false },
          { id: "box-model", title: "The Box Model", completed: false }
        ]
      },
      {
        id: "week3",
        title: "Week 3 – CSS Layouts",
        completed: false,
        topics: [
          { id: "flexbox", title: "Flexbox Layout", completed: false },
          { id: "grid", title: "CSS Grid", completed: false }
        ]
      },
      {
        id: "week4",
        title: "Week 4 – Responsive Design",
        completed: false,
        topics: [
          { id: "media-queries", title: "Media Queries", completed: false },
          { id: "responsive-patterns", title: "Responsive Design Patterns", completed: false }
        ]
      }
    ]
  };

 const currentTopic = {
  id: "html-essentials",
  title: "HTML Essentials",
  content: [
    {
      type: "text",
      content: "HTML stands for HyperText Markup Language. It is the standard language for creating the structure of web pages."
    },
    {
      type: "definition",
      term: "HyperText",
      definition: "Text with links to other text or resources"
    },
    {
      type: "definition",
      term: "Markup Language",
      definition: "Uses tags to describe how content should be structured, not how it should look (that's CSS)"
    },
    {
      type: "highlight",
      content: "HTML is like the skeleton of a website — without it, there's nothing to style or make interactive."
    },
    {
      type: "subheader",
      content: "Basic HTML Structure"
    },
    {
      type: "code",
      language: "html",
      content: `<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>
  <h1>This is a Heading</h1>
  <p>This is a paragraph.</p>
</body>
</html>`
    },
    {
      type: "text",
      content: "This is the standard HTML structure used for every site. Each element handles a unique task:"
    },
    {
      type: "list",
      items: [
        "The <!DOCTYPE html> declaration defines an HTML5 document",
        "The <html> element is the root element",
        "The <head> element contains meta information",
        "The <title> element specifies the page title",
        "The <body> element defines the visible content",
        "The <h1> element defines a large heading",
        "The <p> element defines a paragraph"
      ]
    },
    {
      type: "subheader",
      content: "HTML Tags and Elements"
    },
    {
      type: "text",
      content: "HTML tags are markup indicators wrapped in <> and </>. An HTML element includes both tags and content:"
    },
    {
      type: "code",
      language: "html",
      content: `<tagname>Content goes here...</tagname>`
    },
    {
      type: "example",
      content: "<h1>My First Heading</h1>\n<p>My first paragraph.</p>"
    },
    {
      type: "subheader",
      content: "Semantic Tags"
    },
    {
      type: "text",
      content: "Semantic tags describe the meaning of content, making pages more understandable to browsers, search engines, and developers."
    },
    {
      type: "subheader",
      content: "Block vs Inline Elements"
    },
    {
      type: "text",
      content: "Block elements start on a new line and take full width. Inline elements stay in the same line as surrounding text."
    },
    {
      type: "highlight",
      content: "Block Elements"
    },
    {
      type: "list",
      items: [
        "<div>", "<p>", "<h1>–<h6>", "<section>", "<article>", 
        "<header>", "<footer>", "<nav>", "<ul>", "<ol>", "<li>", "<table>"
      ]
    },
    {
      type: "highlight",
      content: "Inline Elements"
    },
    {
      type: "list",
      items: [
        "<span>", "<a>", "<b>", "<i>", "<strong>", "<em>", 
        "<img>", "<label>", "<br> (self-closing)"
      ]
    },
    {
      type: "subheader",
      content: "Container Tags"
    },
    {
      type: "text",
      content: "Container tags hold other HTML elements. They organize content, control layout, group related items, and improve accessibility."
    },
    {
      type: "definition",
      term: "<div>",
      definition: "Generic container (non-semantic, block element)"
    },
    {
      type: "example",
      content: `<div style="background: lightgray; padding: 10px;">
  <h2>My Profile</h2>
  <p>This is some info about me.</p>
</div>`
    },
    {
      type: "definition",
      term: "<body>",
      definition: "Main content holder (block element, only one per document)"
    },
    {
      type: "definition",
      term: "<main>",
      definition: "Core content container (semantic, block element)"
    },
    {
      type: "definition",
      term: "<section>",
      definition: "Thematic container (semantic, block element)"
    },
    {
      type: "definition",
      term: "<header>",
      definition: "Top container for navigation/intro (semantic, block element)"
    },
    {
      type: "definition",
      term: "<footer>",
      definition: "Bottom container for footer info (semantic, block element)"
    },
    {
      type: "definition",
      term: "<nav>",
      definition: "Navigation container (semantic, block element)"
    },
    {
      type: "definition",
      term: "<article>",
      definition: "Standalone content container (semantic, block element)"
    },
    {
      type: "definition",
      term: "<aside>",
      definition: "Side content container (semantic, block element)"
    },
    {
      type: "subheader",
      content: "Container Tips"
    },
    {
      type: "list",
      items: [
        "Use semantic containers whenever possible",
        "Use <div> as a last resort",
        "Containers can nest other containers",
        "Think of containers like organizing folders"
      ]
    },
    {
      type: "subheader",
      content: "Complete Structure Example"
    },
    {
      type: "code",
      language: "html",
      content: `<body>
  <header>
    <h1>My Portfolio</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">Projects</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <main>
    <section>
      <h2>About Me</h2>
      <p>I am a web developer who loves building websites.</p>
    </section>

    <section>
      <h2>My Projects</h2>
      <article>
        <h3>Portfolio Website</h3>
        <p>This site you are on right now!</p>
      </article>
    </section>
  </main>

  <aside>
    <h3>Recent Posts</h3>
    <ul>
      <li><a href="#">Learning HTML</a></li>
      <li><a href="#">CSS Tricks</a></li>
    </ul>
  </aside>

  <footer>
    <p>&copy; 2025 Chuka</p>
  </footer>
</body>`
    },
    {
      type: "subheader",
      content: "Text Tags"
    },
    {
      type: "definition",
      term: "<h1>-<h6>",
      definition: "Headings (block elements)"
    },
    {
      type: "definition",
      term: "<p>",
      definition: "Paragraph (block element)"
    },
    {
      type: "definition",
      term: "<b> vs <strong>",
      definition: "Bold (visual) vs Strong (semantic importance)"
    },
    {
      type: "definition",
      term: "<i> vs <em>",
      definition: "Italic (visual) vs Emphasis (semantic)"
    },
    {
      type: "definition",
      term: "<br>",
      definition: "Line break (inline, self-closing)"
    },
    {
      type: "definition",
      term: "<small>",
      definition: "Small text (inline)"
    },
    {
      type: "definition",
      term: "<mark>",
      definition: "Highlighted text (inline)"
    },
    {
      type: "definition",
      term: "<del> & <ins>",
      definition: "Deleted (strikethrough) & Inserted (underline)"
    },
    {
      type: "definition",
      term: "<sup> & <sub>",
      definition: "Superscript & Subscript"
    },
    {
      type: "definition",
      term: "<abbr>",
      definition: "Abbreviation with tooltip"
    },
    {
      type: "subheader",
      content: "Element Type Summary"
    },
    {
      type: "table",
      headers: ["Tag", "Type", "Purpose"],
      rows: [
        ["<h1>-<h6>", "Block", "Headings"],
        ["<p>", "Block", "Paragraphs"],
        ["<b>", "Inline", "Bold (no meaning)"],
        ["<strong>", "Inline", "Bold (important)"],
        ["<i>", "Inline", "Italic (no meaning)"],
        ["<em>", "Inline", "Italic (emphasized)"],
        ["<br>", "Inline", "Line break"],
        ["<small>", "Inline", "Smaller text"],
        ["<mark>", "Inline", "Highlighted text"],
        ["<del>", "Inline", "Deleted text"],
        ["<ins>", "Inline", "Inserted text"],
        ["<sup>", "Inline", "Superscript"],
        ["<sub>", "Inline", "Subscript"],
        ["<abbr>", "Inline", "Abbreviation"]
      ]
    }
  ]
};

  const assignment = {
    title: "Practice Assignment",
    description: "Create a simple HTML page with the following structure:",
    requirements: [
      "Use all HTML5 semantic tags covered in this lesson",
      "Include a header with a title",
      "Create a navigation menu with at least 3 links",
      "Add a main content area with a section",
      "Include a footer with copyright information"
    ],
    hint: "Refer to the example structure provided in the lesson"
  };

  return (
    <div className={styles.coursePage}>
      <CourseHeader 
        title={courseData.title} 
        instructor={courseData.instructor}
        duration={courseData.duration}
      />
      
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <CourseProgress 
            progress={courseData.progress} 
            moduleTitle={courseData.currentModule}
          />
          
          <CourseContent 
            title={currentTopic.title}
            content={currentTopic.content}
          />
          
          <AssignmentBlock assignment={assignment} />
        </div>
        
        <div className={styles.sidebar}>
          <CourseSidebar 
            modules={courseData.modules} 
            currentTopicId={currentTopic.id}
          />
        </div>
      </div>
    </div>
  );
}