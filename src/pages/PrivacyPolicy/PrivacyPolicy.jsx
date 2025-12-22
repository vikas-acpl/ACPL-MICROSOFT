import React from 'react'
import styles from './PrivacyPolicy.module.css'

const PrivacyPolicy = () => {
  return (
    <>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.background}></div>
          <div className={styles.pageContent}>
            <h1>Privacy Policy</h1>
          </div>
        </div>
      </section>

      {/* Policy body */}
      <section className={styles.policy}>
        <div className={`container ${styles.policyContainer}`}>
          <p className={styles.intro}>
            ACPL Systems Pvt. Ltd. is committed to protecting your information. Please
            read this Privacy Policy carefully as it sets out important information
            relating to how we handle your personal information.
          </p>
          <p className={styles.intro}>
            We may change this policy from time to time by updating this page without
            notice. You acknowledge and agree that it is your responsibility to review
            this Privacy Policy periodically to familiarize yourself with any
            modifications. Your continued use of this site after such modifications will
            constitute acknowledgment and agreement of the modified terms and conditions.
          </p>

          <h2 className={styles.sectionTitle}>What we collect</h2>
          <p className={styles.bodyText}>
            We may collect from you personal and non‑personal information necessary to
            render our services, such as:
          </p>
          <ul className={styles.list}>
            <li>Identification details</li>
            <li>Contact information including email address and phone number</li>
            <li>
              Demographic information such as postcode, preferences, and interests
            </li>
          </ul>

          <h2 className={styles.sectionTitle}>What we do with the information we gather</h2>
          <p className={styles.bodyText}>
            We require this information to understand your needs and provide you with a
            better service, and in particular for the following reasons:
          </p>
          <ul className={styles.list}>
            <li>Internal record keeping</li>
            <li>To improve our products and services</li>
            <li>
              To send promotional emails about products, special offers, or other
              information we think you may find interesting
            </li>
            <li>
              To contact you for market research purposes by email, phone, or mail and to
              customize the website according to your interests
            </li>
            <li>To improve customer service</li>
            <li>To improve our website</li>
          </ul>

          <h2 className={styles.sectionTitle}>Security</h2>
          <p className={styles.bodyText}>
            We adopt appropriate data collection, storage, and processing practices and
            security measures to protect against unauthorized access, alteration,
            disclosure, or destruction of your personal information, username, password,
            transaction information, and data stored on our site.
          </p>

          <h2 className={styles.sectionTitle}>Links to other websites</h2>
          <p className={styles.bodyText}>
            Our website may contain links to other websites of interest. However, once
            you have used these links to leave our site, you should note that we do not
            have any control over that other website. Therefore, we cannot be responsible
            for the protection and privacy of any information which you provide whilst
            visiting such sites, and such sites are not governed by this privacy
            statement. You should exercise caution and review the privacy statement
            applicable to the website in question.
          </p>

          <h2 className={styles.sectionTitle}>Controlling your personal information</h2>
          <p className={styles.bodyText}>
            We do not sell, distribute, or lease your personal information to third
            parties unless we have your permission or are required by law to do so.
          </p>
          <p className={styles.bodyText}>
            Questions, comments, and requests regarding this Privacy Policy should be
            addressed to our Data Protection Office via email at{' '}
            <a href="mailto:info@acpl.com" className={styles.link}>
              info@acpl.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicy