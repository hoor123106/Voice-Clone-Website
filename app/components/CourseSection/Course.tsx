"use client";

import React, { useState } from 'react';
import styles from './Course.module.css';

const Course: React.FC = () => {
  const [activeModule, setActiveModule] = useState<number>(1);

  const modules = [
    { id: 1, title: "Foundations of Vocal Power" },
    { id: 2, title: "Breath Control & Support" },
    { id: 3, title: "Resonance & Tone Shaping" },
    { id: 4, title: "Articulation & Dynamics" },
    { id: 5, title: "Emotional Expression & Presence" },
    { id: 6, title: "Vocal Strategy for Real-World Success" },
  ];

  return (
    <section className={styles.courseSection}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
             <span className={styles.headerEmoji}>📚</span>
             <h2 className={styles.title}>Course Curriculum</h2>
          </div>
          <p className={styles.subtitle}>
            Each module includes video lessons, guided drills, feedback prompts, and warmups used 
            by stage performers and professional speakers.
          </p>
        </div>

        <div className={styles.accordionContainer}>
          {modules.map((module) => (
            <div 
              key={module.id} 
              onClick={() => setActiveModule(module.id)} 
              className={`${styles.accordionItem} ${activeModule === module.id ? styles.activeItem : ''}`}
            >
              <div className={styles.moduleContent}>
                <span className={styles.moduleTitle}>
                  Module {module.id} — {module.title}
                </span>
                <div className={styles.arrowIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Course;