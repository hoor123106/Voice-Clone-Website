"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import styles from "./TestimonialsCrousels.module.css"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    quote: "Voice Control is a groundbreaking guide to mastering vocal power, emotional regulation, and authentic presence essential reading for anyone who speaks to be heard.",
    author: "SEVIL VELSHA",
    role: "Speaker - Coach, Author of Voice Control",
  },
  {
    id: 2,
    quote: "An incredible resource that transformed how I communicate. The techniques are practical, effective, and life-changing for any professional.",
    author: "JAMES MORGAN",
    role: "CEO, Leadership Expert",
  },
  {
    id: 3,
    quote: "This approach to vocal mastery has revolutionized my coaching practice. My clients see immediate results in their confidence and presence.",
    author: "SARAH CHEN",
    role: "Executive Coach, Public Speaker",
  },
  {
    id: 4,
    quote: "A must-read for anyone in leadership. The insights on emotional regulation through voice are game-changing and backed by real science.",
    author: "DAVID RODRIGUEZ",
    role: "Organizational Psychologist",
  },
  {
    id: 5,
    quote: "The most comprehensive guide I've found on vocal presence. It's transformed not just my speaking, but my entire professional identity.",
    author: "EMILY WATSON",
    role: "TEDx Speaker, Author",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const variants = {
    enter: { x: 100, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/TestimonailsBigImage.png"
          alt="Testimonials Background"
          fill
          className={styles.backgroundImage}
          priority
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className={styles.testimonialContent}
          >
            <p className={styles.quote}>"{testimonials[currentIndex].quote}"</p>
            <div className={styles.author}>
              <p className={styles.authorName}>— {testimonials[currentIndex].author}</p>
              <p className={styles.authorRole}>{testimonials[currentIndex].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className={styles.pagination}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}