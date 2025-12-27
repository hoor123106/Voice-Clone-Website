import styles from "./Footer.module.css"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ctaSection}>
        <h2 className={styles.ctaHeading}>Your Voice Can Change Your Life.</h2>
        <p className={styles.ctaSubheading}>Start today — and never sound the same again.</p>
        <button className={styles.ctaButton}>
          <img src="/images/tree.png" alt="" className={styles.footerTree} />
          Get Instant Access - 40% off</button>
        <p className={styles.deliveryText}>📩 Deliver immediately. No Shipping</p>
      </div>

      <div className={styles.footerContent}>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Sevil Velsha</h3>
          <p className={styles.description}>
            Unlock the power of your voice—speak with clarity, authority, and emotional impact. Whether you're
            presenting on stage, leading a team, negotiating a deal, or preparing for TED, your voice is your instrument
            of influence.
          </p>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Quick Links</h3>
          <ul className={styles.linkList}>
            <li>
              <a href="#">Ph.D. in intonation and acoustics</a>
            </li>
            <li>
              <a href="#">My story</a>
            </li>
            <li>
              <a href="#">About me</a>
            </li>
            <li>
              <a href="#">How We Work</a>
            </li>
            <li>
              <a href="#">Testimonial</a>
            </li>
            <li>
              <a href="#">Order</a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Opening Hours</h3>
          <ul className={styles.infoList}>
            <li>📺 YouTube: [The Voice Studio - Sevil Velsha]</li>
            <li>📷 Instagram: @sevil.velsha</li>
            <li>✍️ Blog: Sound & Presence – Reflections on Speaking, Voice & Performance</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copyright}>Copyright © 2025 Sevil Velsha</p>
        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialIcon} aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Instagram">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
