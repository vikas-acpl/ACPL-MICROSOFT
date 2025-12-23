import React from 'react'
import styles from './AboutUs.module.css'
import UspIcon1 from '../../assets/UspIcon1.svg'
import UspIcon2 from '../../assets/UspIcon2.svg'
import UspIcon3 from '../../assets/UspIcon3.svg'
import UspIcon4 from '../../assets/UspIcon4.svg'
import UspIcon5 from '../../assets/UspIcon5.svg'
import CollabImage from '../../assets/collabImage.svg'
import CityIcon1 from '../../assets/CityIcon1.svg'
import CityIcon2 from '../../assets/CityIcon2.svg'
import CityIcon3 from '../../assets/CityIcon3.svg'
import CityIcon4 from '../../assets/CityIcon4.svg'
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.background}></div>
          <div className={styles.pageContent}>
            <span className={styles.partnerBadge}>About ACPL</span>
            <h1>Securing Digital Assets <br className='responsive-br'/>Since 1990.</h1>
            <p>As a certified Microsoft Security partner, ACPL combines deep domain expertise with proven service<br className='responsive-br' />
              delivery to help organizations modernize, secure, and scale their digital environments with confidence.</p>
            <a href="https://acpl.com/" target="_blank" rel="noopener noreferrer" className="btn btn--primary">Learn About ACPL</a>
          </div>
        </div>
      </section>
      <section className={styles.aboutUsp}>
        <div className={`container ${styles.aboutUspContainer}`}>
          <div className={styles.uspGrid}>
            <div className={`${styles.uspCard} ${styles.uspIconSecondary}`}>
              <div className={styles.uspIcon}>
                <img src={UspIcon1} />
              </div>
              <h3>1990</h3>
              <p>Year Founded</p>
            </div>

            <div className={styles.uspCard}>
              <div className={styles.uspIcon}>
                <img src={UspIcon2} />
              </div>
              <h3>Smartdog</h3>
              <p>Developer's of India's first Anti-virus</p>
            </div>

            <div className={`${styles.uspCard} ${styles.uspIconSecondary}`}>
              <div className={styles.uspIcon}>
                <img src={UspIcon3} />
              </div>
              <h3>350+</h3>
              <p>Trained, Certified & Experienced Professionals</p>
            </div>

            <div className={styles.uspCard}>
              <div className={styles.uspIcon}>
                <img src={UspIcon4} />
              </div>
              <h3>Offices</h3>
              <p>Delhi NCR, Mumbai, Bangalore, Singapore, Australia</p>
            </div>

            <div className={`${styles.uspCard} ${styles.uspIconSecondary}`}>
              <div className={styles.uspIcon}>
                <img src={UspIcon5} />
              </div>
              <h3>500+</h3>
              <p>Medium and Large Enterprises, PSU's & Govt clients</p>
            </div>
          </div>
        </div>
      </section>
      <motion.section
        initial={{ opacity: 0, y: 56 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: 'tween',
          duration: 0.6,
          ease: 'easeOut',
        }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <section className={styles.acplAdvantage}>
          <div className={`container ${styles.advantageContainer}`}>
            <div className={styles.advantageGrid}>
              <div className={styles.advantageContent}>
                <p className={styles.advantageTag}>WE RECOMMEND THE BEST</p>
                <h2 className={styles.advantageTitle}>
                  Pioneering Cyber Defense
                </h2>
                <p className={styles.advantageBody}>
                  ACPL Systems has been at the forefront of Information Security since 1990. We began by developing India's first antivirus, SmartDog, demonstrating our engineering DNA and deep understanding of threat landscapes.
                </p>
                <p className={styles.advantageBody}>
                  Today, we have evolved into a specialized Managed Security Service Provider (MSSP), partnering with global leaders like Microsoft to deliver comprehensive protection. Our journey from product developers to solution architects gives us a unique perspective—we don't just deploy tools; we understand the code behind the threats.
                </p>
              </div>
              <div className={styles.rightImage}>
                <img src={CollabImage} />
              </div>
            </div>
          </div>
        </section>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 56 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: 'tween',
          duration: 0.6,
          ease: 'easeOut',
        }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <section className={styles.services}>
          <div className={`container ${styles.serviceContainer}`}>
            <div className={styles.servicesHeading}>
              <h2>Our Offices</h2>
            </div>
            <div className={styles.cityGrid}>
              <div className={styles.cityCard}>
                <div className={styles.cityCardIcon}><img src={CityIcon1} /></div>
                <h3>NCR</h3>
              </div>
              <div className={styles.cityCard}>
                <div className={styles.cityCardIcon}><img src={CityIcon2} /></div>
                <h3>Mumbai</h3>
              </div>
              <div className={styles.cityCard}>
                <div className={styles.cityCardIcon}><img src={CityIcon3} /></div>
                <h3>Bengaluru</h3>
              </div>
              <div className={styles.cityCard}>
                <div className={styles.cityCardIcon}><img src={CityIcon4} /></div>
                <h3>Australia</h3>
              </div>
            </div>
          </div>
        </section>
      </motion.section>
    </>
  )
}

export default AboutUs
