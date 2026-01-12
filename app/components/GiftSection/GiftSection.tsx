"use client"

import styles from "./GiftSection.module.css"

export default function GiftSection() {
  return (
    <section className={styles.giftSection}>
      <div className={styles.container}>

        {/* Text Left Side */}
        <div className={styles.content}>
          <h2 className={styles.heading}>
            <span className={styles.lineOne}>
              <img src="/images/giftBox.webp" alt="Tree" className={styles.treeIcon} />
              A Gift that Arrives in
            </span>
            <span className={styles.lineTwo}>Seconds</span>
          </h2>

          <p className={styles.description}>
            Instant digital delivery. Perfect for anyone who wants to
            transform their voice and confidence.
          </p>

          <button type="button" className={styles.giftButton}>
            Send as a Gift
          </button>
        </div>

        {/* Image Right Side */}
        <div className={styles.imageWrapper}>
          <img
            src="/images/GiftGirl.png"
            alt="Vocal Coach"
            className={styles.personImage}
          />
        </div>

      </div>
    </section>
  )
}