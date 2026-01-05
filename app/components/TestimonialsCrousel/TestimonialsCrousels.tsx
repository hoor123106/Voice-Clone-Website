"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import styles from "./TestimonialsCrousels.module.css"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    quote: "Clear, grounded, and practical. It explains voice authority without exaggeration.",
    author: "Daniel Morgan",
    role: "Leadership Coach",
    image: "/images/Testimonial-Crousel-Image.webp",
    position: "center"
  },
  {
    id: 2,
    quote: "Finally, a serious explanation of how voice affects trust.",
    author: "Elena Petrova",
    role: "Speech Coach",
    image: "/images/Testimonial-Crousel-Image-2.jpg",
    position: "top"
  },
  {
    id: 3,
    quote: "Useful for anyone who teaches, leads, or speaks for a living.",
    author: "Mark Thompson",
    role: "Educator",
    image: "/images/Testimonial-Crousel-Image-3.jpg",
    position: "center"
  },
  {
    id: 4,
    quote: "This connects voice technique with real psychological impact.",
    author: "Sofia Reynolds",
    role: "Corporate Trainer",
    image: "/images/Testimonial-Crousel-Image-4.jpg",
    position: "center"
  }
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
    enter: { x: 50, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <Image
              src={testimonials[currentIndex].image}
              alt="Testimonials Background"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: testimonials[currentIndex].position
              }}
              className={styles.backgroundImage}
              priority
            />
          </motion.div>
        </AnimatePresence>
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
            transition={{ duration: 0.6 }}
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