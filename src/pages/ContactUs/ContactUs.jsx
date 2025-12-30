import React from 'react'
import styles from './ContactUs.module.css'
import ContactForm from '../../components/ContactForm/ContactForm'

const ContactUs = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.background}></div>
          <div className={styles.pageContent}>
            {/* <span className={styles.partnerBadge}>Contact Us</span> */}
            <h1>Let’s Build a Stronger Microsoft <br className='responsive-br' />
              Security Posture Together</h1>
            <p>Connect with ACPL’s certified Microsoft specialists to discuss your cloud, identity, threat<br className='responsive-br' />
              protection, or compliance requirements — and get tailored guidance for your enterprise.</p>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  )
}

export default ContactUs
