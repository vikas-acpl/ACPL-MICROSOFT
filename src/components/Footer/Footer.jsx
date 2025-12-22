import React from 'react'
import styles from './Footer.module.css'
import AcplLogo from '../../assets/acpl-logo-white.svg'
import GlobeIcon from '../../assets/globe.svg'
import MailIcon from '../../assets/mail.svg'
import PhoneIcon from '../../assets/phone.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <section className={styles.cta}>
        <div className={`container ${styles.ctaContainer}`}>
          <div className={styles.ctaContent}>
            <h2>Secure Your Cloud Journey With ACPL <br />(A Microsoft MSP and CSP Partner)</h2>
            <button className='btn btn--primary'>Request a Quote</button>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={`container ${styles.footerContainer}`}>
          {/* Left: Logo + tagline */}
          <div className={styles.brandBlock}>
            <img src={AcplLogo} alt="ACPL" className={styles.logo} />
            <p className={styles.tagline}>
              Securing the future of enterprise with Microsoft.
            </p>
          </div>

          {/* Middle: Links */}
          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Services</h4>
              <Link to="/services/cloud-security" className={styles.link}>Cloud Security and Firewall</Link>
              <Link to="/services/endpoint-security" className={styles.link}>Endpoint Security & Management</Link>
              <Link to="/services/zero-trust" className={styles.link}>Zero Trust & Identity</Link>
              <Link to="/services/siem-xdr" className={styles.link}>SIEM & XDR</Link>
              <Link to="/services/data-security" className={styles.link}>Data Security & Governance</Link>
              <Link to="/services/compliance" className={styles.link}>Compliance Management</Link>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Company</h4>
              <a href="#" className={styles.link}>About ACPL</a>
              <Link to="/contact" className={styles.link}>Contact</Link>
              <Link to="/privacy-policy" className={styles.link}>Privacy Policy</Link>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Contact</h4>
              <div className={styles.contactRow}>
                <img src={GlobeIcon} className={styles.contactIcon} />
                <a href="https://acpl.com" className={styles.link}>acpl.com</a>
              </div>
              <div className={styles.contactRow}>
                <img src={MailIcon} className={styles.contactIcon} />
                <a href="mailto:microsoft.experts@acpl.com" className={styles.link}>
                  microsoft.experts@acpl.com
                </a>
              </div>
              <div className={styles.contactRow}>
                <img src={PhoneIcon} className={styles.contactIcon} />
                <a href="tel:+918377008167" className={styles.link}>
                  +91-8377008167
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.footerBottom}>
          <div className="container">
            <p className={styles.copy}>
              © 2025 ACPL Systems. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer