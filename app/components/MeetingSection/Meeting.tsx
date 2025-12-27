"use client";

import React from 'react';
import styles from './Meeting.module.css';

const Meeting: React.FC = () => {
  return (
    <section className={styles.meetingSection}>
      <div className={styles.container}>
        
        {/* Video Left side par */}
        <div className={styles.videoWrapper}>
          <div className={styles.imageContainer}>
            <img 
              src="/images/video.png" 
              alt="Sevil Velsha Video" 
              className={styles.videoImage} 
            />
            <div className={styles.playButton}>
              <div className={styles.playIcon}></div>
            </div>
          </div>
        </div>

        {/* Content Right side par - Single Title logic */}
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>
            Meet the Voice Behind the Method
          </h2>
          
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <img src="/images/degree.png" alt="Education" className={styles.listIcon} />
              <span>Researcher in intonation & speech science</span>
            </li>
            <li className={styles.listItem}>
              <img src="/images/face.png" alt="Vocal" className={styles.listIcon} />
              <span>Actor-based vocal techniques</span>
            </li>
            <li className={styles.listItem}>
              <img src="/images/mic.png" alt="Microphone" className={styles.listIcon} />
              <span>Used by speakers, educators & leaders</span>
            </li>
            <li className={styles.listItem}>
              <img src="/images/pen.png" alt="Author" className={styles.listIcon} />
              <span>Author of Voice Control</span>
            </li>
          </ul>

          <div className={styles.bioText}>
            <p>
              Sevil Velsha is a voice coach, PhD, and educator dedicated to helping people 
              unlock authority, calm, and presence through their voice.
            </p>
            <span className={styles.quote}>
              "Her work proves one truth: your voice is not just sound — it is presence made audible."
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Meeting;